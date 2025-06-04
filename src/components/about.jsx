import React from "react";
import { FaDatabase, FaCode, FaBolt, FaCubes } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Learning", value: "04+" },
  { label: "Projects Built", value: "20+" },
  { label: "Clients Helped", value: "5+" },
];

const services = [
  {
    title: "Modern Web Development",
    icon: <FaCode />,
    desc: "Crafting responsive, scalable front-ends using React, Tailwind CSS, and Framer Motion animations.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    desc: "Designing and handling MySQL databases with optimized queries and relational structures.",
  },
  {
    title: "Data Structures & Algorithms",
    icon: <FaCubes />,
    desc: "Solving logical problems with a strong foundation in JavaScript-based DSA for optimal performance.",
  },
  {
    title: "Creative Animations",
    icon: <FaBolt />,
    desc: "Adding motion to interfaces using Framer Motion for enhanced user engagement and elegance.",
  },
];

const AboutMe = () => {
  return (
    <section className="bg-[#0e0e0e] text-[#e4e4e4] py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-10 shadow-lg shadow-indigo-500/10">
       
          <h2 className="tracking-tight text-3xl md:text-4xl lg:text-6xl font-bold mb-6 ">ABOUT ME</h2>
          <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
            Myself Muhammad, a Software Engineer developing modern web apps, and solving real-world problems with code. </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-extrabold text-indigo-400">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#131313] border border-[#2a2a2a] p-6 rounded-xl hover:shadow-md hover:shadow-indigo-500/20 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-indigo-400 text-2xl">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                </div>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
