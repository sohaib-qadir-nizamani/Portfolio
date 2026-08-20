const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            Turning Ideas Into Modern Web Experiences
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
            I am a Front-End Web Application Developer with a strong background
            in IT and system administration. I enjoy building responsive,
            accessible, and high-performance web applications using modern
            frontend technologies while continuously improving my development
            workflow with AI-assisted tools.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.22)] hover:shadow-blue-500/20 active:-translate-y-1 active:scale-[1.02] active:shadow-[0_0_24px_rgba(59,130,246,0.22)] active:shadow-blue-500/20 sm:rounded-2xl sm:p-8">
            <h3 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
              My Journey
            </h3>

            <p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-8">
              After more than a decade in IT infrastructure and system
              administration, I transitioned into Front-End Web Development. My
              experience enables me to approach software development with strong
              analytical thinking, problem-solving, and a focus on maintainable
              solutions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.22)] hover:shadow-blue-500/20 active:-translate-y-1 active:scale-[1.02] active:shadow-[0_0_24px_rgba(59,130,246,0.22)] active:shadow-blue-500/20 sm:rounded-2xl sm:p-8">
            <h3 className="mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
              What I Focus On
            </h3>

            <ul className="space-y-3 text-sm text-slate-400 sm:space-y-4 sm:text-base">
              <li>✓ Responsive Web Applications</li>
              <li>✓ React & JavaScript Development</li>
              <li>✓ Tailwind CSS UI Development</li>
              <li>✓ Performance Optimization</li>
              <li>✓ Clean & Maintainable Code</li>
              <li>✓ AI-Assisted Development Workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
