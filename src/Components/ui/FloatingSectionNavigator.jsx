import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import useArrowVisibility from "@/hooks/useArrowVisibility";
import useFloatingNavigatorState from "@/hooks/useFloatingNavigatorState";

const FloatingSectionNavigator = () => {
  const shouldReduceMotion = useReducedMotion();
  const isVisible = useArrowVisibility();
  const { arrowDirection, positionClassName, ariaLabel, handleNavigate } =
    useFloatingNavigatorState();

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        aria-label={ariaLabel}
        aria-hidden={!isVisible}
        tabIndex={isVisible ? 0 : -1}
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
        className={`z-50 flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none md:h-16 md:w-16 ${isVisible ? "pointer-events-auto" : "pointer-events-none"} ${positionClassName}`}
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
