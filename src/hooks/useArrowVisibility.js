import { useEffect, useRef, useState, useCallback } from "react";

const HIDE_DELAY_MS = 500;
const EVENT_THROTTLE_MS = 50;

const useArrowVisibility = (isFooterActive = false) => {
  const [isVisible, setIsVisible] = useState(true);
  const [, setIsHovered] = useState(false);
  const hideTimerRef = useRef(null);
  const lastEventTimeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const buttonRef = useRef(null);
  const mouseCoordsRef = useRef({ x: 0, y: 0 });
  // Ref so event-handler closures always read the latest value without
  // needing to be re-created when isFooterActive changes.
  const isFooterActiveRef = useRef(isFooterActive);

  // Sync prop → ref and drive visibility whenever footer-active state changes.
  useEffect(() => {
    isFooterActiveRef.current = isFooterActive;

    if (isFooterActive) {
      // Footer just became active — cancel any pending hide timer, stay visible.
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setIsVisible(true);
    } else {
      // Footer no longer active — re-arm the normal hide timer if not hovered.
      if (!isHoveredRef.current && hideTimerRef.current === null) {
        hideTimerRef.current = window.setTimeout(() => {
          setIsVisible(false);
          hideTimerRef.current = null;
        }, HIDE_DELAY_MS);
      }
    }
  }, [isFooterActive]);

  const checkHoverState = useCallback(() => {
    if (!buttonRef.current) return false;
    const rect = buttonRef.current.getBoundingClientRect();
    const { x, y } = mouseCoordsRef.current;
    return (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    );
  }, []);

  const handleHoverChange = useCallback((hovered) => {
    setIsHovered(hovered);
    isHoveredRef.current = hovered;
    if (hovered) {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setIsVisible(true);
    } else {
      // Only arm the hide timer when not in footer-active state.
      if (hideTimerRef.current === null && !isFooterActiveRef.current) {
        hideTimerRef.current = window.setTimeout(() => {
          setIsVisible(false);
          hideTimerRef.current = null;
        }, HIDE_DELAY_MS);
      }
    }
  }, []);

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

      const currentlyHovered = isHoveredRef.current || checkHoverState();
      if (currentlyHovered && !isHoveredRef.current) {
        isHoveredRef.current = true;
        setIsHovered(true);
      }

      // Do not arm the hide timer while footer is active or pointer is hovering.
      if (!isHoveredRef.current && !isFooterActiveRef.current) {
        hideTimerRef.current = window.setTimeout(() => {
          setIsVisible(false);
          hideTimerRef.current = null;
        }, HIDE_DELAY_MS);
      }
    };

    const handleMouseMove = (e) => {
      mouseCoordsRef.current = { x: e.clientX, y: e.clientY };
      showArrow();
    };

    let scrollTimeout;
    const handleScroll = () => {
      showArrow();
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        const currentlyHovered = checkHoverState();
        if (currentlyHovered) {
          isHoveredRef.current = true;
          setIsHovered(true);
          setIsVisible(true);
          clearHideTimer();
        } else {
          if (isHoveredRef.current) {
            isHoveredRef.current = false;
            setIsHovered(false);
          }
          // Do not arm hide timer while footer is active.
          if (hideTimerRef.current === null && !isFooterActiveRef.current) {
            hideTimerRef.current = window.setTimeout(() => {
              setIsVisible(false);
              hideTimerRef.current = null;
            }, HIDE_DELAY_MS);
          }
        }
      }, 100);
    };

    setIsVisible(true);
    // Do not arm the initial mount timer while footer is already active.
    if (!isHoveredRef.current && !isFooterActiveRef.current) {
      hideTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);
        hideTimerRef.current = null;
      }, HIDE_DELAY_MS);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", showArrow, { passive: true });
    window.addEventListener("touchstart", showArrow, { passive: true });
    window.addEventListener("touchmove", showArrow, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", showArrow, { passive: true });
    window.addEventListener("click", showArrow, { passive: true });
    window.addEventListener("keydown", showArrow);

    return () => {
      clearHideTimer();
      window.clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", showArrow);
      window.removeEventListener("touchstart", showArrow);
      window.removeEventListener("touchmove", showArrow);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", showArrow);
      window.removeEventListener("click", showArrow);
      window.removeEventListener("keydown", showArrow);
    };
  }, [checkHoverState]);

  return [isVisible, handleHoverChange, buttonRef];
};

export default useArrowVisibility;
