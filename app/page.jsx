'use client'
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

//component
import Socials from "@/components/LandingPage/Socials";
import PictureDiv from "@/components/LandingPage/PictureDiv";

const Home = () => {
  return (
    <section className="h-full dark:bg-light dark:text-dark ">
      <div className="container mx-auto h-full xl:pl-20">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-5 ">
          {/* text div */}
          <motion.div  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeIn" },
  }}  className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I am <br />{" "}
              <span>O</span>
              <span className="text-accent">jeba  <span className="text-light dark:text-primary">K</span>ehinde</span>
            </h1>
            <p className="max-w-[500px] mb-9 ">
              I am dedicated to turning ideas into innovative web applications
              and I am proficient in various technologies.{" "}
            </p>
            {/* button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {" "}
              <a href='/KEHINDE_OJEBA_FRONTEND_DEVELOPER.pdf' download='KEHINDE_OJEBA_FRONTEND_DEVELOPER.pdf'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span> Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              </a> 
              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent dark:text-accent text-base hover:bg-black hover:text-white dark:text-accent hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
          {/* Photo div */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <PictureDiv />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
