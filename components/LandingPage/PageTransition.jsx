"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence initial={false}  mode="wait">
      <div key={pathname} className="dark:bg-light">
        {/* <motion.div
          initial={{ x: "0%" }}
          animate={{
            x: "100%"}}
            transition = {{
              delay: 0.2,
              duration: 0.7,
              ease: "easeInOut",
            }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        /> */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{
            height: "0vh",
          }}
          exit={{height: "100vh"}}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="h-screen w-screen fixed bg-light rounded-b-[100px] z-40 pointer-events-none "
  
        />
        {/* <motion.div
          initial={{height: '80.5vh' }}
          animate={{
           height: '0vh', transition: {delay: 0.7}}}
          
          className="h-screen w-screen fixed bg-light bottom-0 rounded-t-[100px]  pointer-events-none dark:bg-light"
        /> */}
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
