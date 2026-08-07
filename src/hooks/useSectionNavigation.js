import { SECTION_IDS } from "@/constants/navigation";

const getNavOffset = () => {
  if (typeof window === "undefined") return 96;
  return window.innerWidth <= 767 ? 64 : 96;
};

const useSectionNavigation = () => {
  const goHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getScrollTop = (element) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  };

  const goNext = (activeIndex) => {
    if (activeIndex < SECTION_IDS.length - 1) {
      const targetId = SECTION_IDS[activeIndex + 1];
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const navOffset = getNavOffset();
        window.scrollTo({
          top: getScrollTop(targetEl) - navOffset,
          behavior: "smooth",
        });
      }
    }
  };

  const goPrevious = (activeIndex) => {
    if (activeIndex > 0) {
      const targetId = SECTION_IDS[activeIndex - 1];
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const navOffset = getNavOffset();
        window.scrollTo({
          top: getScrollTop(targetEl) - navOffset,
          behavior: "smooth",
        });
      }
    }
  };

  return {
    goNext,
    goPrevious,
    goHero,
  };
};

export default useSectionNavigation;
