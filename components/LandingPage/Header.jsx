'use client'
import Link from "next/link";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "../helpers/Icon";
import { useTheme } from "next-themes";

//component
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";


const Header = () => {
//const [mounted, setMounted] = useState(false);
const {systemTheme, theme, setTheme} = useTheme();

// useEffect(() => {
//   setMounted(true)
// },[])
// // 
// if (!mounted) return null
const currentTheme = theme === 'system' ? systemTheme : theme;
console.log(currentTheme)
  return (
    <header className="py-8  text-white  dark:bg-light dark:text-primary ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          {" "}
          
          {
            currentTheme === 'dark' ? (
              <button  className="rounded-full min-w-10">
                <SunIcon onClick={() => setTheme('light') }  />
              </button>
            ): (
              <button className="rounded-full min-w-10" >
                <MoonIcon  onClick={() => setTheme('dark')}/>
              </button>
            )
          }
          {/* <button onClick={() => setMode === 'light' ? 'dark' : 'light'}>
            {
              mode === 'dark' ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>
            }
          </button> */}
          <Link href="/">
          <h1 className="text-5xl font-semibold">
            K <span className="text-accent">.</span>
          </h1>
        </Link>
        </div>
        {/* desktop nav */}
        
        <div className="hidden xl:flex lg:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        </div>
        {/* mobile nav */}

        {/* media query */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
