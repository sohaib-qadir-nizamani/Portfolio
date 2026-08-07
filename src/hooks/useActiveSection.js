import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/constants/navigation";

const useActiveSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    // Scroll-position calculation is the authoritative source.
    // It correctly handles sections that are taller than the viewport (e.g.
    // Experience) where IntersectionObserver thresholds may never fire because
    // the required visible fraction is never reached inside the clipped root.
    const getCurrentSectionIndex = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let currentIndex = 0;

      SECTION_IDS.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          currentIndex = index;
        }
      });

      if (
        scrollPosition >=
        document.documentElement.scrollHeight - window.innerHeight - 120
      ) {
        currentIndex = SECTION_IDS.length - 1;
      }

      return currentIndex;
    };

    const updateActiveSection = () => {
      setActiveIndex(getCurrentSectionIndex());
    };

    // Always run the scroll-based update on every scroll event.
    // This is the single source of truth for activeIndex, and it handles all
    // section heights reliably without depending on IntersectionObserver
    // thresholds that can silently fail for very tall sections.
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeIndex;
};

export default useActiveSection;
