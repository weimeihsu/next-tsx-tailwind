import { Button } from "@/components";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from 'lucide-react'

const SideItem = ({navitems, toggleMenu}) => {
  const pathName = usePathname()

  return (
    <ul className="list-inside">
      {navitems.map(({path, name, children})=>(
        <li className="grid" key={name}>
          {children ? 
           <Button
           type="button"
           size="sm"
           text="UIUX"
           align="left"
           intent="soft"
           handleClick={toggleMenu}
           Icon={ChevronDown}
           showIcon={true}
           iconPosition="prefix"
           />
           : <Link href={path} className={'py-2 px-3 rounded-sm text-sm font-normal'+(pathName === path ? 'text-white bg-neutral-900' : ' hover:bg-neutral-800')} onClick={toggleMenu}>
          {name} 
          </Link>}
          
          <ul>
          {children?.map((childitem)=>(
            <li className="grid" key={childitem.name}>
              <Link href={childitem.path} className={'rounded-sm pl-8 py-2 text-sm font-normal'+(pathName === path ? 'text-white bg-neutral-900' : ' hover:bg-neutral-800')} onClick={toggleMenu}>{childitem.name}</Link>
            </li>
          ))}
          </ul>
        </li>
      ))} 
    </ul>
    
  );
};
 
export default SideItem;