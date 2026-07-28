import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">
      {/* Back to Top Button */}
      <a
        href="#home"
        aria-label="Back to top"
        className="absolute top-0 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-x-1/2 hover:translate-y-[-60%] hover:border-blue-500 hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 rotate-180 text-white"
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

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-16 pb-8">
        {/* Branding */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">Sohaib Qadir</h3>

          <p className="mt-2 text-slate-400">
            Front-End Web Application Developer
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>

          <a href="#skills" className="transition hover:text-blue-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Projects
          </a>

          <a href="#experience" className="transition hover:text-blue-400">
            Experience
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:sohaib.qadir82@@gmail.com"
            aria-label="Email"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaEnvelope size={22} />
          </a>

          <a
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {year} Sohaib Qadir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
