'use client'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
  }} 
    >
      AI Resume Analyzer and Roadmap Generator
    </motion.div>
  )
}

export default page
