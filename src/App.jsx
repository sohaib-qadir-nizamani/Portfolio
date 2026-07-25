// import Badge from "@/components/ui/Badge";
// import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";
// import Heading from "@/components/ui/Heading";
// import Section from "@/components/ui/Section";
import Header from "@/components/layout/Header";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="flex h-[200vh] items-center justify-center">
        <h1 className="text-5xl font-bold">Portfolio Coming Soon</h1>
      </main>

      {/* <Section>
        <Container>
          <Badge>Open to Remote Work</Badge>

          <Heading
            title="World-Class Portfolio"
            subtitle="Building a premium React portfolio from scratch."
          />

          <div className="flex gap-4 justify-center">
            <Button>View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>
        </Container>
      </Section> */}
    </main>
  );
}

export default App;
