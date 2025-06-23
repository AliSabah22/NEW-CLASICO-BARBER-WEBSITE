import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrimaryButton from './PrimaryButton'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-black/95 backdrop-blur-lg border-t border-accent/20"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-playfair font-bold text-white mb-2">
                Cookie Preferences
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDecline}
                className="px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Decline
              </button>
              <PrimaryButton onClick={handleAccept}>
                Accept
              </PrimaryButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 