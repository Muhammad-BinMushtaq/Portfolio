import React from 'react';
import { motion } from 'framer-motion';



const skills = [
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'React.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
        name: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }
];

const Techstack = () => {

    return (
        <motion.div

            className="w-full max-w-5xl mx-auto bg-[#06061a] rounded-xl p-6 my-10 border border-gray-800"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className="text-4xl lg:text-6xl lg:mb-10 font-bold text-white mb-8 text-center">TECH STACK</h2>
            <div className="relative flex flex-wrap justify-center gap-6 overflow-x-hidden  ">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="w-20 h-20 shadow-2xl rounded-full flex items-center justify-center "
                        animate={{
                            x: [0, Math.random() * 20 - 10, 0],
                            y: [0, Math.random() * 20 - 10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'mirror',
                            delay: index * 0.01
                        }}
                        drag
                        whileDrag={{
                            scale: 1.1
                        }}
                        dragConstraints={{
                            top: -20,
                            bottom: 20,
                            left: -20,
                            right: 20
                        }}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                    </motion.div>
                ))}
            </div>
            
              
              
              
        </motion.div>
    );
};

export default Techstack;


