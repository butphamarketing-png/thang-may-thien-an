import { useEffect } from "react";

/**
 * Discourages casual copying / devtools on the public site.
 * Note: browser-delivered assets cannot be fully hidden from determined users.
 */
export function useContentProtection(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [data-allow-context]")) return;
      e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;

      if (key === "f12") {
        e.preventDefault();
        return;
      }

      if (!ctrl) return;

      // Allow search (Ctrl+K) and refresh
      if (key === "k" || key === "r") return;

      const blocked =
        key === "u" ||
        key === "s" ||
        (shift && (key === "i" || key === "j" || key === "c"));

      if (blocked) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, [enabled]);
}
