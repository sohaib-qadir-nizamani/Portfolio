import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 pt-12 pb-6 sm:gap-8 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
        {/* Branding */}
        <div className="shrink text-center">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Sohaib Qadir
          </h3>

          <p className="mt-1 text-xs text-slate-400 sm:mt-2 sm:text-sm">
            Front-End Web Application Developer
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex shrink flex-wrap justify-center gap-4 text-xs text-slate-400 sm:gap-6 sm:text-sm">
          <a
            href="#home"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-400 active:text-blue-400"
          >
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex shrink items-center gap-5 sm:gap-6">
          <a
            href="mailto:sohaib.qadir82@gmail.com"
            aria-label="Email"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400 active:-translate-y-1 active:text-blue-400"
          >
            <FaEnvelope size={20} className="sm:h-[22px] sm:w-[22px]" />
          </a>

          <a
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400 active:-translate-y-1 active:text-blue-400"
          >
            <FaGithub size={20} className="sm:h-[22px] sm:w-[22px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400 active:-translate-y-1 active:text-blue-400"
          >
            <FaLinkedin size={20} className="sm:h-[22px] sm:w-[22px]" />
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full shrink border-t border-slate-800 pt-5 text-center sm:pt-6">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {year} Sohaib Qadir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
