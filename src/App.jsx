import Badge from "@/Components/ui/Badge";
import Button from "@/Components/ui/Button";
import Container from "@/Components/ui/Container";
import Heading from "@/Components/ui/Heading";
import Section from "@/Components/ui/Section";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/sections/Hero";
import About from "@/Components/sections/About";

function App() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />

      {/* <div className="flex h-[200vh] items-center justify-center"> */}
      <Hero />
      <About />
      {/* </div> */}

      <Section>
        <Container>
          <Badge>Open to Remote Work</Badge>

          <Heading
            title="World-Class Portfolio"
            subtitle="Building a premium React portfolio from scratch."
          />

          <div className="flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;
