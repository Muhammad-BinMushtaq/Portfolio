import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#0e0e33] mt-1 py-10 border-t border-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 text-white">

        {/* Email */}
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <SiGmail className="w-5 h-5" />
          <p className="text-gray-300 hover:text-white transition duration-200">muhammadcode3@gmail.com</p>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Muhammad Bin Mushtaq. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Muhammad-BinMushtaq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-white transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-binmushtaq/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-400 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

      </div>
    </div>

  )
}

export default Footer