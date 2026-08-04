import { useEffect, useRef, useState } from "react";

const useScrollDirection = () => {
  const [direction, setDirection] = useState("down");
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const nextDirection =
        currentScrollTop > lastScrollTopRef.current ? "down" : "up";

      lastScrollTopRef.current = currentScrollTop;
      setDirection(nextDirection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
