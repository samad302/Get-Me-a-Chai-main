'use client'
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color={"#ffffff"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="flex justify-center flex-col gap-4 items-center text-white h-fit py-8 px-4 sm:px-6">
            <div className="font-bold flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center text-4xl sm:text-5xl">
              Buy Me a Chai 
              <img src="icons/tea.gif" width="88" alt="" className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>
            <p className="text-center text-base sm:text-lg max-w-md">
              A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={'/login'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Start Here
                </button>
              </Link>
              <Link href={'/read-more'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Read More
                </button>
              </Link>
            </div>
            <div className="mt-2">
              <Link href={'/profiles'}>
                <button type="button" className="w-48 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Fund Raisers
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white h-px opacity-10 w-full"></div>

          {/* Features Section */}
          <div className="text-white container mx-auto py-12 px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center mb-10 sm:mb-14">Your Fans can buy you a Chai</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8">
              <div className="space-y-3 flex flex-col items-center justify-center">
                <img src="icons/man.gif" alt="" className="bg-slate-400 rounded-full p-1 w-20 h-20 sm:w-24 sm:h-24" />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center text-sm sm:text-base">Your Fans are available for you to help you</p>
              </div>
              <div className="space-y-3 flex flex-col items-center justify-center">
                <img src="icons/coin.gif" alt="" className="bg-slate-400 rounded-full p-1 w-20 h-20 sm:w-24 sm:h-24" />
                <p className="font-bold text-center">Easy funding</p>
                <p className="text-center text-sm sm:text-base">Receive support with just a few clicks</p>
              </div>
              <div className="space-y-3 flex flex-col items-center justify-center">
                <img src="icons/group.gif" alt="" className="bg-slate-400 rounded-full p-1 w-20 h-20 sm:w-24 sm:h-24" />
                <p className="font-bold text-center">Build community</p>
                <p className="text-center text-sm sm:text-base">Connect with your supporters</p>
              </div>
            </div>
          </div>

          <div className="bg-white h-px opacity-10 w-full"></div>

          {/* Video Section */}
          <div className="text-white container mx-auto py-12 px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center mb-10 sm:mb-14">Learn more about us</h2>
            <div className="w-full max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/qaTB_u1THVs?si=mCpcEpb4arO6xG85"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}