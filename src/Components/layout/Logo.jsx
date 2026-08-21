import logoImg from "../../assets/images/Logo.svg";

function Logo() {
  return (
    <a
      href="/"
      className="interactive flex items-center transition duration-300 hover:opacity-90"
    >
      <img
        src={logoImg}
        alt="SQ TechWorks Logo"
        className="h-9 w-auto transition duration-300 hover:scale-105 active:scale-105 sm:h-10 md:h-9 lg:h-18"
      />
    </a>
  );
}

export default Logo;
