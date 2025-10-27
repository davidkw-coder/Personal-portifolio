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
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 bg-white relative"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-500 font-medium mb-2">
            Explore My
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Experience
          </h2>
        </div>

        {/* Skill Cards */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Frontend Card */}
          <div className="flex-1 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <CheckCircle2
                    size={26}
                    className="text-gray-800 flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="flex-1 bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  <CheckCircle2
                    size={26}
                    className="text-gray-800 flex-shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 right-1/2 translate-x-1/2 lg:right-12 lg:translate-x-0 animate-bounce">
        <ChevronDown size={36} className="text-gray-800" strokeWidth={2} />
      </div>
    </section>
  )
}
