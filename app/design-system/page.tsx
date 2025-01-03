'use client'

import { Button, IconButton } from "@/components"
import { FerrisWheel } from 'lucide-react'
const StyleSheet = () => {
    const handleScroll = () => {

    }
    return ( 
        <>
        <div className="text-lg">Style Sheet</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-y-2">
          <div className="border-b-2 border-java text-sm text-java font-light leading-8">Typography</div>
          <div className="text-xl">Extra Large Typography</div>
          <div className="text-lg">Extra Large Typography - Page Title</div>
          <div className="text-base">Base Typography</div>
          <div className="text-sm">Small Typography</div>
          <div className="text-xs">Extra Small Typography</div>
        </div>
        <div className="flex flex-col gap-y-2">
        <div className="border-b-2 border-java text-sm text-java font-light leading-8">Buttons</div>
          <Button 
          type="button"
          text="default is the primary md"
          />
          <Button
          type="submit"
          text="secondary md"
          intent="secondary"
          handleClick={handleScroll}
          Icon={FerrisWheel}
          showIcon={true}
          iconPosition="append"
          />
          <Button
            type="button"
            text="Ghoust md"
            intent="ghost"
            handleClick={handleScroll}
          />
          <Button
            type="button"
            size="sm"
            text="primary Sm"
            handleClick={handleScroll}
            Icon={FerrisWheel}
            showIcon={true}
            iconPosition="prefix"
          />
           <Button
            type="button"
            size="sm"
            text="secondary sm"
            intent="secondary"
            handleClick={handleScroll}
          />
          <Button
            type="button"
            size="sm"
            text="Ghoust sm"
            intent="ghost"
            handleClick={handleScroll}
          />
        </div>
        
        <div className="flex flex-col gap-y-2">
        <div className="border-b-2 border-java text-sm text-java font-light leading-8">Icons</div>
          <IconButton size="lg" intent="button"><FerrisWheel/></IconButton>
          <IconButton ><FerrisWheel/></IconButton>
          <IconButton size="lg"><FerrisWheel/></IconButton>
        </div>
        </div>
        </>
     );
}
 
export default StyleSheet;