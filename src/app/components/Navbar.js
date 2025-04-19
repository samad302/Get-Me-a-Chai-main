'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [showdropdown, setShowdropdown] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false })
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <nav className='bg-gray-900 text-white px-4 py-3 flex flex-col md:flex-row justify-between items-center w-full'>
      {/* Logo */}
      <div className='flex justify-between items-center w-full md:w-auto'>
        <Link href='/' className='flex items-center space-x-2'>
          <img src="/icons/tea.gif" width={44} alt="Logo" className='h-11 w-11' />
          <span className='text-2xl font-bold whitespace-nowrap'>GetMeAChai!</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className='md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none'
          onClick={() => setShowdropdown(!showdropdown)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {showdropdown ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Right side content - shown on desktop by default, mobile when dropdown is open */}
      <div className={`${showdropdown ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-2 md:mt-0`}>
        {session ? (
          <>
            {/* Profile dropdown */}
            <div className='relative w-full md:w-auto'>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                className="w-full md:w-auto flex justify-between items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Welcome {session.user.username}
                <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div className={`absolute z-10 left-0 right-0 md:right-auto mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-44 dark:bg-gray-700 transition-all duration-300 overflow-hidden ${showdropdown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link 
                      href="/dashboard" 
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setShowdropdown(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/${session.user.username}`} 
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setShowdropdown(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setShowdropdown(false);
                      }}
                      className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Logout button for mobile */}
            <button
              className='w-full md:hidden text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className='w-full md:w-auto'>
            <button className='w-full md:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar