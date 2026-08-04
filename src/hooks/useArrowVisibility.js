import { useEffect, useRef, useState } from "react";

const HIDE_DELAY_MS = 500;
const EVENT_THROTTLE_MS = 50;

const useArrowVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const hideTimerRef = useRef(null);
  const lastEventTimeRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const clearHideTimer = () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
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
        hideTimerRef.current = null;
      }, HIDE_DELAY_MS);
    };

    setIsVisible(true);

    window.addEventListener("scroll", showArrow, { passive: true });
    window.addEventListener("wheel", showArrow, { passive: true });
    window.addEventListener("touchmove", showArrow, { passive: true });
    window.addEventListener("mousemove", showArrow, { passive: true });
    window.addEventListener("keydown", showArrow);

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", showArrow);
      window.removeEventListener("wheel", showArrow);
      window.removeEventListener("touchmove", showArrow);
      window.removeEventListener("mousemove", showArrow);
      window.removeEventListener("keydown", showArrow);
    };
  }, []);

  return isVisible;
};

export default useArrowVisibility;
