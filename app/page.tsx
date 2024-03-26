'use client'
import Lottie from "lottie-react"
import anima from '../public/anima/lottie/cheers-anima.json'
import { FerrisWheel } from 'lucide-react'

const Home = () => {
  return ( 
    <main>
      <div className="p-6 max-w-sm mx-auto flex flex-col items-center space-x-4">
      <div className="flex flex-row gap-x-1">
        <FerrisWheel className="text-java"/>
        <p className="text-xl text-java ml-2">Cheer Up!</p>
      </div>
          <Lottie animationData={anima}/>
      </div>
    </main>
   );
}
 
export default Home;

