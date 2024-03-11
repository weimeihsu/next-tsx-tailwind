import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
    
    const navitem =[
        { name: 'Home', href: '/', current: true },
        { name: 'Gallery', href: 'gallery', current: false },
        { name: 'Login', href: 'login', current: false },
      ]
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return ( 
        <header className="border-b border-neutral-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 " aria-label="Global"><p className="text-xl text-spray">Next & Tailwind</p>
        
        <div className="ml-10 flex items-baseline space-x-4">
          {navitem.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        </nav>
      </header>
     );
}
 
export default Header;