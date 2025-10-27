import { ChevronDown } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      image: "/project-1.png",
    },
    {
      title: "Project Two",
      image: "/project-2.png",
    },
    {
      title: "Project Three",
      image: "/project-3.png",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 bg-white relative"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-500 font-medium mb-2">
            Browse My Recent
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden mb-8 h-64 sm:h-72 lg:h-80 bg-gray-50 border border-gray-200 shadow-sm flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-900">
                {project.title}
              </h3>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 sm:px-10 py-3 border-2 border-black rounded-full text-base sm:text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
                  Github
                </button>
                <button className="px-8 sm:px-10 py-3 border-2 border-black rounded-full text-base sm:text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:right-12 lg:translate-x-0 animate-bounce">
        <ChevronDown size={36} className="text-gray-800" strokeWidth={2} />
      </div>
    </section>
  )
}
