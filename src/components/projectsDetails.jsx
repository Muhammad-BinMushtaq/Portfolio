import React from 'react'
import p1 from '../assets/projectsImg/p1.png'
import p2 from '../assets/projectsImg/p2.png'
import p3 from '../assets/projectsImg/p3.png'
import p4 from '../assets/projectsImg/p4.png'
import p5 from '../assets/projectsImg/p5.png'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from 'motion/react'


const ProjectsDetails = () => {
    const ProjDetails = [
        {
            id: 1,
            title: "Cinverx",
            description: "A movies app with 1 million+ users and rich features.",
            github: "https://cinverx.netlify.app",
            live: "https://cinverx.netlify.app",
            image: p1

        },
        {
            id: 2,
            title: "Gym Management",
            description: "Complete system to manage gym members and payments.",
            github: "https://github.com/Muhammad-BinMushtaq/Gym-Management",
            live: "https://github.com/Muhammad-BinMushtaq/Gym-Management",
            image: p2
        },
        {
            id: 3,
            title: "GitHub User Finder",
            description: "Search GitHub profiles and view user repositories.",
            github: "https://github.com/Muhammad-BinMushtaq/github-userdata-extraction/",
            live: "https://muhammad-binmushtaq.github.io/github-userdata-extraction/",
            image: p3

        },
        {
            id: 4,
            title: "Sample Portfolio Design",
            description: "Clean and responsive portfolio template for creatives.",
            github: "https://github.com/Muhammad-BinMushtaq/portfolio-project",
            live: "https://muhammad-binmushtaq.github.io/portfolio-project/",
            image: p4
        },
        {
            id: 5,
            title: "Amazon Clone",
            description: "E-commerce site mimicking Amazon's shopping experience.",
            github: "https://github.com/Muhammad-BinMushtaq/amazon-clone",
            live: "https://github.com/Muhammad-BinMushtaq/amazon-clone",
            image: p5
        }
    ];

    return (
        <div className="bg-[#0D0D0D] text-[#F1F1F1] p-10 pt-12 flex flex-col gap-16 text-center">

            <h1 className="tracking-tight text-4xl md:text-7xl lg:text-8xl font-bold  ">ALL PROJECTS</h1>

            <div className="flex flex-wrap gap-10 items-center justify-center">
                {ProjDetails.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(123, 97, 255, 0.4)",
                        }}

                        whileTap={{
                             scale: 0.95,
                            boxShadow: "0px 0px 20px rgba(123, 97, 255, 0.4)",
                        }}

                        className="cursor-pointer max-w-sm bg-[#1A1A1A] border border-[#2F2F2F] rounded-lg"
                    >
                        <img className="rounded-t-lg" src={project.image} alt={project.title} />

                        <div className="p-5">
                            <h5 className="text-2xl font-bold mb-2 text-white">{project.title}</h5>
                            <p className="text-[#A1A1A1] mb-3">{project.description}</p>

                            <div className="flex gap-3">
                                <a
                                    href={project.live}
                                    className="px-3 py-2 bg-[#7B61FF] hover:bg-[#9C88FF] text-white rounded-lg text-sm inline-flex items-center"
                                >
                                    <FaLink />
                                </a>
                                <a
                                    href={project.github}
                                    className="px-3 py-2 bg-[#7B61FF] hover:bg-[#9C88FF] text-white rounded-lg text-sm inline-flex items-center"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>


    )
}

export default ProjectsDetails