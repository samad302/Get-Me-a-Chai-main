// /pages/api/razorpay.js
import Razorpay from "razorpay";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, username, payerInfo } = req.body;

    try {
        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const isValid = razorpay.utils.verifyPaymentSignature({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });

        if (!isValid) {
            return res.status(400).json({ success: false, message: "Invalid signature" });
        }

        // Store payment in DB (example only)
        // await savePaymentToDB({ username, amount: ..., name: payerInfo.name, ... });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error("Razorpay verification failed:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}
