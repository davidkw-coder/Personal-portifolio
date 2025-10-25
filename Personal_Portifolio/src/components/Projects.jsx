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
    <section id="projects" className="min-h-screen flex items-center justify-center px-12 py-20 relative">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xl mb-3 font-medium text-gray-500">Browse My Recent</p>
          <h2 className="text-6xl font-bold text-black">Projects</h2>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-50 rounded-[2rem] mb-8 h-72 flex items-center justify-center overflow-hidden border-2 border-gray-200 shadow-sm">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-center mb-8 text-black">{project.title}</h3>
              <div className="flex gap-4 justify-center">
                <button className="px-9 py-3 border-2 border-black rounded-full text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
                  Github
                </button>
                <button className="px-9 py-3 border-2 border-black rounded-full text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:scale-105">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce">
        <ChevronDown size={36} className="w-12 h-12 text-black" strokeWidth={2} />
      </div>
    </section>
  )
}
