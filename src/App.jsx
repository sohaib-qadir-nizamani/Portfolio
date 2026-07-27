// import Badge from "@/Components/ui/Badge";
// import Button from "@/Components/ui/Button";
// import Container from "@/Components/ui/Container";
// import Heading from "@/Components/ui/Heading";
// import Section from "@/Components/ui/Section";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/sections/Hero";
import About from "@/Components/sections/About";
import Skills from "@/Components/sections/Skills";
import Projects from "@/Components/sections/Projects";
import Experience from "@/Components/sections/Experience";
import Contact from "@/Components/sections/contact";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />

      {/* <div className="flex h-[200vh] items-center justify-center"> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      {/* </div> */}
    </main>
  );
}

export default App;
