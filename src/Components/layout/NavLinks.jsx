import navigation from "@/constants/navigation";

function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navigation.map((item) => (
        <a
          key={item.label}
          href={`#${item.id}`}
          className="rounded-md px-2 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default NavLinks;
