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
        child:[
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
    const toggleMenu = ()=>{
        setOpen(!open)
      }
     
    return ( 
      <List className="h-[calc(100vh-2rem)] w-full min-w-48 p-0">
        <Accordion 
          open={open === true}
        >
          <ListItem className="py-0 rounded-sm hover:bg-neutral-800" selected={open === true}>
            <AccordionHeader onClick={toggleMenu} className="border-b-0 py-2 justify-start text-base text-white font-normal">
              <ListItemPrefix className='mr-2'>
                <ChevronDown className="h-5 w-5 text-white" />
              </ListItemPrefix>
                Dashboard
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-0">
            <List className="p-0 text-white min-w-0">
              <ListItem className="rounded-sm pl-10">
                Analytics
              </ListItem>
              <ListItem className="rounded-sm pl-10">
                Reporting
              </ListItem>
              <ListItem className="rounded-sm pl-10">
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
    
        <ListItem className="text-white rounded-sm pl-10">
          Inbox
        </ListItem>
        
      </List>
     );
}
 
export default SideMenu;