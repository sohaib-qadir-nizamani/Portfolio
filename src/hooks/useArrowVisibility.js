import { useCallback, useEffect, useRef, useState } from "react";

const HIDE_DELAY_MS = 500;
const EVENT_THROTTLE_MS = 50;

const isMobileMenuOpen = () => {
  if (typeof document === "undefined") return false;

  const menuDialog = document.querySelector('aside[role="dialog"]');

  return Boolean(
    menuDialog && menuDialog.classList.contains("translate-x-0"),
  );
};

const useArrowVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [, setIsHovered] = useState(false);

  const buttonRef = useRef(null);

  const hideTimerRef = useRef(null);
  const lastEventTimeRef = useRef(0);

  const isHoveredRef = useRef(false);
  const isTouchActiveRef = useRef(false);
  const isVisibleRef = useRef(true);
  const pendingRevealOnlyClickRef = useRef(false);
  const lastVisibleArrowRectRef = useRef(null);

  const mouseCoordsRef = useRef({
    x: 0,
    y: 0,
  });

  const updateVisibilityState = useCallback((nextVisible) => {
    isVisibleRef.current = nextVisible;
    setIsVisible(nextVisible);

    if (nextVisible && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      lastVisibleArrowRectRef.current = {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
      };
    }
  }, []);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const consumePendingRevealOnlyClick = useCallback(() => {
    const wasPending = pendingRevealOnlyClickRef.current;
    pendingRevealOnlyClickRef.current = false;
    return wasPending;
  }, []);

  const getFormerArrowRect = useCallback(() => {
    if (!lastVisibleArrowRectRef.current) {
      return null;
    }

    return lastVisibleArrowRectRef.current;
  }, []);

  const hideAfterDelay = useCallback(() => {
    clearHideTimer();

    hideTimerRef.current = window.setTimeout(() => {
      /*
       * Never hide while the user is actively interacting
       * with the arrow.
       */
      if (isHoveredRef.current || isTouchActiveRef.current) {
        hideTimerRef.current = null;
        return;
      }

      updateVisibilityState(false);
      hideTimerRef.current = null;
    }, HIDE_DELAY_MS);
  }, [clearHideTimer, updateVisibilityState]);

  const isPointerOverArrow = useCallback(() => {
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

  /*
   * Show the arrow because of an actual user interaction.
   *
   * This function intentionally does NOT create a hide timer when
   * a touch interaction is active or the pointer is hovering.
   */
  const showArrow = useCallback(() => {
    if (isMobileMenuOpen()) {
      clearHideTimer();
      setIsVisible(false);
      return;
    }

    const now = Date.now();

    if (now - lastEventTimeRef.current < EVENT_THROTTLE_MS) {
      return;
    }

    lastEventTimeRef.current = now;

    clearHideTimer();
    updateVisibilityState(true);

    if (isHoveredRef.current || isTouchActiveRef.current) {
      return;
    }

    /*
     * For mouse movement outside the arrow, begin the normal
     * visibility countdown.
     */
    hideAfterDelay();
  }, [clearHideTimer, hideAfterDelay]);

  /*
   * Mouse hover is controlled directly by FloatingSectionNavigator.
   */
  const handleHoverChange = useCallback(
    (hovered) => {
      isHoveredRef.current = hovered;
      setIsHovered(hovered);

      if (hovered) {
        clearHideTimer();
        updateVisibilityState(true);
        return;
      }

      /*
       * Once the pointer leaves the arrow, allow the normal
       * hide countdown to begin.
       */
      if (!isTouchActiveRef.current) {
        hideAfterDelay();
      }
    },
    [clearHideTimer, hideAfterDelay, updateVisibilityState],
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mouseCoordsRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      /*
       * If the pointer is currently over the arrow, keep it visible.
       */
      if (isPointerOverArrow() || isHoveredRef.current) {
        clearHideTimer();
        updateVisibilityState(true);
        return;
      }

      showArrow();
    };

    const handleTouchStart = (event) => {
      const point = event?.changedTouches?.[0] ?? event;

      if (
        !isVisibleRef.current &&
        point &&
        typeof point.clientX === "number" &&
        typeof point.clientY === "number"
      ) {
        const formerArrowRect = getFormerArrowRect();
        if (
          formerArrowRect &&
          point.clientX >= formerArrowRect.left &&
          point.clientX <= formerArrowRect.right &&
          point.clientY >= formerArrowRect.top &&
          point.clientY <= formerArrowRect.bottom
        ) {
          pendingRevealOnlyClickRef.current = true;
        }
      }

      isVisibleRef.current = true;
      isTouchActiveRef.current = true;

      clearHideTimer();
      updateVisibilityState(true);
    };

    const handleTouchMove = () => {
      /*
       * A touch/drag is still active, therefore the arrow must
       * remain visible.
       */
      isTouchActiveRef.current = true;

      clearHideTimer();
      updateVisibilityState(true);
    };

    const handleTouchEnd = () => {
      /*
       * This is the critical Bug-3 transition:
       *
       * active touch
       *      ↓
       * touch released
       *      ↓
       * touch is no longer active
       *      ↓
       * start the normal hide countdown
       */
      isTouchActiveRef.current = false;

      if (isHoveredRef.current) {
        return;
      }

      hideAfterDelay();
    };

    const handleTouchCancel = () => {
      isTouchActiveRef.current = false;

      if (isHoveredRef.current) {
        return;
      }

      hideAfterDelay();
    };

    const handleScroll = () => {
      /*
       * Scrolling is still treated as user activity, but it must
       * not override an active touch state.
       */
      if (isTouchActiveRef.current) {
        clearHideTimer();
        setIsVisible(true);
        return;
      }

      showArrow();
    };

    const handleWheel = () => {
      showArrow();
    };

    const handleMouseDown = (event) => {
      const point = event ?? null;

      if (
        !isVisibleRef.current &&
        point &&
        typeof point.clientX === "number" &&
        typeof point.clientY === "number"
      ) {
        const formerArrowRect = getFormerArrowRect();
        if (
          formerArrowRect &&
          point.clientX >= formerArrowRect.left &&
          point.clientX <= formerArrowRect.right &&
          point.clientY >= formerArrowRect.top &&
          point.clientY <= formerArrowRect.bottom
        ) {
          pendingRevealOnlyClickRef.current = true;
        }
      }

      showArrow();
    };

    const handleKeyDown = () => {
      showArrow();
    };

    /*
     * Intentionally do NOT use a global click handler to control
     * arrow visibility.
     *
     * A click can be generated after a touch interaction and could
     * otherwise immediately make the arrow visible again after
     * touchend. This is one of the causes of the Bug-3 lifecycle
     * problem.
     */

    /*
     * Start with the normal hidden state after the initial delay.
     */
    hideAfterDelay();

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    window.addEventListener("touchcancel", handleTouchCancel, {
      passive: true,
    });

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    window.addEventListener("mousedown", handleMouseDown, {
      passive: true,
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearHideTimer();

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchCancel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    clearHideTimer,
    getFormerArrowRect,
    hideAfterDelay,
    isPointerOverArrow,
    showArrow,
    updateVisibilityState,
  ]);

  return [isVisible, handleHoverChange, buttonRef, consumePendingRevealOnlyClick];
};

export default useArrowVisibility;

