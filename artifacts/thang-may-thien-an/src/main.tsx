import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const SPLASH_MIN_MS = 3000;
const splashStart = performance.now();

function hideSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  const elapsed = performance.now() - splashStart;
  const remaining = Math.max(0, SPLASH_MIN_MS - elapsed);

  window.setTimeout(() => {
    splash.setAttribute("data-hidden", "true");
    // Remove after fade to avoid blocking clicks.
    window.setTimeout(() => splash.remove(), 350);
  }, remaining);
}

createRoot(document.getElementById("root")!).render(<App />);
hideSplash();
