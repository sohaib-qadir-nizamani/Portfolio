import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SECTION_IDS } from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import useFooterState from "@/hooks/useFooterState";
import useScrollDirection from "@/hooks/useScrollDirection";

const HIDE_DELAY_MS = 500;
const NAV_OFFSET = 96;
const FOOTER_POSITION_VISIBLE_THRESHOLD = 0.2;
const FOOTER_DIRECTION_VISIBLE_THRESHOLD = 0.8;

const FloatingSectionNavigator = () => {
  const shouldReduceMotion = useReducedMotion();
  const activeIndex = useActiveSection();
  const scrollDirection = useScrollDirection();
  const footerState = useFooterState();
  const [arrowDirection, setArrowDirection] = useState("down");
  const [isVisible, setIsVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState({
    position: "fixed",
    bottom: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
  });

  const hideTimerRef = useRef(null);

  const showArrow = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    setIsVisible(true);

    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, HIDE_DELAY_MS);
  };

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
      showArrow();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", showArrow, { passive: true });
    window.addEventListener("touchmove", showArrow, { passive: true });
    window.addEventListener("mousemove", showArrow, { passive: true });
    window.addEventListener("keydown", showArrow);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", showArrow);
      window.removeEventListener("touchmove", showArrow);
      window.removeEventListener("mousemove", showArrow);
      window.removeEventListener("keydown", showArrow);
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleNavigate = (event) => {
    event.preventDefault();

    if (footerState === "active" && arrowDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (arrowDirection === "down" && activeIndex < SECTION_IDS.length - 1) {
      const targetId = SECTION_IDS[activeIndex + 1];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - NAV_OFFSET,
          behavior: "smooth",
        });
      }
      return;
    }

    if (arrowDirection === "up" && activeIndex > 0) {
      const targetId = SECTION_IDS[activeIndex - 1];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - NAV_OFFSET,
          behavior: "smooth",
        });
      }
    }
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
