'use client'
import { Button, IconButton } from "@/components"
import { FerrisWheel } from 'lucide-react'
const StyleSheet = () => {
    const handleScroll = () => {

    }
    return ( 
        <>
        <h1>Style Sheet</h1>
        <h2>Style Sheet</h2>
        <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="flex flex-row items-center">
          <IconButton size="sm"><FerrisWheel/></IconButton>
          <IconButton size="md"><FerrisWheel/></IconButton>
          <IconButton size="lg"><FerrisWheel/></IconButton>
        </div>
        </div>
        </>
     );
}
 
export default StyleSheet;