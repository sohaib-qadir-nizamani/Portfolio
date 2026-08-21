import { useEffect, useState } from "react";

const useFooterState = () => {
  const [footerState, setFooterState] = useState("hidden");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const footerEl = document.querySelector("footer");
    if (!footerEl) {
      // The state is already initialized to "hidden", so we can just return early
      // without calling setFooterState("hidden") synchronously.
      return undefined;
    }
    const updateFooterState = () => {
      const footerRect = footerEl.getBoundingClientRect();
      const footerHeight = footerRect.height || 0;
      if (footerHeight === 0) {
        setFooterState("hidden");
        return;
      }
      const isIntersecting =
        footerRect.top < window.innerHeight && footerRect.bottom > 0;
      const isFullyVisible =
        footerRect.top >= 0 && footerRect.bottom <= window.innerHeight;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;
      if (isIntersecting) {
        if (isFullyVisible || isAtBottom) {
          setFooterState("active");
        } else {
          setFooterState("visible");
        }
      } else {
        setFooterState("hidden");
      }
    };
    // Defer the initial run until the next event loop tick to avoid warning
    const timeoutId = setTimeout(updateFooterState, 0);
    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", updateFooterState, { passive: true });
      window.addEventListener("resize", updateFooterState);
      return () => {
        clearTimeout(timeoutId);
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
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10;
        if (entry.isIntersecting && (footerVisibleRatio >= 0.8 || isAtBottom)) {
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
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return undefined;
  //   }

  //   const footerEl = document.querySelector("footer");

  //   if (!footerEl) {
  //     setFooterState("hidden");
  //     return undefined;
  //   }

  //   const updateFooterState = () => {
  //     const footerRect = footerEl.getBoundingClientRect();
  //     const footerHeight = footerRect.height || 0;

  //     if (footerHeight === 0) {
  //       setFooterState("hidden");
  //       return;
  //     }

  //     const isIntersecting = footerRect.top < window.innerHeight && footerRect.bottom > 0;
  //     const isFullyVisible = footerRect.top >= 0 && footerRect.bottom <= window.innerHeight;
  //     const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

  //     if (isIntersecting) {
  //       if (isFullyVisible || isAtBottom) {
  //         setFooterState("active");
  //       } else {
  //         setFooterState("visible");
  //       }
  //     } else {
  //       setFooterState("hidden");
  //     }
  //   };

  //   updateFooterState();

  //   if (typeof IntersectionObserver === "undefined") {
  //     window.addEventListener("scroll", updateFooterState, { passive: true });
  //     window.addEventListener("resize", updateFooterState);

  //     return () => {
  //       window.removeEventListener("scroll", updateFooterState);
  //       window.removeEventListener("resize", updateFooterState);
  //     };
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (!entry) {
  //         setFooterState("hidden");
  //         return;
  //       }

  //       const footerVisibleRatio = entry.intersectionRatio;
  //       const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

  //       if (entry.isIntersecting && (footerVisibleRatio >= 0.8 || isAtBottom)) {
  //         setFooterState("active");
  //       } else if (entry.isIntersecting) {
  //         setFooterState("visible");
  //       } else {
  //         setFooterState("hidden");
  //       }
  //     },
  //     {
  //       threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  //     },
  //   );

  //   observer.observe(footerEl);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return footerState;
};

export default useFooterState;
