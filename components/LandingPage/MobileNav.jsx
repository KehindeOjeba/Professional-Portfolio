"use client";
import { useState } from "react";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../helpers/Icon";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "what i do",
    path: "/about",
  },
  {
    title: "my projects",
    path: "/projects",
  },
  {
    title: "case studies",
    path: "/casestudies",
  },
  {
    title: "contact",
    path: "/contact",
  },
];


const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme , systemTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);
  const handleClick = () => {
    
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        className=" flex-col justify-center items-center bg-transparent "
      >
        <span
          className={`bg-light dark:bg-primary block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light dark:bg-primary block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light dark:bg-primary block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </Button>

      {isOpen ? (
        <div
          className="min-w-[70vw]  
          flex 
          flex-col 
          justify-center
          items-center 
          fixed
          top-0 
          left-1/2
         -translate-x-1/2 
          translate-y-1/2
           bg-dark
           dark:bg-light/75
            rounded-lg 
            backdrop-blur-lg 
            py-20
            border
            border-solid-10 
            z-30
            "
        >
          <Link href="/" className="mb-5">
            {" "}
            <h1 className="text-3xl font-semibold">
              {currentTheme === "dark" ? (
                <button className="rounded-full min-w-5">
                  <SunIcon onClick={() => setTheme("light")} />
                </button>
              ) : (
                <button className="rounded-full min-w-5">
                  <MoonIcon onClick={() => setTheme("dark")} />
                </button>
              )}
              K <span className="text-accent">.</span>
            </h1>
          </Link>
          <nav>
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                //   className="flex flex-col capitalize my-2 "
                  onClick={handleClick}
                  className={`${link.path === pathname && ' border-b-2  border-accent'} capitalize font-medium 
                  //hover:text-accent 
                  flex flex-col my-3`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
