import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = ({ item }) => {
  const pathName = usePathname()

  // const isActive = (href) => router.pathname === href

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   router.push(item.path)
  // }

  return (
    <Link href={item.path} className={'rounded-md px-3 py-2 text-sm font-medium'+(pathName === item.path ? 'text-white bg-neutral-900' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white')}>
     {item.name} 
    </Link>
  );
};
 
export default NavItem;

// className={classNames(
//   item.current
//     ? 'bg-neutral-900 text-white'
//     : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
//   'rounded-md px-3 py-2 text-sm font-medium'
// )}