import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "motion/react"


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}

function App() {
 

  return (
    <>

       <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        />
    </>
  )
}

export default App
