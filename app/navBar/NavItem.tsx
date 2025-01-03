import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = ({navitems, toggleMenu}) => {
  const pathName = usePathname()

  return (
    <>
      {navitems.map(({path, name})=>(
        <Link key={name} href={path} className={'rounded-sm px-3 py-2 text-sm font-normal'+(pathName === path ? 'text-white bg-neutral-900' : ' hover:bg-neutral-800')} onClick={toggleMenu}>
        {name} 
        </Link>
      ))} 
    </>
    
  );
};
 
export default NavItem;