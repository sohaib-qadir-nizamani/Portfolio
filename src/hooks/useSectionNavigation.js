import { SECTION_IDS } from "@/constants/navigation";

const NAV_OFFSET = 96;

const useSectionNavigation = () => {
  const goHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = (activeIndex) => {
    if (activeIndex < SECTION_IDS.length - 1) {
      const targetId = SECTION_IDS[activeIndex + 1];
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - NAV_OFFSET,
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
        window.scrollTo({
          top: targetEl.offsetTop - NAV_OFFSET,
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
