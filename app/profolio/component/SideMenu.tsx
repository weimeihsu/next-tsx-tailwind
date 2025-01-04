'use client'
import { 
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
 } from '@material-tailwind/react';

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from "react";

const sidemenuitems =[
    { name: 'UIUX', path: '/',
        children:[
            {name:'User Interface'},
            {name:'User Journey'},
            {name:'Prototype'}
        ]
    },
    { name: 'Prototype', path: '/profolio'},
    { name: 'Graphic & Web', path: '/login' },
    { name: 'Design System', path: '/design-system' },
  ]

const SideMenu = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const handleToggle = ()=>{
      setOpen(!open);
      }

    return ( 
      <List className="h-[calc(100vh-2rem)] w-full min-w-48 p-0 gap-2">
        {sidemenuitems.map((item,idx)=>(
          <Accordion open={open === true}>
            <ListItem key={idx} className="text-white text-sm rounded-sm py-2 hover:bg-neutral-800 hover:text-white">
              {item.children? 
              <AccordionHeader onClick={handleToggle} className="border-b-0 py-0 justify-start text-white text-sm font-normal hover:text-white">
              <ListItemPrefix className='mr-2'>
                <ChevronDown className="h-4 w-4 text-white" />
              </ListItemPrefix>
               {item.name}
              </AccordionHeader> : item.name
            }
            </ListItem>

            <AccordionBody className="py-0">
            <List className="p-0 text-white text-sm min-w-0">
              {item.children?.map((childitem, childIdx)=>(
                <ListItem key={childIdx} className={'rounded-sm py-2 pl-10'+(selected === true ? 'bg-neutral-900' : '')}>
                {childitem.name}
              </ListItem>
              ))}
            </List></AccordionBody>
          </Accordion>
          
        ))}
        {/* <Accordion open={open === true}>
          <ListItem key={idx} onClick={handleSelected(idx)} className={`py-0 rounded-sm hover:bg-neutral-800  ${selected === idx ? "bg-neutral-900": ""}`} selected={open === true}>
            <AccordionHeader onClick={toggleMenu} className="border-b-0 py-2 justify-start text-white text-sm font-normal hover:text-white">
              <ListItemPrefix className='mr-2'>
                <ChevronDown className="h-4 w-4 text-white" />
              </ListItemPrefix>
                Dashboard
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-0">
            <List className="p-0 text-white text-sm min-w-0">
              <ListItem onClick={handleSelected} className="rounded-sm py-2 pl-10">
                Analytics
              </ListItem>
              <ListItem className="rounded-sm py-2 pl-10">
                Reporting
              </ListItem>
              <ListItem className="rounded-sm py-2 pl-10">
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion> */}
    
        {/* <ListItem className="text-white text-sm rounded-sm py-2 pl-10">
          Inbox
        </ListItem> */}
        
      </List>
     );
}
 
export default SideMenu;