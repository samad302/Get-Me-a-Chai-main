'use client';
import React, { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import Link from "next/link";
import { fetchPayments, fetchUser, initiate } from "@/actions/userActions";
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useRouter, useSearchParams } from "next/navigation";
import { HashLoader } from "react-spinners";
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const [loading, setLoading] = useState(true);
    const [paymentform, setPaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    });
    const [currentUser, setCurrentUser] = useState({});
    const [payments, setPayments] = useState([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const updated = searchParams.get('updated');

    useEffect(() => {
        document.title = `Support - ${username}`;
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, [username]);

    const sanitizeInput = (input) => {
        return input ? input.toString().replace(/<[^>]*>?/gm, '') : '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentform(prev => ({
            ...prev,
            [name]: sanitizeInput(value)
        }));
    };

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const [userData, paymentData] = await Promise.all([
                fetchUser(username),
                fetchPayments(username)
            ]);
            setCurrentUser(userData || {});
            setPayments(paymentData || []);
        } catch (error) {
            console.error("Error getting data:", error);
            toast.error('Failed to load data', {
                position: "bottom-right",
                autoClose: 2500,
                closeOnClick: true,
                pauseOnHover: false,
                theme: "dark",
                transition: Slide
            });
        } finally {
            setLoading(false);
        }
    }, [username]);

    useEffect(() => {
        getData();
    }, [getData, updated]);

    const showToast = (message, type = 'error') => {
        toast[type](message, {
            position: "bottom-right",
            autoClose: 2500,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "dark",
            transition: Slide
        });
    };

    const pay = async (amount) => {
        if (!paymentform.name) return showToast('Name is required');
        if (!amount || amount < 100) return showToast('Amount must be at least ₨1');
        if (!currentUser.razrpayId || !currentUser.razrpaySecret) return showToast(`${username} has not set up payment methods`);

        try {
            const response = await initiate(amount, username, paymentform);
            const orderId = response.id;

            const options = {
                key: currentUser.razrpayId,
                amount: amount,
                currency: "PKR",
                name: "Get-Me-A-Chai",
                description: "Support Payment",
                image: `${process.env.NEXT_PUBLIC_URL}/icons/tea.gif`,
                order_id: orderId,
                handler: async function (response) {
                    try {
                        const paymentResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/razorpay`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                                username,
                                payerInfo: paymentform
                            })
                        });

                        const result = await paymentResponse.json();
                        if (result.success) {
                            setPaymentform({ name: '', message: '', amount: '' });
                            await getData();
                            showToast("Payment confirmed!", 'success');
                            router.push(`/${username}?updated=${Date.now()}`);
                        } else {
                            showToast(result.message || "Payment verification failed");
                        }
                    } catch (error) {
                        console.error("Payment verification error:", error);
                        showToast("Payment verification failed");
                    }
                },
                prefill: {
                    name: paymentform.name,
                    email: paymentform.email || "",
                    contact: paymentform.contact || ""
                },
                theme: {
                    color: "#5DADE2"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                showToast(response.error.description);
            });
            rzp1.open();

        } catch (error) {
            console.error("Payment initiation failed:", error);
            showToast("Payment initiation failed");
        }
    };

    const quickPay = (amount) => {
        if (!paymentform.name) {
            document.getElementsByName('name')[0].focus();
            showToast('Please enter your name first');
            return;
        }
        pay(amount);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <HashLoader color="#5DADE2" loading={loading} size={50} />
            </div>
        );
    }

    return (
        <>
            <Script 
                src="https://checkout.razorpay.com/v1/checkout.js" 
                strategy="beforeInteractive"
                onError={() => showToast('Failed to load payment gateway')}
            />
            <ToastContainer />

            {/* 🔥 Updated Cover Image Section */}
            <div className='cover w-full relative'>
                <img 
                    className="object-cover w-full h-48 md:h-56 lg:h-64 opacity-85" 
                    alt="Cover" 
                    src="https://i.redd.it/onyqx5ayj1kb1.gif" 
                />
                <div className="absolute -bottom-10 md:-bottom-20 left-1/2 transform -translate-x-1/2 border-2 border-white rounded-full">
                    <img 
                        src={`${currentUser.profilePic || '/default-avatar.png'}?t=${Date.now()}`} 
                        className='rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover' 
                        alt="Profile" 
                        onError={(e) => e.target.src = '/default-avatar.png'}
                    />
                </div>
            </div>

            {/* Rest of your content remains unchanged */}
            <div className='info text-center mt-10 mb-10 md:mt-20 md:mb-24'>
                <div className="font-bold text-xl">@{username}</div>
                <div className='text-slate-400 mt-2'>Let's help {username} to get a Chai</div>
                <div className='text-slate-400 mt-1'>
                    {payments.length} Payments Received · ₨{payments.reduce((a, b) => a + (b.amount || 0), 0)} raised
                </div>

                {currentUser.project ? (
                    <div className="max-w-2xl mx-auto font-bold bg-slate-900 p-5 mt-5 rounded-xl">
                        <div className="mb-2">
                            Project: {currentUser.project} 
                            {currentUser.projectLink && (
                                <Link href={currentUser.projectLink} className='text-blue-400 ml-2'>
                                    [Link]
                                </Link>
                            )}
                        </div>
                        {currentUser.projectDescription && (
                            <div className="text-sm font-normal">
                                {currentUser.projectDescription}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="mt-5 text-slate-400">No active project</div>
                )}
            </div>

            <div className="container mx-auto px-4 mb-11">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-6">
                        <h2 className='text-2xl font-bold mb-5'>Top Supporters</h2>
                        <ul className='space-y-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar'>
                            {payments.slice(0, 7).map((p, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <img 
                                        src="/icons/avatar.gif" 
                                        className="w-8 h-8 rounded-full" 
                                        alt="Supporter" 
                                    />
                                    <div>
                                        <span className="font-medium">{p.name || 'Anonymous'}</span>
                                        <span className="ml-2 font-bold">₨{p.amount || 0}</span>
                                        {p.message && (
                                            <div className="text-sm text-slate-300">"{p.message}"</div>
                                        )}
                                    </div>
                                </li>
                            ))}
                            {payments.length === 0 && (
                                <li className="text-slate-400">No payments yet</li>
                            )}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-6">
                        <h2 className="text-2xl font-bold mb-5">Make a Payment</h2>
                        <div className="space-y-4">
                            <input 
                                onChange={handleChange} 
                                value={paymentform.name} 
                                type="text" 
                                className='w-full p-3 rounded-lg bg-slate-800 focus:ring-2 focus:ring-blue-500' 
                                name="name" 
                                placeholder='Your Name' 
                                required 
                            />
                            <input 
                                onChange={handleChange} 
                                value={paymentform.message} 
                                type="text" 
                                className='w-full p-3 rounded-lg bg-slate-800 focus:ring-2 focus:ring-blue-500' 
                                name="message" 
                                placeholder='Your Message (Optional)' 
                            />
                            <input 
                                onChange={handleChange} 
                                value={paymentform.amount} 
                                type="number" 
                                className='w-full p-3 rounded-lg bg-slate-800 focus:ring-2 focus:ring-blue-500' 
                                name="amount" 
                                placeholder='Amount in ₨' 
                                min="1"
                            />
                            <div className='flex justify-center pt-2'>
                                <button 
                                    onClick={() => pay(paymentform.amount ? paymentform.amount * 100 : 0)} 
                                    className="bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg px-6 py-3 transition-all w-full max-w-xs"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {[10, 100, 500, 1000].map((amount) => (
                                <button 
                                    key={amount}
                                    onClick={() => quickPay(amount * 100)} 
                                    className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
                                >
                                    Pay ₨{amount}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #334155;
                    border-radius: 3px;
                }
            `}</style>
        </>
    );
};

export default PaymentPage;
