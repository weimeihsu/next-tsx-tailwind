'use client'
import SideItem from "./SideItem"
import { useState } from "react"

const sidemenuitems =[
  { name: 'UIUX', path: '',
      children:[
          {name:'User Interface', path:'/profolio/ui'},
          {name:'User Journey', path:'/profolio/ux'},
          {name:'Prototype', path:'/profolio/prototype'}
      ]
  },
  { name: 'Graphic & Web', path: '/profolio/graphic' },
  { name: 'Design System', path: '/profolio/design-system' },
]

const SideBar = () => {
  const [ open, setOpen ] = useState(false)
  const toggleMenu = ()=>{
    setOpen(!open)
  }
    return (     
        <nav className="flex flex-col mx-auto justify-start" aria-label="Global">          
          <SideItem navitems={sidemenuitems} toggleMenu={undefined}/>
        </nav>
     );
}
 
export default SideBar;