import { useEffect, useRef, useState, useCallback } from "react";

const HIDE_DELAY_MS = 500;
const EVENT_THROTTLE_MS = 50;

const isMobileMenuOpen = () => {
  if (typeof document === "undefined") return false;
  const menuDialog = document.querySelector('aside[role="dialog"]');
  if (!menuDialog) return false;
  // Check if the menu is actually open (has translate-x-0 class)
  // When closed, it has translate-x-full (off-screen to the right)
  return menuDialog.classList.contains('translate-x-0');
};

const useArrowVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [, setIsHovered] = useState(false);
  const hideTimerRef = useRef(null);
  const lastEventTimeRef = useRef(0);
  const isHoveredRef = useRef(false);
  const buttonRef = useRef(null);
  const mouseCoordsRef = useRef({ x: 0, y: 0 });

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
      // Arm the standard hide timer whenever the pointer isn't hovering.
      if (hideTimerRef.current === null) {
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
      // Suppress visibility when mobile hamburger menu is open.
      if (isMobileMenuOpen()) {
        setIsVisible(false);
        return;
      }

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

      // For mobile/touch interactions, always set a hide timer
      // For desktop hover interactions, keep visible while hovering
      const isMobileViewport = window.innerWidth < 768;
      if (isMobileViewport || !isHoveredRef.current) {
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
          if (hideTimerRef.current === null) {
            hideTimerRef.current = window.setTimeout(() => {
              setIsVisible(false);
              hideTimerRef.current = null;
            }, HIDE_DELAY_MS);
          }
        }
      }, 100);
    };

    if (!isHoveredRef.current) {
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
