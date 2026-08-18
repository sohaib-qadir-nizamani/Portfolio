import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import navigation from "@/constants/navigation";

function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      return;
    }

    // Prevent visual layout shift by compensating for scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        inert={!isOpen ? "" : undefined}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        inert={!isOpen ? "" : undefined}
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-xs overflow-y-auto border-l border-slate-800 bg-slate-950/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">Menu</h2>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none active:bg-slate-800 active:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>,
    document.body,
  );
}

export default MobileMenu;
