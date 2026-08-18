import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSocials = () => {
  return (
    // <div className="mt-10 flex items-center justify-center gap-5">
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-5">
      <a
        href="https://github.com/sohaib-qadir-nizamani"
        target="_blank"
        rel="noreferrer"
        // className="interactive rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white"
        className="interactive inline-flex shrink-0 items-center justify-center rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white sm:p-3"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
        target="_blank"
        rel="noreferrer"
        // className="interactive rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white"
        className="interactive inline-flex shrink-0 items-center justify-center rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white sm:p-3"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="mailto:sohaib.qadir82@gmail.com"
        // className="interactive rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white"
        className="interactive inline-flex shrink-0 items-center justify-center rounded-full bg-slate-800 p-2.5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white active:-translate-y-1 active:bg-blue-600 active:text-white sm:p-3"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
  );
};

export default HeroSocials;
