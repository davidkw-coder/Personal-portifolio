import { Award, GraduationCap, ChevronDown } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-12 py-20 relative">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <p className="text-xl mb-3 font-medium text-gray-500">Get To Know More</p>
          <h2 className="text-6xl font-bold text-black">About Me</h2>
        </div>

        <div className="flex items-start gap-20">
          <div className="flex-shrink-0">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden bg-gray-100 shadow-lg">
              <img src="/wivine.png" alt="About" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex gap-8 mb-10">
              <div className="flex-1 bg-white border-2 border-gray-200 rounded-[2rem] p-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <Award size={32} className="w-10 h-10 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-2 text-black">Experience</h3>
                <p className="text-gray-600 text-lg font-semibold">2+ years</p>
                <p className="text-gray-600 text-lg">Frontend Development</p>
              </div>

              <div className="flex-1 bg-white border-2 border-gray-200 rounded-[2rem] p-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <GraduationCap size={32} className="w-10 h-10 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-2 text-black">Education</h3>
                <p className="text-gray-600 text-lg">B.Sc. Bachelors Degree</p>
                <p className="text-gray-600 text-lg">in software Engineering</p>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Experienced Full Stack Developer with 2.5+ years in web and mobile app development. Proficient in
              React.js, TypeScript, Node.js, Django, and database management. Skilled in building scalable solutions,
              optimizing performance, and deploying with Docker, Kubernetes, and CI/CD. Passionate about UI/UX,
              security, and mentoring teams.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce">
        <ChevronDown size={36} className="w-12 h-12 text-black" strokeWidth={2} />
      </div>
    </section>
  )
}
