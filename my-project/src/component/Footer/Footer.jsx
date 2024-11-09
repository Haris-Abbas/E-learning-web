import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import {motion} from "framer-motion";
const Footer = () => {
  return <footer className='py-28 bg-[#f7f7f7]'>
    <motion.div
    initial={{opacity: 1, y:50}}
    whileInView={{opacity: 1 , y: 0}}
    className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-14 md:gap-4'>
            {/* first sectiion */}
             <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'> The Coding Journey </h1>
                <p className='text-dark2'>TCJ is platfrom dedicated to empowering aspring developers. 
                    from beginer tutoriul to advanced programing concept we provide a comperhensive learning experience design to help you master coding to help you master coding skills build project and launch your tech career.
                </p>
             </div>
            {/* secound section  */}
            <div className='grid grid-cols-2 gap-10'>
                <div className='space-y-4'>
                     <h1 className='text-2xl font-bold'>
                        Courses
                    </h1>   
                    <div className='text-dark2'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secoundary duration-200'>Web Developmenet</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'>Software Developmnet</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'> Apps Development</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'> E-learning</li>
                        </ul>
                    </div>
                </div>
                <div>
                <div className='space-y-4'>
                     <h1 className='text-2xl font-bold'>
                        Links
                    </h1>   
                    <div className='text-dark2'>
                        <ul className='space-y-2 text-lg'>
                            <li className='cursor-pointer hover:text-secoundary duration-200'>Home</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'> Servicese</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'> Abouts</li>
                            <li className='cursor-pointer hover:text-secoundary duration-200'> Contact</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            {/* thrid section  */}
            <div className='space-y-4 max-w-[300px]'>
                <h1 className='text-2xl font-bold'>Get In Touch</h1>
                <div className='flex items-center'>
                    <input type="text"
                    placeholder='Enter your Name'
                    className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'
                    />            
                    <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl'>Go</button>
                       </div>
                       {/* social icons */}
                       <div className='flex space-x-6 py-3'>
                        <a href="https://web.whatsapp.com/">
                            <FaWhatsapp className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="https://instagram.com/">
                            <FaInstagram className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <TbWorldWww className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="https://youtube.com/">
                            <FaYoutube className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                       </div>
            </div>
        </div>
    </motion.div>
  </footer>

};

export default Footer