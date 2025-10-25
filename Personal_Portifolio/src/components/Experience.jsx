import { CheckCircle2, ChevronDown } from "lucide-react"

export default function Experience() {
  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "SASS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "TypeScript", level: "Basic" },
    { name: "Material UI", level: "Intermediate" },
  ]

  const backendSkills = [
    { name: "PostgreSQL", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-12 py-20 relative">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xl mb-3 font-medium text-gray-500">Explore My</p>
          <h2 className="text-6xl font-bold text-black">Experience</h2>
        </div>

        <div className="flex gap-10">
          <div className="flex-1 bg-white border-2 border-gray-200 rounded-[2.5rem] p-12 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="w-7 h-7 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h4 className="text-xl font-bold text-black">{skill.name}</h4>
                    <p className="text-gray-600 text-lg">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white border-2 border-gray-200 rounded-[2.5rem] p-12 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Backend Development</h3>
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="w-7 h-7 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h4 className="text-xl font-bold text-black">{skill.name}</h4>
                    <p className="text-gray-600 text-lg">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce">
        <ChevronDown size={36} className="w-12 h-12 text-black" strokeWidth={2} />
      </div>
    </section>
  )
}
