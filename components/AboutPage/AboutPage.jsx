"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiJavascript,
  SiTypescript
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Lottie from "lottie-react";
import animationData from "../../public/assets/animation.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "../ui/scroll-area";

//skill data
const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiJavascript />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
  ],
};

//bio data
const about = {
  title: "About me",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Ojeba Kehinde",
    },
    {
      fieldName: "Email",
      fieldValue: "kennyojeba.r@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Ojeba Kehinde",
    },
  ],
};
//experience data
const experience = {
  icon: "",
  title: "My experience",
  items: [
    {
      company: "Instiq Professional Services",
      position: "Software Developer",
      duration: "Dec 2021 - Present",
    },
    {
      company: "El-Prince Media",
      position: "Freelance Frontend Developer",
      duration: "2022-2023",
    },
  
  ],
};

//education data
const education = {
  icon: "",
  title: "My experience",
  items: [
    {
      institution: "University of Lagos",
      degree: "B.Sc. Sociology",
      duration: "2019",
    },
    {
      institution: "Udemy",
      degree: "React - The Complete Guide",
      duration: "2021",
    },
  ],
};

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0 dark:bg-light dark:text-light"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <Lottie
              animationData={animationData}
              className="h-[250px] w-full  mt-[-30px]"
            />
          </TabsList>

          <div className="min-h-[70vh w-full">
            {/* Skills */}
            <TabsContent value="skills" className="w-full ">
              {" "}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold dark:text-dark">
                  {" "}
                  {skills.title}
                </h1>

                <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group w-full h-[100px]  dark:bg-gray-200 bg-slate-700 rounded-xl flex justify-center items-center ">
                              <div className="text-6xl group-hover:text-accent  transition-all duration-300  dark:text-black">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
        
                  })}
              
                  
                </ul>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold dark:text-dark">
                  {" "}
                  {experience.title}
                </h1>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="  dark:bg-[#232329] bg-slate-50 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-60px text-center lg:text-left text-dark dark:text-light">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-dark/60">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center  dark:text-dark">

             <div className="flex flex-col gap-[30px] text-center xl:text-left"> 
                <h3 className="text-4xl font-bold  mb-[30px]">{about.title}</h3>
             </div>

             <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[500px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
return(
    <li key={index} className="flex items-center justify-center xl:justify-start gap-5 ">
        <span className="text-accent">{item.fieldName}</span>
        <span className="text-xl">{item.fieldValue}</span>
        </li>
)
                })}
             </ul>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              {" "}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold dark:text-dark">
                  {" "}
                  {education.title}
                </h1>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="  dark:bg-[#232329] bg-slate-50 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-60px text-center lg:text-left text-dark dark:text-light">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="dark:text-white/60 text-dark/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutPage;
