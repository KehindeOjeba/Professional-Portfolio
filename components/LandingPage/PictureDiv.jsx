"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PictureDiv = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.5,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="w-[298px]  h-[349px] xl:w-[498px] xl:h-[498px]"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* animate */}
        {/* <motion.svg
          className="w-[300px] xl:w-[506px] h-full xl:h[506px]"
          fill="transparent"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="100"
            cy="199"
            r="150"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "50 50 50 50" }}
            animate={{
              strokeDasharray: [" 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default PictureDiv;
