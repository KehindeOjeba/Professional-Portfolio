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
This project reflects my expertise in Next.js, React, AI integrations, database design, and cloud deployment, while also showcasing my ability to build real-world, user-focused applications.

🎯 Problem Statement

Many job seekers submit resumes that are either:

Not tailored to the role.

Lacking in clarity or keyword alignment.

Failing to showcase their strongest achievements.

Recruiters often spend less than 7 seconds scanning a resume, which makes it critical for applicants to stand out. However, professional resume review services are often expensive, and most job seekers don’t have access to personalized, instant feedback.

💡 Solution

I developed the AI Resume Analyzer to bridge this gap by providing:

AI-Powered Feedback – Uses LLMs to analyze resumes and compare them against job descriptions.

Scoring System – Rates resumes based on clarity, keyword alignment, and role fit.

Actionable Insights – Provides specific recommendations (e.g., Add more measurable achievements under Work Experience).

Seamless UX – A clean, intuitive interface where users can upload resumes and paste job descriptions.

🛠️ Tech Stack

Frontend: Next.js 14, React, Tailwind CSS

Authentication: Clerk

Backend: Serverless API Routes (Next.js), Inngest for event-driven workflows

Database: Neon (Postgres) + Drizzle ORM

AI Integration: OpenAI GPT models for NLP and text analysis

File Handling: PDF parsing with LangChain’s WebPDFLoader

Deployment: Vercel

⚙️ Key Features

Resume Upload: Supports PDF file parsing for text extraction.

Job Description Input: Users paste the target job description.

AI Analysis:

Keyword matching

Strengths & weaknesses

ATS compatibility hints

Personalized Score: Overall resume-to-job fit score.

Actionable Recommendations: Clear steps to improve the resume.

User Dashboard: Saves past analyses for later review.

🚀 Development Process

Research & Planning

Studied common resume review frameworks (ATS, recruiter tips).

Designed a minimal but professional UI for ease of use.

Architecture Setup

Created a scalable Next.js app with Clerk authentication.

Integrated Drizzle ORM with Neon for structured data.

AI Integration

Used GPT to evaluate resume text against job descriptions.

Designed prompt engineering for consistent, structured outputs.

Feature Implementation

Built upload & parsing flow for resumes.

Integrated AI scoring and feedback.

Added dashboard for storing results.

Testing & Iteration

Validated analysis with multiple resume/job description pairs.

Refined prompts to improve accuracy and consistency.

📊 Impact & Results

Delivered instant resume analysis in under 10 seconds.

Increased user confidence by providing specific, actionable feedback instead of generic advice.

Demonstrated scalability for both individual job seekers and potential enterprise HR tools.

🔮 Future Enhancements

Add cover letter analyzer.

Provide industry-specific feedback (tech, finance, healthcare, etc.).

Enable multi-language support.

Integration with LinkedIn profile imports.

✨ Key Takeaways

Strengthened my full-stack development skills with Next.js, Drizzle ORM, and Neon.

Gained deeper experience in AI prompt engineering and workflow orchestration.

Built a real-world application that combines technical complexity with practical user value.
</div>
    </motion.div>
  )
}

export default page
