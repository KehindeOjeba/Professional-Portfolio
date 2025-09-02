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

      <div>📌 Overview

The AI Resume Analyzer is a full-stack web application I built to streamline the job application process by helping candidates receive instant, AI-powered feedback on their resumes. The tool evaluates resumes against job descriptions, highlights strengths, identifies gaps, and provides actionable suggestions to improve candidate success rates.

This project reflects my expertise in Next.js, React, AI integrations, database design, and cloud deployment, while also showcasing my ability to build real-world, user-focused applications.</div>
    </motion.div>
  )
}

export default page
