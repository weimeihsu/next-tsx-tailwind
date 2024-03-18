import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = ({ item, toggleMenu }) => {
  const pathName = usePathname()

  return (
    <Link href={item.path} className={'rounded-md px-3 py-2 text-sm font-medium'+(pathName === item.path ? 'text-white bg-neutral-900' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white')} onClick={toggleMenu}>
     {item.name} 
    </Link>
  );
};
 
export default NavItem;