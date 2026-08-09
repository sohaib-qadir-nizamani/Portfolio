import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import useHeaderVisibility from "@/hooks/useHeaderVisibility";
import { hasHoverCapability } from "@/utils/deviceCapabilities";

function Header() {
  const { isVisible, variants, shouldReduceMotion, isHovered, setIsHovered } =
    useHeaderVisibility();

  const handleMouseEnter = () => {
    if (hasHoverCapability()) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasHoverCapability()) {
      setIsHovered(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.header
        key="header"
        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : variants.visible}
        animate={
          shouldReduceMotion
            ? { y: 0, opacity: 1 }
            : isVisible
              ? variants.visible
              : variants.hidden
        }
        exit={shouldReduceMotion ? { y: 0, opacity: 0 } : variants.hidden}
        className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md supports-backdrop-filter:bg-slate-950/70"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Navbar />
      </motion.header>
    </AnimatePresence>
  );
}

export default Header;
