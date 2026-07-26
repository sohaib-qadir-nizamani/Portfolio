import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import navigation from "@/constants/navigation";

function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  // Lock body scroll and focus the close button when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Delay focus slightly to ensure the transition doesn't interfere
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ease-in-out md:hidden ${
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
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-slate-900 border-l border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-white">Menu</h2>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default MobileMenu;
