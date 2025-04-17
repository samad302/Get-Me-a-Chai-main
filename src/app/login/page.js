  'use client'
  import React, { useEffect, useState, Suspense } from 'react'
  import { useSession, signIn } from "next-auth/react"
  import { useRouter, useSearchParams } from 'next/navigation'
  import { ToastContainer, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'

  // Component that uses useSearchParams
  const LoginForm = () => {
    const searchParams = useSearchParams()
    const { data: session } = useSession()
    const router = useRouter()
    const error = searchParams.get('error')
    const [isLoading, setIsLoading] = useState({
      google: false,
      github: false
    })

    useEffect(() => {
      if (session) {
        const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
        router.push(callbackUrl)
      }
    }, [session, router, searchParams])

    useEffect(() => {
      if (error) {
        let errorMessage = error
        if (error.includes('redirect_uri')) {
          errorMessage = "Authentication configuration error - please try again later"
        } else if (error.includes('AccessDenied')) {
          errorMessage = "You don't have permission to sign in"
        }
        
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
        
        // Clean the URL without causing infinite loop
        if (window.location.search.includes('error=')) {
          router.replace('/login')
        }
      }
    }, [error, router])

    const handleSignIn = async (provider) => {
      try {
        setIsLoading(prev => ({ ...prev, [provider]: true }))
        const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
        
        const result = await signIn(provider, {
          redirect: false,
          callbackUrl
        })

        if (result?.error) {
          let errorMessage = result.error
          if (result.error.includes('OAuthAccountNotLinked')) {
            errorMessage = "This email is already associated with another login method"
          }
          
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          })
        } else if (result?.url) {
          router.push(result.url)
        }
      } catch (error) {
        console.error("Sign-in error:", error)
        toast.error("An unexpected error occurred. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        })
      } finally {
        setIsLoading(prev => ({ ...prev, [provider]: false }))
      }
    }

    return (
      <div className='min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='text-center text-3xl font-extrabold text-white mb-2'>
            Welcome Back!
          </h2>
          <p className='text-center text-gray-300 mb-8'>
            Login/SignUp to get Support From Fans
          </p>
        </div>

        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <div className='space-y-4'>
              <div>
                <button
                  onClick={() => handleSignIn("google")}
                  disabled={isLoading.google}
                  className={`w-full flex justify-center items-center gap-3 py-3 px-4 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
                    isLoading.google ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading.google ? (
                    <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </>
                  )}
                  <span>{isLoading.google ? 'Signing in with Google...' : 'Continue with Google'}</span>
                </button>
              </div>

              <div>
                <button
                  onClick={() => handleSignIn("github")}
                  disabled={isLoading.github}
                  className={`w-full flex justify-center items-center gap-3 py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors ${
                    isLoading.github ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading.github ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </>
                  )}
                  <span>{isLoading.github ? 'Signing in with GitHub...' : 'Continue with GitHub'}</span>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main login component with Suspense boundary
  const Login = () => {
    return (
      <>
        <ToastContainer />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-white text-lg">Loading authentication...</div>
          </div>
        }>
          <LoginForm />
        </Suspense>
      </>
    )
  }

  export default Login
