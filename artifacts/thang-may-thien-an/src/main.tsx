import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const SPLASH_MIN_MS = 2200;

function runSplashProgress() {
  const bar = document.getElementById("splash-progress-bar");
  const splash = document.getElementById("splash");
  if (!bar || !splash) return;

  const start = performance.now();
  let raf = 0;

  const tick = (now: number) => {
    const elapsed = now - start;
    const pct = Math.min(100, (elapsed / SPLASH_MIN_MS) * 100);
    bar.style.width = `${pct}%`;
    splash.setAttribute("aria-valuenow", String(Math.round(pct)));

    if (pct < 100) raf = requestAnimationFrame(tick);
  };

  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

function hideSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;

  const bar = document.getElementById("splash-progress-bar");
  const started = performance.now();
  const minWait = SPLASH_MIN_MS;

  const finish = () => {
    if (bar) bar.style.width = "100%";
    splash.setAttribute("aria-busy", "false");
    splash.setAttribute("aria-valuenow", "100");
    splash.setAttribute("data-hidden", "true");
    window.setTimeout(() => splash.remove(), 450);
  };

  const tryHide = () => {
    const elapsed = performance.now() - started;
    if (elapsed >= minWait) finish();
    else window.setTimeout(finish, minWait - elapsed);
  };

  if (document.readyState === "complete") tryHide();
  else window.addEventListener("load", tryHide, { once: true });
}

runSplashProgress();
createRoot(document.getElementById("root")!).render(<App />);
hideSplash();
