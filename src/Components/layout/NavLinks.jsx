import { useState } from "react";
import navigation from "@/constants/navigation";
import useActiveSection from "@/hooks/useActiveSection";
import { SECTION_IDS } from "@/constants/navigation";

// SVG components to use as indicators for navigation states.
const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const PreviousIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
);

const CurrentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const INDICATORS = {
  previous: PreviousIcon,
  current: CurrentIcon,
  next: NextIcon,
};

function NavLinks() {
  const activeIndex = useActiveSection();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navigation.map((item) => {
        const itemIndex = SECTION_IDS.indexOf(item.id);
        const relation =
          itemIndex < activeIndex
            ? "previous"
            : itemIndex > activeIndex
              ? "next"
              : "current";

        const isHovered = hoveredId === item.id;
        const IndicatorComponent = INDICATORS[relation];

        return (
          <a
            key={item.label}
            href={`#${item.id}`}
            className="group relative inline-flex items-center gap-0 rounded-md px-2 py-1 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none active:text-white"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setHoveredId(item.id)}
            onBlur={() => setHoveredId(null)}
          >
            {item.label}
            {/* Directional indicator SVG — visible only while the tab is hovered */}
            <span
              className={`inline-flex items-center justify-center transition-opacity duration-150 ${
                isHovered ? "opacity-100" : "opacity-0"
              } ${relation === "current" ? "text-blue-400" : "text-slate-400"}`}
            >
              <IndicatorComponent />
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default NavLinks;
