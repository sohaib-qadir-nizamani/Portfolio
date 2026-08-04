import { useEffect, useState } from "react";

const useFooterState = () => {
  const [footerState, setFooterState] = useState("hidden");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const footerEl = document.querySelector("footer");

    if (!footerEl) {
      setFooterState("hidden");
      return undefined;
    }

    const updateFooterState = () => {
      const footerRect = footerEl.getBoundingClientRect();
      const footerHeight = footerRect.height || 0;

      if (footerHeight === 0) {
        setFooterState("hidden");
        return;
      }

      const footerVisible = footerRect.top <= window.innerHeight * 0.2;
      const footerVisibleRatio =
        footerHeight > 0 ? (footerRect.bottom / footerHeight) : 0;

      if (!footerVisible) {
        setFooterState("hidden");
        return;
      }

      if (footerVisibleRatio >= 1 - 0.8) {
        setFooterState("active");
      } else {
        setFooterState("visible");
      }
    };

    updateFooterState();

    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", updateFooterState, { passive: true });
      window.addEventListener("resize", updateFooterState);

      return () => {
        window.removeEventListener("scroll", updateFooterState);
        window.removeEventListener("resize", updateFooterState);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) {
          setFooterState("hidden");
          return;
        }

        const footerVisibleRatio = entry.intersectionRatio;

        if (entry.isIntersecting && footerVisibleRatio >= 0.8) {
          setFooterState("active");
        } else if (entry.isIntersecting) {
          setFooterState("visible");
        } else {
          setFooterState("hidden");
        }
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    observer.observe(footerEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return footerState;
};

export default useFooterState;
