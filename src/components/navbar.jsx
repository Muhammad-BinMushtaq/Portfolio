import React, { use, useState } from 'react'
import { easeInOut, motion, AnimatePresence } from "motion/react"
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Navbar = () => {

    const [activeTab, setActiveTab] = useState("");


    const tabs = [
        { id: "about", label: "About" },
        { id: "techstack", label: "Tech Stack" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];
    const [isOpen, setIsOpen] = useState(false)

    const setTogle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='flex justify-center items-center'>
            <div className=" z-60 flex justify-between items-center p-5 max-h-[65px]  max-w-[85%] w-full bg-amber-500 fixed top-6 rounded-full " >

                <div className='pl-3'>
                    <h2 className='text-2xl font-bold'>Muhammad</h2>
                </div>



                {/* navbutton in lg md */}
                <div className='hidden md:block ' >

                    <ul className="flex gap-3 md:gap-1 text-sm items-center "  >

                        {
                            tabs.map((tab) => (
                                <motion.li
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`cursor-pointer px-3 py-1.5 text-lg font-semibold text-gray-800 rounded transition-colors duration-200 ${activeTab === tab.id ? "bg-[#4848ff] text-white" : ""
                                        }`}
                                >
                                    <a href={`#${tab.id}`}>{tab.label}</a>
                                </motion.li>
                            ))
                        }


                    </ul>
                </div>




                <div className='flex gap-2.5 '>


                    <a href="https://github.com/Muhammad-BinMushtaq/" target="_blank"> <FaGithub className="w-6 h-6" /> </a>
                    <a href="https://www.linkedin.com/in/muhammad-binmushtaq/" target="_blank">  <FaLinkedin className="w-6 h-6" /> </a>

                </div>

                {/* togle button only in mobiles */}
                <div onClick={setTogle} className=' pr-3 lg:hidden md:hidden cursor-pointer '>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>


            </div>
            {/* slider div on click  */}
            <AnimatePresence>

                {isOpen &&
                    <motion.div
                        initial={{
                            x: '100%'
                        }}
                        animate={{
                            x: 0

                        }}

                        transition={{
                            duration: 1,
                            ease: easeInOut

                        }}

                        exit={{ x: '100%' }}



                        className=' z-70 pt-14 h-screen size-full fixed top-0 bg-amber-500 '>
                        <motion.button 

                        whileTap={{ scale: 0.95 }}
                         onClick={setTogle} className='cursor-pointer absolute right-8 top-7 border-3 p-3 rounded-full text-5xl '>  X</motion.button>
                        <div className="w-full flex justify-center">
                            <ul onClick={setTogle} className="flex gap-5 flex-col text-5xl items-start text-left ">

                                {
                                    tabs.map((tab) => (
                                        <motion.li
                                            key={tab.id}
                                            whileTap={{ scale: 0.95 }}
                                            className="cursor-pointer px-3 py-1.5 text-6xl rounded transition-colors duration-200 "    >
                                            <a href={`#${tab.id}`}>{tab.label}</a>
                                        </motion.li>
                                    ))
                                }
                            </ul>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </nav>

    )
}

export default Navbar

// <h1 className="text-xl font-bold ">Muhammad</h1>
//
//





