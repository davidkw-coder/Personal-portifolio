"use client"

import { Mail, Linkedin } from "lucide-react"

export default function Contact({ scrollToSection }) {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-between px-6 md:px-12 lg:px-20 py-24 bg-white"
    >
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl mb-3 font-medium text-gray-500">
            Get in Touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Contact Me
          </h2>
        </div>

        {/* Contact Box */}
        <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-3xl md:rounded-full px-8 sm:px-12 md:px-16 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 shadow-md hover:shadow-xl transition-all duration-300 mb-16">
          {/* Email */}
          <a
            href="mailto:kwizeradaviditss@gmail.com"
            className="flex items-center text-gray-900 gap-4 hover:opacity-70 transition-all duration-300"
          >
            <Mail size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            <span className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left">
              kwizeradaviditss@gmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-70 transition-all duration-300"
          >
            <Linkedin size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            <span className="text-base sm:text-lg md:text-xl font-medium text-center md:text-left">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl">
        <nav className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-6">
          {["about", "experience", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection && scrollToSection(section)}
              className="text-lg sm:text-xl text-gray-900 hover:text-gray-600 transition-colors font-medium capitalize"
            >
              {section}
            </button>
          ))}
        </nav>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">
          © {new Date().getFullYear()} KWIZERA David. All Rights Reserved.
        </p>
      </footer>
    </section>
  )
}
