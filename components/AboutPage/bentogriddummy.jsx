"use client";
import React from "react";
import { motion } from "framer-motion";
import {FaHtml5, FaCss3, FaReact, FaNodeJs, FaJs,  } from 'react-icons/fa'
import {SiNextdotjs, SiTailwindcss, SiPostgresql, SiJavascript, SiFramer} from 'react-icons/si'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "../ui/tooltip";
import Lottie from 'lottie-react'
import animationData from '../../public/assets/animation.json'

//skill data 
const skills = {
  title: 'My skills',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'html 5',
    },
    {
      icon: <FaCss3/>,
      name: 'css 3',
    },
    {
      icon: <SiJavascript/>,
      name: 'javascript',
    },
    {
      icon: <FaReact/>,
      name: 'react js',
    },
    {
      icon: <SiNextdotjs/>,
      name: 'next js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind css',
    },
    {
      icon: <SiPostgresql/>,
      name: 'postgresql',
    },
  ],
};
const Skills = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center p-6 ">
      <div className="grid h-full grid-cols-10 grid-rows-4 gap-2 w-full ">
      <section className="col-span-5 xl:col-span-4
       row-span-2  rounded-3xl flex justify-center items-center ">
        <Lottie animationData={animationData} className="h-80"/>
      </section>
      <section className="col-span-5 xl:col-span-6 row-span-2 bg-gradient-to-r from-rose-300 via-blue-500 to-rose-200 rounded-3xl ">
        <div className=" text-center text-3xl font-semibold py-6">My Skills</div>
         <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 xl:gap-[30px] px-10 ">
            {skills.skillList.map((skill, index) => {
              return<li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="group w-10 h-10 md:w-[5px   rounded-xl flex justify-center items-center">
                    <div className="text-6xl group-hover:text-dark group-hover:dark:text-light transition-all duration-300 w-3">
{skill.icon}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>

                </TooltipProvider>
                </li>
            })}
          </ul>
      </section>
      <section className=" col-span-3 xs:col-span-10 md:col-span-5 row-span-2 bg-red-400 rounded-3xl flex justify-center items-center">
        Education section
      </section>
      <section className="col-span-4 xs:col-span-10 md:col-span-3
       row-span-2 bg-red-400 rounded-3xl flex justify-center items-center">
        Experience section
      </section>
      <section className="col-span-3 xs:col-span-10 md:col-span-2 row-span-2 bg-red-400 rounded-3xl flex justify-center items-center">
        Services
      </section>
        {/* <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border border-blue-500 z-20 cursor-pointer overflow-hidden rounded-[12px] flex flex-col col-span-1 my-2 p-5"
        >
          <span className="text-center font-medium">{skills.title}</span> */}

          {/* <ul className="grid grid-col-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 xs:grid-cols-2 ">
            {skills.skillList.map((skill, index) => {
              return<li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
{skill.icon}
                    </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>

                </TooltipProvider>
                </li>
            })}
          </ul> */}
        {/* </motion.div> */}
  

      </div>
    </main>
  );
};

export default Skills;
