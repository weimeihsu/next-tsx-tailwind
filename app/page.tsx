'use client'
import Lottie from "lottie-react"
import anima from '../public/anima/lottie/cheers-anima.json'
import { FerrisWheel } from 'lucide-react'

const Home = () => {
  return ( 
    <main>
      <div className="p-6 max-w-sm mx-auto flex flex-col items-center space-x-4">
      <div className="flex flex-row gap-x-1 items-center">
        <FerrisWheel className="text-java"/>
        <p className="text-xl m-2">Cheer Up!</p>
        <FerrisWheel className="text-java"/>
      </div>
          <Lottie animationData={anima}/>
      </div>
    </main>
   );
}
 
export default Home;

