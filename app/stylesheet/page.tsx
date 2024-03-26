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
          type="submit"
          title="Custom Button"
          handleClick={handleScroll}
          />
          <Button
            size="sm"
            variant="outlined"
            type="button"
            title="Outlined Small"
            handleClick={handleScroll}
          />
          <Button
            size="md"
            variant="text"
            type="button"
            title="Text medium"
            handleClick={handleScroll}
          />
        </div>
        
        <div className="flex flex-col gap-y-2">
        <div className="border-b-2 border-java text-sm text-java font-light leading-8">Icons</div>
          <IconButton size="sm"><FerrisWheel/></IconButton>
          <IconButton size="md"><FerrisWheel/></IconButton>
          <IconButton size="lg"><FerrisWheel/></IconButton>
        </div>
        </div>
        </>
     );
}
 
export default StyleSheet;