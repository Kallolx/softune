'use client'

import { Bricolage_Grotesque } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
})

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`${bricolage.className} text-8xl font-bold text-[#FF913B] mb-4`}>
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={`${bricolage.className} text-2xl md:text-3xl font-medium text-gray-800 mb-6`}>
            Oops! Page Not Found
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`${bricolage.className} text-gray-600 mb-8 max-w-md mx-auto`}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className={`${bricolage.className} inline-flex items-center px-6 py-3 bg-[#FF913B] text-white rounded-xl
                       font-medium transition-all duration-300 hover:bg-[#FF913B]/90 hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-[#FF913B] focus:ring-offset-2`}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 