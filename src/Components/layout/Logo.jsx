// import logoImg from "../../assets/images/Logo-Header-512x512.png";
import logoImg from "../../assets/images/Logo.svg";
function Logo() {
  return (
    <a
      href="/"
      // className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
      className="interactive flex shrink-0 items-center transition duration-300 hover:opacity-90"
    >
      <img
        src={logoImg}
        alt="SQ TechWorks Logo"
        className="h-10 w-auto transition duration-300 hover:scale-105 active:scale-105 sm:h-12 sm:max-w-none md:h-12 md:max-w-36 md:translate-x-0 lg:h-18 lg:max-w-56"
      />
    </a>
  );
}
export default Logo;
