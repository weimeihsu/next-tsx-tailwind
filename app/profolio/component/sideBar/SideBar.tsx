'use client'
import SideItem from "./SideItem"
import { useState } from "react"

const sidemenuitems =[
  { id:'sidemenu1', name: 'UIUX', path: '',
      children:[
          {childId:'child1', name:'User Interface', path:'/profolio/ui'},
          {childId:'child2', name:'User Journey', path:'/profolio/ux'},
          {childId:'child3', name:'Prototype', path:'/profolio/prototype'}
      ]
  },
  { id:'sidemenu2',name: 'Graphic & Web', path: '/profolio/graphic' },
  { id:'sidemenu3', name: 'Design System', path: '/profolio/design-system' },
]

const SideBar = () => {
  const [ open, setOpen ] = useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
    return (     
        <nav className="flex flex-col mx-auto justify-start" aria-label="Global">          
          <SideItem sidemenus={sidemenuitems} toggleMenu={undefined}/>
        </nav>
     );
}
 
export default SideBar;