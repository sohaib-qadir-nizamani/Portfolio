import Container from "@/components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <Container className="flex h-16 items-center justify-between">
      <Logo />
      <NavLinks />
    </Container>
  );
}

export default Navbar;
