import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-white">Sohaib Qadir</h3>

          <p className="mt-2 text-slate-400">
            Front-End Web Application Developer
          </p>

          <p className="mt-4 text-sm text-slate-500">
            © {year} Sohaib Qadir. All Rights Reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-slate-400">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#experience" className="hover:text-blue-400">
            Experience
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sohaib.qadir82@gmail.com"
            className="text-slate-400 transition hover:text-blue-400"
          >
            <FaEnvelope size={22} />
          </a>

          <a
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-blue-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-4 rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
