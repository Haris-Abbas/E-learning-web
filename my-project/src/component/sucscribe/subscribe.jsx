import React from 'react'
import {FaBell} from "react-icons/fa"
import BgImage from "../../assets/bg.png";
import {motion} from "framer-motion";
import { TbBackground } from 'react-icons/tb';



const bgStyle ={
backgroundImage: `url(${BgImage})`,
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
backgroundPosition: "cover",
};


const Subscribe = () => {
  return (
    <section className='bg-[#f7f7f7]'>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        style={bgStyle} className='container py-22 md:py-24'>
           <motion.div
           initial={{opacity: 0, scale:0.5}}
           whileInView={{opacity: 1, scale: 1 }}
           transition={{duartion: 0.7, ease: "easeInOut"}}
           className='flex flex-col justify-center'>
                <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                    <h1 className='text-4xl font-bold !leading-snug'>450k+ Students are Learning from us</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatum odio cum 
                    </p>
                    <a href=""
                    className='primary-btn !mt-8 inline-flex items-center gap-4 group '
                    >Subscribe Now
                    <FaBell
                     className='group-hover:animate-bounce group-hover:text-lg duration-200'/>
                    </a>
                </div>
           </motion.div>
        </motion.div>
    </section>
  )
}

export default Subscribe;
