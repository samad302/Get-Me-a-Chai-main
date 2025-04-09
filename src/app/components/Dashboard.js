'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { fetchUser2, updateUser } from '@/actions/userActions'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { PuffLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        profilePic: '',
        coverPic: '',
        project: '',
        projectLink: '',
        projectDescription: '',
        razrpayId: '',
        razrpaySecret: ''
    })
    const [isChange, setIsChange] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [changeInUsername, setChangeInUsername] = useState(false)
    const [isInitialLoad, setIsInitialLoad] = useState(true)

    const getUserData = useCallback(async () => {
        try {
            setIsLoading(true)
            const user = await fetchUser2(session?.user?.email)
            if (user) {
                setForm(prev => ({
                    ...prev,
                    ...user,
                    // Ensure all fields have values to prevent controlled/uncontrolled warnings
                    name: user.name || '',
                    email: user.email || '',
                    username: user.username || '',
                    profilePic: user.profilePic || '',
                    coverPic: user.coverPic || '',
                    project: user.project || '',
                    projectLink: user.projectLink || '',
                    projectDescription: user.projectDescription || '',
                    razrpayId: user.razrpayId || '',
                    razrpaySecret: user.razrpaySecret || ''
                }))
                document.title = `Dashboard - ${user.name || 'Profile'}`
            } else {
                showToast('User data not found', 'error')
                document.title = "Dashboard - User Not Found"
            }
        } catch (error) {
            console.error('Error fetching user data:', error)
            showToast('Error fetching user data', 'error')
        } finally {
            setIsLoading(false)
            setIsInitialLoad(false)
        }
    }, [session])

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else if (isInitialLoad) {
            getUserData()
        }
    }, [router, getUserData, session, isInitialLoad])

    const showToast = (message, type = 'success') => {
        toast[type](message, {
            position: "bottom-right",
            autoClose: 2500,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "dark",
            transition: Slide
        })
    }

    const handleInput = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'username') {
            setChangeInUsername(true)
        }
        setForm(prev => ({ ...prev, [name]: value }))
        setIsChange(true)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const updatingUser = await updateUser(form, session.user.username)
            
            if (updatingUser) {
                if (changeInUsername) {
                    showToast('Username updated successfully')
                } else {
                    showToast('Profile updated successfully')
                }
                setIsChange(false)
                setChangeInUsername(false)
                // Refresh user data to get any server-side updates
                await getUserData()
            } else {
                showToast('Profile update failed', 'error')
                // Reset to original data
                await getUserData()
            }
        } catch (error) {
            console.error('Error updating user:', error)
            showToast('Profile update failed', 'error')
            // Reset to original data
            await getUserData()
        } finally {
            setIsLoading(false)
        }
    }

    const inputClasses = 'block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    const labelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

    return (
        <>
            <ToastContainer />
            <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8">
                <h1 className='text-center my-5 text-3xl font-bold text-gray-900 dark:text-white'>
                    Welcome to Your Dashboard
                </h1>

                {isInitialLoad ? (
                    <div className="flex justify-center items-center h-64">
                        <PuffLoader size={50} color={"#3b82f6"} />
                    </div>
                ) : (
                    <form className='max-w-2xl mx-auto' onSubmit={handleSave}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className={labelClasses}>Name</label>
                                <input 
                                    type="text" 
                                    value={form.name} 
                                    onChange={handleChange} 
                                    name='name' 
                                    id='name' 
                                    className={inputClasses} 
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className={labelClasses}>Email</label>
                                <input 
                                    type="text" 
                                    disabled 
                                    readOnly 
                                    value={form.email} 
                                    className={`${inputClasses} bg-gray-100 dark:bg-gray-600`} 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="username" className={labelClasses}>Username</label>
                                <input 
                                    type="text" 
                                    value={form.username} 
                                    onChange={handleChange} 
                                    name='username' 
                                    id='username' 
                                    className={inputClasses} 
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="project" className={labelClasses}>Project</label>
                                <input 
                                    type="text" 
                                    value={form.project} 
                                    onChange={handleChange} 
                                    name='project' 
                                    id='project' 
                                    className={inputClasses} 
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="profilePic" className={labelClasses}>Profile Picture URL</label>
                            <input 
                                type="text" 
                                value={form.profilePic} 
                                onChange={handleChange} 
                                name='profilePic' 
                                id='profilePic' 
                                className={inputClasses} 
                            />
                            {form.profilePic && (
                                <div className="mt-2">
                                    <img 
                                        src={form.profilePic} 
                                        alt="Profile Preview" 
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="coverPic" className={labelClasses}>Cover Photo URL</label>
                            <input 
                                type="text" 
                                value={form.coverPic} 
                                onChange={handleChange} 
                                name='coverPic' 
                                id='coverPic' 
                                className={inputClasses} 
                            />
                            {form.coverPic && (
                                <div className="mt-2">
                                    <img 
                                        src={form.coverPic} 
                                        alt="Cover Preview" 
                                        className="h-32 w-full rounded-lg object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="projectLink" className={labelClasses}>Project Link</label>
                            <input 
                                type="url" 
                                value={form.projectLink} 
                                onChange={handleChange} 
                                name='projectLink' 
                                id='projectLink' 
                                className={inputClasses} 
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="projectDescription" className={labelClasses}>Project Description</label>
                            <textarea 
                                value={form.projectDescription} 
                                onChange={handleChange} 
                                onInput={handleInput} 
                                name='projectDescription' 
                                id='projectDescription' 
                                className={`${inputClasses} min-h-[100px]`} 
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label htmlFor="razrpayId" className={labelClasses}>RazorPay ID</label>
                                <input 
                                    type="text" 
                                    value={form.razrpayId} 
                                    onChange={handleChange} 
                                    name='razrpayId' 
                                    id='razrpayId' 
                                    className={inputClasses} 
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="razrpaySecret" className={labelClasses}>RazorPay Secret</label>
                                <input 
                                    type="password" 
                                    value={form.razrpaySecret} 
                                    onChange={handleChange} 
                                    name='razrpaySecret' 
                                    id='razrpaySecret' 
                                    className={inputClasses} 
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={!isChange || isLoading}
                                className={`
                                    w-full md:w-48 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    transition-all duration-300 ease-in-out
                                    ${
                                        isLoading 
                                            ? 'bg-gray-500 cursor-not-allowed'
                                            : isChange
                                                ? 'bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
                                                : 'bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-700'
                                    }
                                    flex justify-center items-center
                                `}
                            >
                                {isLoading ? (
                                    <PuffLoader size={20} color={"#ffffff"} />
                                ) : (
                                    "Save Changes"
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}

export default Dashboard