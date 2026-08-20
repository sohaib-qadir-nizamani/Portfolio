import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase sm:text-sm sm:tracking-[0.3em]">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
          I'm available for freelance, contract, and remote Front-End
          Development opportunities. Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4 [@media(max-width:20rem)]:flex-col">
          <a
            href="mailto:sohaib.qadir82@gmail.com"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-700 active:bg-blue-700 sm:rounded-xl sm:px-7 sm:py-3 sm:text-base [@media(max-width:20rem)]:text-center"
          >
            Email Me
          </a>

          <a
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 active:translate-y-1 active:border-blue-500 sm:rounded-xl sm:px-7 sm:py-3 sm:text-base [@media(max-width:20rem)]:text-center"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 active:translate-y-1 active:border-blue-500 sm:rounded-xl sm:px-7 sm:py-3 sm:text-base [@media(max-width:20rem)]:text-center"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-2xl sm:mt-12 sm:gap-8 sm:text-3xl">
          <a
            href="mailto:sohaib.qadir82@gmail.com"
            className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400 active:translate-y-1 active:text-blue-400"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400 active:translate-y-1 active:text-blue-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:-translate-y-1 hover:text-blue-400 active:translate-y-1 active:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
