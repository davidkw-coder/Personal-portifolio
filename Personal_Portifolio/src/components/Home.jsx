"use client"

import { Linkedin, Github } from "lucide-react"

export default function Home({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden bg-gray-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-4 border-white">
            <img
              src="/David (2).png"
              alt="Profile"
              className="w-fit h-fit object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-5">
          <p className="text-gray-500 text-lg sm:text-xl font-medium tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            KWIZERA <br /> David
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-semibold mb-6">
            Frontend Developer
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 sm:px-10 py-3.5 border-2 border-gray-900 rounded-full text-base lg:text-lg font-semibold bg-white text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-lg">
              Download CV
            </button>

            <button
              onClick={() => scrollToSection && scrollToSection("contact")}
              className="px-8 sm:px-10 py-3.5 rounded-full text-base lg:text-lg font-semibold bg-gray-900 text-white border-2 border-gray-900 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              Contact Info
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
            >
              <Linkedin size={34} className="text-gray-800" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
            >
              <Github size={34} className="text-gray-800" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
