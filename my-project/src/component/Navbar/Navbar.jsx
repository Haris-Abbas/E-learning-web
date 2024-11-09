import React from 'react'
import { MdMenu } from "react-icons/md";
import {motion} from "framer-motion";


const NavbarMenu = [
    {
        id: 1,
        tittle: "Home",
        path: "/",
    },
    {
        id: 2,
        tittle: "Services",
        path: "#",
    },
    {
        id: 3,
        tittle: "About us",
        path: "#",
    },
    {
        id: 4,
        tittle: "Our Team",
        path: "#",
    },
    {
        id: 5,
        tittle: "Contact us",
        path: "#",
    },
];


const Navbar=()=> {
    return (
    <nav className='relative z-20'>
        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        className="container py-10 flex justify-between items-center">
            {/* { logo section} */}
            <div className="font-bold text-2xl">
                <h1 className='font-bold text-2xl'>The Coding Journey</h1>
            </div>
            {/* { Menu section} */}
            <div className='hidden lg:block'>
                <ul className='flex items-center gap-3'>
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.path} className="inline-block py-2 px-3 hover:text-secoundry relative group">
                                <div className='w-2 h-2 bg-secoundary absolute mt-2 rounded-full  left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden '>

                                </div>
                                {menu.tittle}</a>
                        </li>
                    ))}
                    <button className='primary-btn'>Sign In </button>
                </ul>
            </div>
            {/* { Mobile humburger menu section} */}
            <div className='lg:hidden'>
                <MdMenu className='text-4xl'/>

            </div>
        </motion.div>
    </nav>
    );
}

export default Navbar;
