import { Button } from "@/components";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from 'lucide-react'

interface ChildItem {
  childId: string
  name: string
  path: string
}

interface SideMenuItems {
  id: string;
  path: string;
  name: string;
  children?: ChildItem[];
}

interface SideItemProps {
  sidemenus: SideMenuItems[];
  toggleMenu: () => void;
}

const SideItem:React.FC<SideItemProps> = ({sidemenus, toggleMenu}) => {
  const pathName = usePathname()

  return (
    <ul className="list-inside grid grid-cols-1 gap-y-2 ">
      {sidemenus.map(({id, path, name, children})=>(
        <div className="grid gap-y-2" key={id}>
          <li className="grid" >
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
            <li className="grid" key={childitem.childId}>
              <Link href={childitem.path} className={'rounded-sm pl-9 py-2 text-sm font-normal'+(pathName === path ? 'text-white bg-neutral-900' : ' hover:bg-neutral-800')} onClick={toggleMenu}>{childitem.name}</Link>
            </li>
          ))}
          </ul>
          </li>
          <div className="h-px bg-neutral-700"></div>
        </div>
        
      ))} 
    </ul>
    
  );
};
 
export default SideItem;