import { useEffect } from "react";

const DEVTOOLS_GAP = 140;

function isFormElement(target: EventTarget | null): boolean {
  if (!target || !(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest(
      "input, textarea, select, [contenteditable='true'], [data-allow-copy], [data-allow-context]",
    ),
  );
}

/**
 * Discourages casual viewing/copying of page source and assets.
 * Cannot fully prevent a determined user (network tab, saved JS files, etc.).
 */
export function useContentProtection(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("content-protected");

    const onContextMenu = (e: MouseEvent) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;
      const alt = e.altKey;

      if (key === "f12") {
        e.preventDefault();
        return;
      }

      // Mac: Cmd+Option+I/J/C
      if (ctrl && alt && (key === "i" || key === "j" || key === "c")) {
        e.preventDefault();
        return;
      }

      if (!ctrl && !shift) return;

      if (shift && key === "f12") {
        e.preventDefault();
        return;
      }

      if (!ctrl) return;

      // Allow search & refresh
      if (key === "k" || key === "r") return;

      const blocked =
        key === "u" || // view source
        key === "s" || // save page
        key === "p" || // print (often used to inspect)
        (shift && (key === "i" || key === "j" || key === "c")); // devtools

      if (blocked) e.preventDefault();
    };

    const onCopy = (e: ClipboardEvent) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
    };

    const onCut = (e: ClipboardEvent) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.tagName === "IMG" || el?.closest("img")) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (isFormElement(e.target)) return;
      e.preventDefault();
    };

    let devtoolsOpen = false;
    const checkDevtools = () => {
      const gapW = window.outerWidth - window.innerWidth;
      const gapH = window.outerHeight - window.innerHeight;
      const open = gapW > DEVTOOLS_GAP || gapH > DEVTOOLS_GAP;
      if (open !== devtoolsOpen) {
        devtoolsOpen = open;
        root.classList.toggle("devtools-detected", open);
      }
    };

    const devtoolsTimer = window.setInterval(checkDevtools, 800);
    checkDevtools();

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("selectstart", onSelectStart);

    return () => {
      root.classList.remove("content-protected", "devtools-detected");
      window.clearInterval(devtoolsTimer);
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("selectstart", onSelectStart);
    };
  }, [enabled]);
}
