"use client"

import { Linkedin, Github } from "lucide-react"

export default function Home({ scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20">
        <div className="flex-shrink-0">
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-gray-100 shadow-lg border-4 border-white">
            <img src="/wivine.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <p className="text-gray-500 text-base sm:text-lg lg:text-xl mb-2 lg:mb-3 font-medium">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 lg:mb-4 leading-tight text-black">
            IRATUZI <br/> Wivine
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 lg:mb-10 font-bold">Frontend Developer</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-10 justify-center lg:justify-start">
            <button className="px-8 sm:px-10 lg:px-12 py-3.5 lg:py-4 border-2 border-black rounded-full text-base lg:text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl hover:scale-105">
              Download CV
            </button>
            <button
              onClick={() => scrollToSection && scrollToSection("contact")}
              className="px-8 sm:px-10 lg:px-12 py-3.5 lg:py-4 bg-[#2D2D2D] text-white rounded-full text-base lg:text-lg font-semibold border-2 border-[#2D2D2D] transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:shadow-xl hover:scale-105"
            >
              Contact Info
            </button>
          </div>

          <div className="flex gap-5 justify-center lg:justify-start">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={32} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-all duration-300 hover:scale-110"
            >
              <Github size={32} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
