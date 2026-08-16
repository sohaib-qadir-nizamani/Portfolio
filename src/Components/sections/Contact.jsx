import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-blue-400 uppercase">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I'm available for freelance, contract, and remote Front-End
          Development opportunities. Feel free to reach out.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="transitionactive:translate-y-1 rounded-xl bg-blue-600 px-7 py-3 font-semibold duration-300 hover:-translate-y-1 hover:bg-blue-700 active:bg-blue-700"
          >
            Email Me
          </a>

          <a
            // href="https://github.com/YOUR_USERNAME"
            href="https://github.com/sohaib-qadir-nizamani"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 active:translate-y-1 active:border-blue-500"
          >
            GitHub
          </a>

          <a
            // href="https://linkedin.com/in/YOUR_USERNAME"
            href="https://www.linkedin.com/in/sohaib-qadir-5a9256b0/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500 active:translate-y-1 active:border-blue-500"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-3xl">
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
