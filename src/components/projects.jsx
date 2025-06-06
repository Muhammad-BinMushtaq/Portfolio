import React from 'react'
import laptop from '../assets/laptop.png'
import mobile from '../assets/mobile.png'
import p1 from '../assets/projectsImg/p1.png'
import p2 from '../assets/projectsImg/p2.png'
import p3 from '../assets/projectsImg/p3.png'
import p4 from '../assets/projectsImg/p4.png'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'


const Projects = () => {
    const projectImgs = [p1, p2, p3,p4]


    return (

        <div className="w-full bg-[#5017ab98] py-12 px-4 overflow-hidden">
            <h1 className="tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10 lg:mb-16 text-white text-center">
               TOP PROJECTS
            </h1>

            <div className="relative w-full">
                {/* Infinite scrolling container */}
                <motion.div
                    className="flex  gap-6"
                    animate={{ x: ["-100%", "0%"] }} // scroll halfway since array is duplicated
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType:'reverse'
                    }}
                >
                    {[...projectImgs, ...projectImgs].map((img, index) => (
                        <div
                            key={index}
                            className="min-w-[360px] sm:min-w-[400px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px] "
                        >
                            <img
                                src={img}
                                alt={`Project ${index}`}
                                className=" "
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
           
                <Link className=" mt-7 text-white bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                to='/all-projects' >View All Projects →</Link> 
            


        </div>

    )





}

export default Projects