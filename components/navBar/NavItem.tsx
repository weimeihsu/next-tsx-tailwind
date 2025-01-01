import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = ({navitems, toggleMenu}) => {
  const pathName = usePathname()

  return (
    <>
      {navitems.map(({path, name})=>(
        <Link key={name} href={path} className={'rounded-md px-3 py-2 text-sm font-medium'+(pathName === path ? 'text-white bg-neutral-900' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white')} onClick={toggleMenu}>
        {name} 
        </Link>
      ))} 
    </>
    
  );
};
 
export default NavItem;