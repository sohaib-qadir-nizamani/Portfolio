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
      className="bg-slate-900 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="mb-6 h-48 rounded-xl bg-slate-800"></div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="rounded-lg border border-slate-700 px-4 py-2 hover:border-blue-500"
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
