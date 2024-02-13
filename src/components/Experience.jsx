import React from 'react'
import { styles } from '../styles.js'
import {motion} from 'framer-motion'
//for vertical lines things
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion'
import { experiences } from '../constants/constants'


//creating a line section for using vertical timeline
/*first below we created a vertical timeline that wwill contain all the individuals timeline elements
 */

const ExperienceCard = ({experience})=>{
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.data}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index)=>(
          //we use dollars sign here bcoz we are dealing with strings here
          <li key={`experience.points.${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}


          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.section}>What I have done so far !!</p>
        <h2 className={styles.sectionHeadText}>Work EXP</h2>
      </motion.div>

      {/* creating vertical timeline  */}
      <VerticalTimeline>
        {experiences.map((experience, index)=> (
          <ExperienceCard key={index} experience={experience}/>
        ))}

      </VerticalTimeline>
    </>
  );
}

export default SectionWrapper(Experience, "work")