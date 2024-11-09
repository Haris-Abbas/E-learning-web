import React from 'react'
import BannerPng from "../../assets/banner.png";
import { FaBookReader } from 'react-icons/fa';
import { motion } from "framer-motion";
import { FadeUp } from '../Hero/Hero';



const Baner2 = () => {
  return (
   <section >
    <div  className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
        {/* banner text */}
    <motion.div 
    initial={{opacity: 0, x: -50}}
    whileInView={{opacity: 1, x: 0}}
    className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
   <h1 className='text-4xl font-bold !leading-snug'>
     Join Our Community to Start Your Journey
   </h1>
   <p className='text-dark2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius distinctio nam, dolore minus natus fugit esse, qui quibusdam molestiae saepe ea a enim!</p>
   <a href="https://www.whatsapp.com/"
   className='primary-btn !mt-8'
   >Join Now</a>
   </div>
   </motion.div>
   {/* banner image */}
    <div className='flex justify-center items-center'>
    <motion.img
    initial={{opacity: 0, x: 50}}
    whileInView={{opacity: 1, x: 0}}
   
    src={BannerPng} 
    alt="" 
    className='w-[350px] md:max-w-[450px] object-cover drop-shadow'
    />
    </div>
    </div> 
   </section>
    
  )
}

export default Baner2;