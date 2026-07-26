import Badge from "@/Components/ui/Badge";
import Button from "@/Components/ui/Button";
import Container from "@/Components/ui/Container";
import Heading from "@/Components/ui/Heading";
import Section from "@/Components/ui/Section";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/sections/Hero";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="flex h-[200vh] items-center justify-center">
        <Hero />
      </main>

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
