'use client'
import { Button, IconButton } from "@/components"
import { FerrisWheel } from 'lucide-react'
const StyleSheet = () => {
    const handleScroll = () => {

    }
    return ( 
        <>
        <h1 className="text-xl my-4">Style Sheet</h1>
        <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-4">
        <Button
          type="submit"
          title="Custom Button"
          handleClick={handleScroll}
        />
        <IconButton size="sm"><FerrisWheel/></IconButton>
        <IconButton size="md"><FerrisWheel/></IconButton>
        <IconButton size="lg"><FerrisWheel/></IconButton>
        <Button
          size="sm"
          variant="outlined"
          type="button"
          title="Outlined Small"
          handleClick={handleScroll}
        />
        <Button
          size="lg"
          variant="text"
          type="button"
          title="Text Large"
          handleClick={handleScroll}
        />
        </div>
        </>
     );
}
 
export default StyleSheet;