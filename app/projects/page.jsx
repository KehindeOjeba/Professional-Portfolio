'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
  }} 
    >
    <div>  
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
    <div>
      This is my services . i have alot
    </div>
</motion.div>
  )
}

export default Services
