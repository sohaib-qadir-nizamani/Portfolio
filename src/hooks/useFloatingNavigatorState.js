import useActiveSection from "@/hooks/useActiveSection";
import useFooterState from "@/hooks/useFooterState";
import useScrollDirection from "@/hooks/useScrollDirection";
import useSectionNavigation from "@/hooks/useSectionNavigation";

const POSITION_CLASSES = {
  floating: "fixed bottom-6 left-1/2 -translate-x-1/2",
  "footer-active": "absolute top-0 left-1/2 -translate-x-1/2",
};

const useFloatingNavigatorState = () => {
  const activeIndex = useActiveSection();
  const scrollDirection = useScrollDirection();
  const footerState = useFooterState();
  const { goHero, goNext, goPrevious } = useSectionNavigation();

  const footerVisible = footerState === "visible" || footerState === "active";
  const isHeroActive = activeIndex === 0;
  const arrowDirection = footerState === "active"
    ? "up"
    : footerVisible
      ? "up"
      : isHeroActive
        ? "down"
        : scrollDirection === "down"
          ? "down"
          : "up";

  const handleNavigate = (event) => {
    event.preventDefault();

    if (footerVisible && arrowDirection === "up") {
      goHero();
      return;
    }

    if (arrowDirection === "down") {
      goNext(activeIndex);
      return;
    }

    goPrevious(activeIndex);
  };

  const ariaLabel =
    footerState === "active"
      ? "Scroll to the top of the page"
      : arrowDirection === "up"
        ? "Scroll to the previous section"
        : "Scroll to the next section";

  const positionClassName =
    footerState === "active"
      ? POSITION_CLASSES["footer-active"]
      : POSITION_CLASSES.floating;

  return {
    arrowDirection,
    positionClassName,
    ariaLabel,
    handleNavigate,
  };
};

export default useFloatingNavigatorState;
