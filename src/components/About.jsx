import React from 'react'
import Tilt from "react-parallax-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles.js'
import {services} from '../constants/constants.js'
import {fadeIn, textVariant} from '../utils/motion.js'
import { SectionWrapper } from '../hoc/index.js'

const ServiceCard = ({title,icon,index})=>{
  return(
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div variants={fadeIn("right", "spring", 0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        {/* these below options for card tilt options */}
        <div options={{max:45,scale: 1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.section}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hey there! I'm Abhishek Raj, a passionate web developer with a keen
        interest in exploring the intersections of technology. Currently delving
        into the dynamic world of web development, I specialize in crafting
        robust and user-friendly web experiences.Eager to delve into the latest
        in technology, I am fascinated by open-source projects,
        cryptocurrencies, blockchain development, and artificial intelligence.
        I'm currently sharpening my skills with Next. js and Data Structures &
        Algorithms, always seeking ways to enhance my craft.
      </motion.p>
      <div className='flex flex-wrap gap-10 mt-20'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
}


//this is how we are using that hoc we just need to wrap 
export default SectionWrapper(About, "about");