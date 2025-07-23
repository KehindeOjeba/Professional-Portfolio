'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'what i do',
        path: '/about',
    },
    {
        name: 'my projects',
        path: '/projects',
    },
    {
        name: 'case studies',
        path: '/casestudies',
    },
    {
        name: 'contact',
        path: '/contact',
        
    },
]

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className="flex gap-8 relative dark:bg-light dark:text-dark">
        {links.map((link, index) => {
            return (
                <Link 
                href={link.path}
                key={index}
                className={`${link.path === pathname && 'text-accent border-b-2  border-accent'} capitalize font-medium hover:text-accent transition-all `}
                >
                    {link.name}
                </Link>
            )
        })}
      
    </nav>
  )
}

export default Nav
