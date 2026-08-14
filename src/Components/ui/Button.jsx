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
      className={`interactive rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
