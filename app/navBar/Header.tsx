'use client'
import NavItem from "./NavItem"
import { Menu }  from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react"

const navitems =[
  { name: 'Welcome', path: '/'},
  { name: 'Profolio', path: '/profolio'},
  { name: 'Login', path: '/login' },
  { name: 'Design System', path: '/design-system' },
  { name: 'Resume', path: '/resume' },
  { name: 'More', path: '/more' },
]

const Header = () => {
  const [ open, setOpen ] = useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
    return ( 
        <header className="border-b border-neutral-900">
          <nav className="flex flex-col mx-auto justify-start p-3 md:flex-row md:justify-between md:items-center md:max-w-7xl" aria-label="Global">
          <div className="flex flex-row">
            <button className="z-50 relative mr-2 md:hidden" onClick={toggleMenu}>
            {open ? <X /> : <Menu />}</button>
            <p className="text-xl text-java">Next & Tailwind</p>
          </div>
          
            <div className="hidden items-baseline md:flex">
                <NavItem navitems={navitems} toggleMenu={undefined}/>
            </div>
            {/*Responsive menu*/}
            {open && (
            <div className="absolute z-50 top-13 bg-java-950 left-0 w-screen flex flex-col h-screen p-4 md:hidden">
              <NavItem navitems={navitems} toggleMenu={toggleMenu}/>
          </div>)}
          </nav>
        </header>
     );
}
 
export default Header;