import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div 
    initial={{y: '100%'}}
    animate={{y: '0%'}}
    transition={{duration: 0.7, ease: 'easeOut'}}
    exit={{opacity: 1}}
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
    </div>
  )
}

export default Services
