import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md supports-backdrop-filter:bg-slate-950/70">
      <Navbar />
    </header>
  );
}

export default Header;
