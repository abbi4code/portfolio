import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles.js'
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] "></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Abhinav</span></h1>
          <p className={`${styles.heroSubText}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, eum.</p>

        </div>

      </div>
        <ComputersCanvas/>
      
      <div className='absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
        {/* as want to go about section after clicking the gif we gonna use a tag */}
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start'>
            <motion.div
            animate={{
              y: [0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }} className='w-1 h-3 bg-secondary rounded-full mb-1 mt-1 '/>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero