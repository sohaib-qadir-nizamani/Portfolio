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
    <section id="skills" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([title, items]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold">{title}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm transition hover:bg-blue-600 active:bg-blue-600"
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
