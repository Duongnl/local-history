
import './App.css'
import ContentPage1 from './components/page1/ContentPage1'
import ContentPage4 from './components/page4/ContentPage4'
import ContentPage3 from './components/page3/ContentPage3'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Add smooth scroll behavior
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

import ContentPage5 from './components/page5/ContentPage5'
import HeaderWeb from './components/share/HeaderWeb'




function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderWeb />
      <div className='mt-[150px]'>
        <ContentPage1 />
      </div>
      <div id='vitri' className='scroll-mt-[100px]'>
        <ContentPage3 />
      </div>
      {/* <div id='truso' className='scroll-mt-[100px]'> */}
        <ContentPage4 />
      {/* </div> */}

      <div id='ditich' className='scroll-mt-[100px]'>
        <ContentPage5 />
      </div>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-2 md:bottom-8 md:right-8 bg-blue-600 hover:bg-blue-700 text-black w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
