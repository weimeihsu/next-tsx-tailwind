'use client'
import NavItem from "./NavItem"
import { Menu }  from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react"

const navitem =[
  { name: 'Home', path: '/'},
  { name: 'Gallery', path: '/gallery'},
  { name: 'Login', path: '/login' },
]

const Header = () => {
  const [ open, SetOpen ] = useState(false)
  const toggleMenu = ()=>{
    SetOpen(!open)
  }
    return ( 
        <header className="border-b border-neutral-900">
          <nav className="flex flex-col mx-auto justify-start p-3 md:flex-row md:justify-between md:items-center md:max-w-7xl lg:px-8" aria-label="Global">
          <div className="flex flex-row">
            <button className="z-50 relative mr-2 md:hidden" onClick={toggleMenu}>
            {open ? <X /> : <Menu />}</button>
            <p className="text-xl text-spray">Next & Tailwind</p>
          </div>
          
            <div className="hidden md:flex ml-10 items-baseline space-x-4">
              {navitem.map((item) => (
                <NavItem item={item} key={item.name} toggleMenu={undefined}/>
              ))}
            </div>
            {/*Responsive menu*/}
            {open && (
            <div className="absolute z-50 top-13 bg-spray-950 left-0 w-screen flex flex-col h-screen p-4 md:hidden">
            {navitem.map((item) => (
              <NavItem item={item} key={item.name} toggleMenu={toggleMenu}/>
            ))}
          </div>)}
          </nav>
        </header>
     );
}
 
export default Header;