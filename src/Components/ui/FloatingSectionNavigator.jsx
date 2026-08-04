import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import useArrowVisibility from "@/hooks/useArrowVisibility";
import useFooterState from "@/hooks/useFooterState";
import useScrollDirection from "@/hooks/useScrollDirection";
import useSectionNavigation from "@/hooks/useSectionNavigation";

const FloatingSectionNavigator = () => {
  const shouldReduceMotion = useReducedMotion();
  const activeIndex = useActiveSection();
  const scrollDirection = useScrollDirection();
  const footerState = useFooterState();
  const isVisible = useArrowVisibility();
  const { goHero, goNext, goPrevious } = useSectionNavigation();
  const [arrowDirection, setArrowDirection] = useState("down");
  const [positionStyle, setPositionStyle] = useState({
    position: "fixed",
    bottom: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const footerVisible =
        footerState === "visible" || footerState === "active";
      const footerAtLeastEightyVisible = footerState === "active";

      const nextStyle = footerVisible
        ? {
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }
        : {
            position: "fixed",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
          };

      const resolvedDirection = footerAtLeastEightyVisible
        ? "up"
        : footerVisible
          ? "up"
          : scrollDirection === "down"
            ? "down"
            : "up";

      setArrowDirection(resolvedDirection);
      setPositionStyle(nextStyle);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (event) => {
    event.preventDefault();

    if (footerState === "active" && arrowDirection === "up") {
      goHero();
      return;
    }

    if (arrowDirection === "down") {
      goNext(activeIndex);
      return;
    }

    goPrevious(activeIndex);
  };

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        aria-label={
          footerState === "active"
            ? "Scroll to the top of the page"
            : arrowDirection === "up"
              ? "Scroll to the previous section"
              : "Scroll to the next section"
        }
        onClick={handleNavigate}
        initial={false}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 16,
          scale: isVisible ? 1 : 0.95,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.25, ease: "easeOut" }
        }
        className={`z-50 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none md:h-16 md:w-16 ${isVisible ? "pointer-events-auto" : "pointer-events-none"}`}
        style={positionStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 transition-transform duration-300 md:h-8 md:w-8 ${arrowDirection === "up" ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
    </AnimatePresence>
  );
};

export default FloatingSectionNavigator;
