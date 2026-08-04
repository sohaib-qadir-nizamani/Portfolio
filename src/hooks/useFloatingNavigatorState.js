import { useEffect, useMemo, useState } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import useFooterState from "@/hooks/useFooterState";
import useScrollDirection from "@/hooks/useScrollDirection";
import useSectionNavigation from "@/hooks/useSectionNavigation";

const DEFAULT_POSITION_STYLE = {
  position: "fixed",
  bottom: "1.5rem",
  left: "50%",
  transform: "translateX(-50%)",
};

const useFloatingNavigatorState = () => {
  const activeIndex = useActiveSection();
  const scrollDirection = useScrollDirection();
  const footerState = useFooterState();
  const { goHero, goNext, goPrevious } = useSectionNavigation();
  const [arrowDirection, setArrowDirection] = useState("down");
  const [positionStyle, setPositionStyle] = useState(DEFAULT_POSITION_STYLE);

  useEffect(() => {
    const footerVisible = footerState === "visible" || footerState === "active";
    const footerAtLeastEightyVisible = footerState === "active";

    const nextStyle = footerVisible
      ? {
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
      }
      : DEFAULT_POSITION_STYLE;

    const resolvedDirection = footerAtLeastEightyVisible
      ? "up"
      : footerVisible
        ? "up"
        : scrollDirection === "down"
          ? "down"
          : "up";

    setArrowDirection(resolvedDirection);
    setPositionStyle(nextStyle);
  }, [footerState, scrollDirection]);

  const handleNavigate = (event) => {
    event.preventDefault();

    if (footerState === "active" && arrowDirection === "up") {
      goHero();
      return;
    }

    if (arrowDirection === "down") {
      goNext(activeIndex);
      return;
    }

    goPrevious(activeIndex);
  };

  const ariaLabel = useMemo(() => {
    if (footerState === "active") {
      return "Scroll to the top of the page";
    }

    return arrowDirection === "up"
      ? "Scroll to the previous section"
      : "Scroll to the next section";
  }, [arrowDirection, footerState]);

  return {
    arrowDirection,
    positionStyle,
    ariaLabel,
    handleNavigate,
  };
};

export default useFloatingNavigatorState;
