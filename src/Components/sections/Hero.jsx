import HeroSocials from "@/components/hero/HeroSocials";
import SohaibCV from "@/assets/docs/SohaibCV.pdf";

const Hero = () => {
  return (
    // <section id="home" className="relative flex min-h-screen items-center">
    <section
      d="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 md:flex-row md:justify-between lg:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-lg font-medium text-blue-400">Hello, I'm</p>

          <h1 className="text-5xl leading-tight font-extrabold text-white md:text-6xl">
            Sohaib Qadir
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            Front-End Web Application Developer
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I build fast, responsive, and modern web applications using React,
            JavaScript, Tailwind CSS, and AI-assisted development workflows.
            Passionate about creating intuitive user experiences and writing
            clean, maintainable code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/30"
              // className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Hire Me
            </a>

            <a
              href={SohaibCV}
              // download="SohaibCV.pdf"
              // className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 transition hover:border-white hover:text-white"
              className="rounded-xl border border-slate-600 px-7 py-3 font-semibold text-slate-200 transition duration-300 hover:border-white hover:bg-slate-800"
            >
              Download CV
            </a>
            <HeroSocials />
          </div>
        </div>
        {/* Right Content */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/20 blur-3xl"></div>

            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl">
              <img
                src="/src/assets/images/profile.png"
                alt="Sohaib Qadir"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
