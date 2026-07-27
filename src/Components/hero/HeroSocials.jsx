import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSocials = () => {
  return (
    <div className="mt-10 flex items-center gap-5 border-4">
      <a
        href="https://github.com/sohaib-qadir-nizamani"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
      >
        <FaLinkedin size={22} />
      </a>

      <a
        href="mailto:sohaib.qadir82@gmail.com"
        className="rounded-full bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
      >
        <FaEnvelope size={22} />
      </a>
    </div>
  );
};

export default HeroSocials;
