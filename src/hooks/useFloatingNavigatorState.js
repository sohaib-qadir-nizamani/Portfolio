import { useState, useEffect } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import useFooterState from "@/hooks/useFooterState";
import useScrollDirection from "@/hooks/useScrollDirection";
import useSectionNavigation from "@/hooks/useSectionNavigation";
import { SECTION_IDS } from "@/constants/navigation";

// Single position class used in all states.
// The button must always be `fixed` so it stays in the viewport and remains
// clickable regardless of scroll position. Using `absolute` while rendered
// inside <main> would place it at the top of the document when footer-active —
// completely off-screen when the user is at the bottom of the page.
const POSITION_CLASS = "fixed bottom-6 left-1/2 -translate-x-1/2";

const useFloatingNavigatorState = () => {
  const activeIndex = useActiveSection();
  const scrollDirection = useScrollDirection();
  const footerState = useFooterState();
  const { goHero, goNext, goPrevious } = useSectionNavigation();
  const [isMobileViewport, setIsMobileViewport] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  // Derived boolean — single source of truth for the footer-active condition.
  const isFooterActive = footerState === "active";

  // Update mobile viewport state on window resize
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Arrow direction priority:
  //   1. Footer active  → always UP  (ignore scroll-direction noise)
  //   2. Mobile viewport (< 768px) → follow scroll direction (including in Hero)
  //   3. Hero active (desktop) → always DOWN
  //   4. Otherwise      → follow scroll direction
  const isHeroActive = activeIndex === 0;
  const arrowDirection = isFooterActive
    ? "up"
    : isMobileViewport
      ? scrollDirection === "down" ? "down" : "up"
      : isHeroActive
        ? "down"
        : scrollDirection === "down"
          ? "down"
          : "up";

  const handleNavigate = (event) => {
    event.preventDefault();

    if (isFooterActive) {
      goHero();
      return;
    }

    if (arrowDirection === "down") {
      if (activeIndex === SECTION_IDS.length - 1) {
        const footerEl = document.querySelector("footer");
        if (footerEl) {
          footerEl.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
      goNext(activeIndex);
      return;
    }

    goPrevious(activeIndex);
  };

  const ariaLabel = isFooterActive
    ? "Scroll to the top of the page"
    : arrowDirection === "up"
      ? "Scroll to the previous section"
      : "Scroll to the next section";

  return {
    arrowDirection,
    positionClassName: POSITION_CLASS,
    ariaLabel,
    handleNavigate,
    isFooterActive,
  };
};

export default useFloatingNavigatorState;
