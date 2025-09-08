'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Hero from '../../public/assets/homepage.png'
import Workspace from '../../public/assets/workspace.png'
import Image from 'next/image'

const page = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
  }} 
  className='p-10'
    >
   <div className='text-4xl font-bold mb-5'>Case Study - AI Career Coach Analyzer </div> 
   <p>AI-powered tool that analyzes resumes against job descriptions and provides instant, actionable feedback.</p> 

      <div>
<section>
  <p className='text-2xl font-bold mt-5'>Summary</p>
  The AI Resume Analyzer is a full-stack web application I built to streamline the job application process by helping candidates receive instant, AI-powered feedback on their resumes. The tool evaluates resumes against job descriptions, highlights strengths, identifies gaps, and provides actionable suggestions to improve candidate success rates.
This project reflects my expertise in Next.js, React, AI integrations, database design, and cloud deployment, while also showcasing my ability to build real-world, user-focused applications.
</section>

<section>
  <p className='text-2xl font-bold mt-5'>Problem Statement</p>
  <p>Many job seekers submit resumes that are either:</p>
<ul className='ml-5'>

<li>- Not tailored to the role.</li>
<li>- Lacking in clarity or keyword alignment.</li>
<li>- Failing to showcase their strongest achievements.</li>
</ul>
Recruiters often spend less than 7 seconds scanning a resume, which makes it critical for applicants to stand out. However, professional resume review services are often expensive, and most job seekers don’t have access to personalized, instant feedback.
</section>
<section className='mt-7 mb-7'>
  <Image src={Hero} alt='' />
</section>
<section>
  <p className='text-2xl font-bold mt-5'>Solution</p>
  <p>I developed the AI Resume Analyzer to bridge this gap by providing:</p>

  <ul className='ml-5'>

<li>- AI-Powered Feedback – Uses LLMs to analyze resumes and compare them against job descriptions.</li>
<li>- Actionable Insights – Provides specific recommendations (e.g., Add more measurable achievements under Work Experience).</li>
<li>- Seamless UX – A clean, intuitive interface where users can upload resumes and paste job descriptions.</li>
<li>- Scoring System – Rates resumes based on clarity, keyword alignment, and role fit.
</li>
</ul>
  </section>

<section>
  <p className='text-2xl font-bold mt-5'>The Development Process</p>
1. Research & Planning <br/>
  -Studied common resume review frameworks (ATS, recruiter tips).<br/>
  -Designed a minimal but professional UI for ease of use.<br/>

2. Architecture Setup <br/>
Created a scalable Next.js app with Clerk authentication.<br/>
Integrated Drizzle ORM with Neon for structured data.<br/>

3. AI Integration <br/>
Used GPT to evaluate resume text against job descriptions.<br/>
Designed prompt engineering for consistent, structured outputs.<br/>

4. Feature Implementation<br/>
Built upload & parsing flow for resumes.<br/>
Integrated AI scoring and feedback.<br/>
Added dashboard for storing results.<br/>

5. Testing & Iteration<br/>
Validated analysis with multiple resume/job description pairs.<br/>
Refined prompts to improve accuracy and consistency.<br/>

  </section>


<section className='mt-7 mb-7'>
  <Image src={Workspace} alt='' />
</section>





{/* 
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

Built a real-world application that combines technical complexity with practical user value. */}
</div>
    </motion.div>
  )
}

export default page
