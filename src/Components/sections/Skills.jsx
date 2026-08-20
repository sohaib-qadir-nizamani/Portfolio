const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "Vite",
  ],
  "State Management": ["Redux Toolkit", "Context API"],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Google Anti-Gravity",
    "Chrome DevTools",
    "npm",
  ],
  "Currently Learning": ["TypeScript", "Next.js"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.3em]">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([title, items]) => (
            // Skill Card
            <div
              key={title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:rounded-2xl sm:p-8"
            >
              <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-3 py-1.5 text-xs transition hover:bg-blue-600 active:bg-blue-600 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
