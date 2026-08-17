// import logoImg from "../../assets/images/Logo-Header-512x512.png";
import logoImg from "../../assets/images/Logo.svg";
function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
    >
      <img
        src={logoImg}
        alt="SQ TechWorks Logo"
        className="h-15 w-auto -translate-x-8 -translate-y-8 transition duration-500 hover:scale-105 active:scale-105 sm:h-18 sm:-translate-x-10 sm:translate-y-2 md:h-20 md:-translate-x-12 md:translate-y-3 lg:h-23 lg:-translate-x-14 lg:translate-y-4 xl:h-25 2xl:h-28"
      />
    </a>
  );
}
export default Logo;
