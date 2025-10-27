"use client"

import { useState, useEffect } from "react"
import Home from "../components/Home"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-black">KWIZERA</h1>

            <div className="flex gap-12">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xl font-medium text-black transition-all hover:underline hover:text-gray-600 decoration-2 underline-offset-4"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div id="home">
        <Home scrollToSection={scrollToSection} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact scrollToSection={scrollToSection} />
      </div>
    </div>
  )
}
