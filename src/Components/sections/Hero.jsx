import HeroSocials from "@/components/hero/HeroSocials";
import SohaibCV from "@/assets/docs/SohaibCV.pdf";
import ProfileImage from "@/assets/images/profile.png";
import { motion, useReducedMotion } from "framer-motion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-slate-950 pt-24 md:pt-28"
    >
      {/* Background Glow — clipped so it never causes horizontal scroll */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-24 md:flex-row md:items-center md:justify-between md:gap-16 lg:px-8">
        {/* Left Content */}
        <motion.div
          className="w-full text-center md:w-1/2 md:text-left"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -50,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.7 }}
        >
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

          <div className="mt-10 flex flex-col items-center gap-4 md:items-start">
            <div className="flex w-full justify-center gap-4 sm:w-auto sm:gap-8">
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="min-w-42.5 rounded-xl bg-blue-600 px-7 py-3 text-center font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:shadow-blue-500/30 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
              >
                Hire Me
              </motion.a>

              <motion.a
                href={SohaibCV}
                download="Sohaib_Qadir_CV.pdf"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="min-w-42.5 rounded-xl border border-slate-600 px-7 py-3 text-center font-semibold text-slate-200 transition duration-300 hover:border-white hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
              >
                Download CV
              </motion.a>
            </div>

            <HeroSocials />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex w-full max-w-xs justify-center sm:max-w-sm md:max-w-none md:w-1/2"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 50,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-full bg-blue-500/20 blur-3xl"
            />

            <motion.div
              className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-900 shadow-[0_0_60px_rgba(59,130,246,0.35)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scale: 0.9,
                      opacity: 0,
                    }
              }
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={ProfileImage}
                alt="Sohaib Qadir"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="animate-bounce text-slate-400 transition hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          onClick={(e) => {
            e.preventDefault();
            const aboutEl = document.getElementById("about");
            if (aboutEl) {
              aboutEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
