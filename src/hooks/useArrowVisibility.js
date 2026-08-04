import { useEffect, useRef, useState } from "react";

const HIDE_DELAY_MS = 500;
const EVENT_THROTTLE_MS = 50;

const useArrowVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimerRef = useRef(null);
  const lastEventTimeRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };

    const showArrow = () => {
      const now = Date.now();
      if (now - lastEventTimeRef.current < EVENT_THROTTLE_MS) {
        return;
      }

      lastEventTimeRef.current = now;
      clearHideTimer();
      setIsVisible(true);

      hideTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, HIDE_DELAY_MS);
    };

    const handleScroll = () => {
      showArrow();
    };

    showArrow();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", showArrow, { passive: true });
    window.addEventListener("touchmove", showArrow, { passive: true });
    window.addEventListener("mousemove", showArrow, { passive: true });
    window.addEventListener("keydown", showArrow);

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", showArrow);
      window.removeEventListener("touchmove", showArrow);
      window.removeEventListener("mousemove", showArrow);
      window.removeEventListener("keydown", showArrow);
    };
  }, []);

  return isVisible;
};

export default useArrowVisibility;
