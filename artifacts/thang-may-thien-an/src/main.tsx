import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function hideSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  splash.setAttribute("data-hidden", "true");
  // Remove after fade to avoid blocking clicks in rare cases.
  window.setTimeout(() => splash.remove(), 350);
}

createRoot(document.getElementById("root")!).render(<App />);
hideSplash();
