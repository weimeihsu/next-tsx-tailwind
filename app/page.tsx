'use client'
import Lottie from "lottie-react"
import anima from './src/lottie/cheers-anima.json'
import { AlarmClock } from 'lucide-react'

const Home = () => {
  return ( 
    <main>
      <div className="p-6 max-w-sm mx-auto flex flex-col items-center space-x-4">
          <p className="text-slate-500">Cheer Up!</p>
          <AlarmClock />
          <Lottie animationData={anima} />
      </div>
    </main>
   );
}
 
export default Home;

