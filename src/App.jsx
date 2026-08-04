// import Badge from "@/Components/ui/Badge";
// import Button from "@/Components/ui/Button";
// import Container from "@/Components/ui/Container";
// import Heading from "@/Components/ui/Heading";
// import Section from "@/Components/ui/Section";
import Header from "@/Components/layout/Header";
import { useEffect } from "react";
import Hero from "@/Components/sections/Hero";
import FloatingSectionNavigator from "@/Components/ui/FloatingSectionNavigator";
import About from "@/Components/sections/About";
import Skills from "@/Components/sections/Skills";
import Projects from "@/Components/sections/Projects";
import Experience from "@/Components/sections/Experience";
import Contact from "@/Components/sections/contact";
import Footer from "@/Components/sections/Footer";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    // Ensure page starts at the top (home) on reload
    const homeEl = document.getElementById("home");
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-white">
      <Header />

      {/* <div className="flex h-[200vh] items-center justify-center"> */}
      <Hero />
      <FloatingSectionNavigator />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* </div> */}
    </main>
  );
}

export default App;
