import { Award, GraduationCap, ChevronDown } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 bg-white relative"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg sm:text-xl text-gray-500 font-medium mb-2">
            Get To Know More
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-[50%] overflow-hidden bg-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-200">
              <img
                src="/David (2).png"
                alt="About"
                className="w-fit h-fit object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10 justify-center lg:justify-start">
              {/* Experience Card */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <Award
                  size={36}
                  className="mx-auto mb-4 text-gray-800"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Experience
                </h3>
                <p className="text-gray-600 text-lg font-medium">2+ years</p>
                <p className="text-gray-600 text-lg">Frontend Development</p>
              </div>

              {/* Education Card */}
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <GraduationCap
                  size={36}
                  className="mx-auto mb-4 text-gray-800"
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Education
                </h3>
                <p className="text-gray-600 text-lg font-medium">
                  B.Sc. Bachelor's Degree
                </p>
                <p className="text-gray-600 text-lg">
                  in Software Engineering
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Experienced Full Stack Developer with 2.5+ years in web and mobile
              app development. Proficient in React.js, TypeScript, Node.js,
              Django, and database management. Skilled in building scalable
              solutions, optimizing performance, and deploying with Docker,
              Kubernetes, and CI/CD. Passionate about UI/UX, security, and
              mentoring teams.
            </p>
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
