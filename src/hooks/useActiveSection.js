import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/constants/navigation";

const useActiveSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

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

    if (typeof IntersectionObserver === "undefined") {
      updateActiveSection();
      window.addEventListener("scroll", updateActiveSection, { passive: true });
      window.addEventListener("resize", updateActiveSection);

      return () => {
        window.removeEventListener("scroll", updateActiveSection);
        window.removeEventListener("resize", updateActiveSection);
      };
    }

    const sectionElements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (sectionElements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }

            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          });

        if (visibleEntries.length > 0) {
          const activeEntry = visibleEntries[0];
          const index = Number(activeEntry.target.dataset.sectionIndex);
          setActiveIndex(index);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.75],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sectionElements.forEach((section, index) => {
      section.dataset.sectionIndex = index;
      observer.observe(section);
    });

    updateActiveSection();

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeIndex;
};

export default useActiveSection;
