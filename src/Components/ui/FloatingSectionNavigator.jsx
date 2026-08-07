import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import useArrowVisibility from "@/hooks/useArrowVisibility";
import useFloatingNavigatorState from "@/hooks/useFloatingNavigatorState";

const FloatingSectionNavigator = () => {
  const shouldReduceMotion = useReducedMotion();
  const { arrowDirection, positionClassName, ariaLabel, handleNavigate, isFooterActive } =
    useFloatingNavigatorState();
  // Pass isFooterActive so the visibility hook suppresses its hide timer
  // while the footer is fully in view.
  const [isVisible, setIsHovered, buttonRef] = useArrowVisibility(isFooterActive);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          key="floating-navigator"
          type="button"
          aria-label={ariaLabel}
          onClick={handleNavigate}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 16, scale: 0.95 }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 16, scale: 0.95 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.25, ease: "easeOut" }
          }
          className={`z-50 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur transition-colors duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none md:h-16 md:w-16 ${positionClassName}`}
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
      )}
    </AnimatePresence>
  );
};

export default FloatingSectionNavigator;
