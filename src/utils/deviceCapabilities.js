export const HOVER_CAPABLE_MEDIA_QUERY = "(hover: hover) and (pointer: fine)";

export const hasHoverCapability = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia(HOVER_CAPABLE_MEDIA_QUERY).matches;
};
