'use client'
import NavItem from "./navItem/NavItem"

const navitem =[
  { name: 'Home', path: '/'},
  { name: 'Gallery', path: '/gallery'},
  { name: 'Login', path: '/login' },
]

const Header = () => {

    return ( 
        <header className="border-b border-neutral-900">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 " aria-label="Global"><p className="text-xl text-spray">Next & Tailwind</p>
            <div className="ml-10 flex items-baseline space-x-4">
              {navitem.map((item) => (
                <NavItem item={item} key={item.name}/>
              ))}
            </div>
          </nav>
        </header>
     );
}
 
export default Header;