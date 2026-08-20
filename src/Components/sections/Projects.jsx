const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React, Vite, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Vite", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Fast React Pizza",
    description:
      "Pizza ordering application featuring routing, state management, and responsive UI.",
    tech: ["React", "React Router", "Redux Toolkit"],
    github: "#",
    live: "#",
  },
  {
    title: "Forkify",
    description:
      "Recipe search application using modern JavaScript and API integration.",
    tech: ["JavaScript", "MVC", "Parcel"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-2 hover:border-blue-500 active:-translate-y-2 active:border-blue-500 sm:rounded-2xl sm:p-8"
            >
              <div className="mb-4 h-40 rounded-lg bg-slate-800 sm:mb-6 sm:h-48 sm:rounded-xl"></div>

              <h3 className="text-xl font-semibold sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-4 sm:mt-8 [@media(max-width:20rem)]:flex-col">
                <a
                  href={project.github}
                  className="shrink rounded-lg bg-blue-600 px-4 py-2 text-sm transition-transform duration-1000 ease-out hover:bg-blue-700 active:scale-90 active:bg-blue-700 sm:text-base [@media(max-width:20rem)]:text-center"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="shrink rounded-lg border border-slate-700 px-4 py-2 text-sm transition-transform duration-1000 ease-out hover:border-blue-500 active:scale-90 active:border-blue-500 sm:text-base [@media(max-width:20rem)]:text-center"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
