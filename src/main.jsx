import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// src/main.jsx (Place at the top before ReactDOM.createRoot)
if (typeof window !== "undefined") {
  document.addEventListener("touchstart", () => {}, { passive: true });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
