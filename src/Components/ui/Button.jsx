// src/components/ui/Button.jsx
// eslint-disable-next-line
import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`interactive rounded-xl bg-blue-600 px-4 py-2 font-medium text-white shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-blue-300 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
