import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

import Container from "@/Components/ui/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const prevOpen = useRef(isOpen);

  // Restore focus to the hamburger button when the menu closes
  useEffect(() => {
    if (prevOpen.current && !isOpen) {
      menuButtonRef.current?.focus();
    }
    prevOpen.current = isOpen;
  }, [isOpen]);

  return (
    <>
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <NavLinks />

        <button
          ref={menuButtonRef}
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none active:bg-slate-800 active:text-white md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
