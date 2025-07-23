import React from 'react'
import Head from 'next/head'
import AboutPage from '@/components/AboutPage/AboutPage'
const page = () => {
  return (
    <>
    <Head>
       <title> about pge</title> 
       <meta name='description' content='any'/>
    </Head>
    <main className='dark:bg-light dark:text-dark'>
        <AboutPage/>
    </main>
          </>
  )
}

export default page
