import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

const HIDE_DELAY_MS = 1500;

const useHeaderVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const scrollDirectionRef = useRef("down");
  const lastScrollTopRef = useRef(0);
  const scrollTimeoutRef = useRef(null);
  const mouseLeaveTimeoutRef = useRef(null);
  const heroElementRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Check if Hero section is visible in viewport
  const isHeroVisible = useCallback(() => {
    if (!heroElementRef.current) return true;

    const rect = heroElementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Hero is visible if its top is above the viewport bottom
    // and its bottom is below the viewport top
    return rect.top < windowHeight * 0.5 && rect.bottom > 0;
  }, []);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    const currentScrollTop = window.scrollY;
    const direction = currentScrollTop > lastScrollTopRef.current ? "down" : "up";
    lastScrollTopRef.current = currentScrollTop;
    scrollDirectionRef.current = direction;

    const heroVisible = isHeroVisible();

    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }

    // Priority 1: Hero visible → Header MUST be visible
    if (heroVisible) {
      setIsVisible(true);
      return;
    }

    // Priority 2: Header hovered → Header MUST be visible
    if (isHovered) {
      setIsVisible(true);
      return;
    }

    // Outside Hero - handle based on scroll direction
    if (direction === "up") {
      // Priority 3: Outside Hero + scrolling up → Header visible
      setIsVisible(true);
    } else {
      // Priority 4: Outside Hero + scrolling down → Hide immediately
      setIsVisible(false);
    }

    // Set timeout for when scrolling stops (outside Hero)
    // When scrolling stops, hide the header after 1500ms delay
    // Only hide if not hovered
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!isHeroVisible() && !isHovered) {
        setIsVisible(false);
      }
    }, HIDE_DELAY_MS);
  }, [isHeroVisible, isHovered]);

  // Handle mouse leave timer
  useEffect(() => {
    // When mouse leaves the header (isHovered becomes false)
    if (!isHovered) {
      // Clear any existing mouse leave timeout
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
      }

      // Start new 1500ms timeout to hide header
      mouseLeaveTimeoutRef.current = window.setTimeout(() => {
        if (!isHeroVisible()) {
          setIsVisible(false);
        }
      }, HIDE_DELAY_MS);
    } else {
      // When mouse enters header, clear any pending hide timeout
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
        mouseLeaveTimeoutRef.current = null;
      }
    }

    // Cleanup function to clear timeout when component unmounts or isHovered changes
    return () => {
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
        mouseLeaveTimeoutRef.current = null;
      }
    };
  }, [isHovered, isHeroVisible]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Get Hero element
    heroElementRef.current = document.getElementById("home");

    // Initial check
    lastScrollTopRef.current = window.scrollY;

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (mouseLeaveTimeoutRef.current) {
        clearTimeout(mouseLeaveTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Animation variants for smooth hide/show
  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return {
    isVisible,
    variants,
    shouldReduceMotion,
    isHovered,
    setIsHovered,
  };
};

export default useHeaderVisibility;