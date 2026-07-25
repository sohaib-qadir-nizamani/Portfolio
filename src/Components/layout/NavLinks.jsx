import navigation from "@/constants/navigation";

function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-slate-300 transition hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
