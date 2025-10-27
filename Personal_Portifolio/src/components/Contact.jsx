"use client"

import { Mail, Linkedin } from "lucide-react"

export default function Contact({ scrollToSection }) {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-12 py-20">
      <div className="max-w-5xl w-full flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <p className="text-xl mb-3 font-medium text-gray-500">Get in Touch</p>
          <h2 className="text-6xl font-bold text-black">Contact Me</h2>
        </div>

        <div className="bg-white w-[700px] border-2 border-gray-200 rounded-full px-16 py-8 flex mx-[150px] items-center justify-center gap-20 mb-24 shadow-md hover:shadow-lg transition-shadow duration-300">
          <a
            href="mailto:kwizeradaviditss@gmail.com"
            className="flex items-center text-black gap-4 hover:opacity-60 transition-all duration-300"
          >
            <Mail size={28} className="w-9 h-9" strokeWidth={1.5} />
            <span className="text-xl font-medium">kwizeradaviditss@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-60 transition-all duration-300"
          >
            <Linkedin size={28} className="w-9 h-9" strokeWidth={1.5} />
            <span className="text-xl font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      <footer className="w-full max-w-5xl">
        <nav className="flex justify-center gap-16 mb-6">
          <button
            onClick={() => scrollToSection && scrollToSection("about")}
            className="text-2xl text-black hover:text-gray-600 transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection && scrollToSection("experience")}
            className="text-2xl text-black hover:text-gray-600 transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection && scrollToSection("projects")}
            className="text-2xl text-black hover:text-gray-600 transition-colors font-medium"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection && scrollToSection("contact")}
            className="text-2xl text-black hover:text-gray-600 transition-colors font-medium"
          >
            Contact
          </button>
        </nav>
        <p className="text-center text-gray-600 text-lg">Copyright © 2023 KWIZERA David. All Rights Reserved.</p>
      </footer>
    </section>
  )
}
