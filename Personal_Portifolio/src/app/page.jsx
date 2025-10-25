import Home from "@/components/Home"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">MUHUMUZA</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-lg hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#experience" className="text-lg hover:text-gray-600 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-lg hover:text-gray-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-lg hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
