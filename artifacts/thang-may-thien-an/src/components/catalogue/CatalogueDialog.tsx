import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import catalogueCover from "@assets/image_1780381253460.png";
import { cn } from "@/lib/utils";

export function CatalogueDialog({ className }: { className?: string }) {
  const pages = useMemo(() => [catalogueCover, catalogueCover, catalogueCover, catalogueCover], []);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const canPrev = pageIndex > 0;
  const canNext = pageIndex < pages.length - 1;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn("border-white/25 text-white hover:bg-white/10 bg-transparent", className)}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Catalogue
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Catalogue</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="text-sm text-muted-foreground">
              Trang {pageIndex + 1}/{pages.length}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={!canPrev}
                onClick={() => {
                  setDirection("prev");
                  setPageIndex((p) => Math.max(0, p - 1));
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={!canNext}
                onClick={() => {
                  setDirection("next");
                  setPageIndex((p) => Math.min(pages.length - 1, p + 1));
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Flipbook view (single page, strong page-turn effect). */}
          <div className="relative rounded-xl overflow-hidden bg-black">
            <div className="[perspective:1400px]">
              <motion.div
                key={`${pageIndex}-${direction}`}
                initial={{
                  rotateY: direction === "next" ? 90 : -90,
                  opacity: 0,
                }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{
                  rotateY: direction === "next" ? -90 : 90,
                  opacity: 0,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-full max-h-[70vh] bg-black [transform-style:preserve-3d] will-change-transform"
                style={{
                  transformOrigin: direction === "next" ? "left center" : "right center",
                }}
              >
                <img
                  src={pages[pageIndex]!}
                  alt={`Catalogue page ${pageIndex + 1}`}
                  className="w-full max-h-[70vh] object-contain bg-black"
                />
                {/* Page shadow */}
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 opacity-70",
                    direction === "next"
                      ? "bg-gradient-to-r from-black/70 via-black/10 to-transparent"
                      : "bg-gradient-to-l from-black/70 via-black/10 to-transparent",
                  )}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

