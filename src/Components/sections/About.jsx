const About = () => {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Turning Ideas Into Modern Web Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I am a Front-End Web Application Developer with a strong background
            in IT and system administration. I enjoy building responsive,
            accessible, and high-performance web applications using modern
            frontend technologies while continuously improving my development
            workflow with AI-assisted tools.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.22)] hover:shadow-blue-500/20 active:-translate-y-1 active:scale-[1.02] active:shadow-[0_0_24px_rgba(59,130,246,0.22)] active:shadow-blue-500/20">
            <h3 className="mb-4 text-2xl font-semibold">My Journey</h3>

            <p className="leading-8 text-slate-400">
              After more than a decade in IT infrastructure and system
              administration, I transitioned into Front-End Web Development. My
              experience enables me to approach software development with strong
              analytical thinking, problem-solving, and a focus on maintainable
              solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.22)] hover:shadow-blue-500/20 active:-translate-y-1 active:scale-[1.02] active:shadow-[0_0_24px_rgba(59,130,246,0.22)] active:shadow-blue-500/20">
            <h3 className="mb-4 text-2xl font-semibold">What I Focus On</h3>

            <ul className="space-y-4 text-slate-400">
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
