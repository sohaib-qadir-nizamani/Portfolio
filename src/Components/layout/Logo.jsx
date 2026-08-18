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
        className="h-14 w-auto translate-x-0 translate-y-0 transition duration-500 hover:scale-105 active:scale-105 sm:w-40 sm:-translate-x-1 md:-translate-x-6 md:max-[825px]:h-12 lg:h-18 lg:w-60 lg:-translate-x-9 xl:h-20"
      />
    </a>
  );
}
export default Logo;
