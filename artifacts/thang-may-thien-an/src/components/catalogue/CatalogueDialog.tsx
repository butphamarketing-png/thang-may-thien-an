import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import catalogueCover from "@assets/image_1780381253460.png";
import { cn } from "@/lib/utils";

export function CatalogueDialog({ className }: { className?: string }) {
  // Pages for the flipbook. Replace these with real catalogue page images later.
  const pages = useMemo(
    () => [catalogueCover, catalogueCover, catalogueCover, catalogueCover],
    [],
  );

  // Spread index (2 pages per spread).
  const spreads = Math.max(1, Math.ceil(pages.length / 2));
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const currentLeft = pages[spreadIndex * 2] ?? pages[0]!;
  const currentRight = pages[spreadIndex * 2 + 1] ?? pages[spreadIndex * 2] ?? pages[0]!;

  const nextLeft = pages[(spreadIndex + 1) * 2] ?? currentLeft;
  const nextRight =
    pages[(spreadIndex + 1) * 2 + 1] ?? pages[(spreadIndex + 1) * 2] ?? currentRight;

  const prevLeft = pages[(spreadIndex - 1) * 2] ?? currentLeft;
  const prevRight =
    pages[(spreadIndex - 1) * 2 + 1] ?? pages[(spreadIndex - 1) * 2] ?? currentRight;

  const canPrev = spreadIndex > 0 && !turning;
  const canNext = spreadIndex < spreads - 1 && !turning;

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
              Trang {spreadIndex * 2 + 1}-{Math.min(spreadIndex * 2 + 2, pages.length)}/{pages.length}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={!canPrev}
                onClick={() => {
                  setDirection("prev");
                  setTurning(true);
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
                  setTurning(true);
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Flipbook view (2-page spread). */}
          <div className="relative rounded-xl overflow-hidden bg-[#070c14]">
            <div className="[perspective:2000px]">
              <div className="relative w-full">
                {/* Under layer (target spread) */}
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative bg-black">
                    <img
                      src={direction === "next" ? nextLeft : prevLeft}
                      alt="Catalogue left page"
                      className="w-full h-[70vh] object-contain bg-black"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/50 to-transparent" />
                  </div>
                  <div className="relative bg-black">
                    <img
                      src={direction === "next" ? nextRight : prevRight}
                      alt="Catalogue right page"
                      className="w-full h-[70vh] object-contain bg-black"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Spine */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/10" />
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-12 -translate-x-1/2 bg-gradient-to-r from-black/55 via-transparent to-black/55 opacity-80" />

                {/* Top layer (current spread) */}
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Left static page */}
                  <div className="relative bg-black">
                    <img
                      src={currentLeft}
                      alt="Catalogue left page"
                      className="w-full h-[70vh] object-contain bg-black"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/50 to-transparent" />
                  </div>

                  {/* Right page turns on next; left page turns on prev */}
                  <div className="relative">
                    {/* Static right page when not turning OR when turning prev */}
                    {(!turning || direction === "prev") && (
                      <div className="relative bg-black">
                        <img
                          src={currentRight}
                          alt="Catalogue right page"
                          className="w-full h-[70vh] object-contain bg-black"
                        />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/50 to-transparent" />
                      </div>
                    )}

                    {/* Turning page (next) */}
                    {turning && direction === "next" ? (
                      <motion.div
                        className="absolute inset-0 bg-black [transform-style:preserve-3d] will-change-transform"
                        style={{ transformOrigin: "left center" }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -180 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        onAnimationComplete={() => {
                          setSpreadIndex((s) => Math.min(spreads - 1, s + 1));
                          setTurning(false);
                        }}
                      >
                        {/* Front */}
                        <div className="absolute inset-0">
                          <img
                            src={currentRight}
                            alt="Turning page"
                            className="w-full h-[70vh] object-contain bg-black"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/70 via-black/10 to-transparent opacity-80" />
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                          <img
                            src={nextLeft}
                            alt="Turning page back"
                            className="w-full h-[70vh] object-contain bg-black"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent opacity-80" />
                        </div>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* Turning page (prev) - flip the left page backwards over to the previous spread */}
                  {turning && direction === "prev" ? (
                    <motion.div
                      className="absolute inset-0 grid grid-cols-2 pointer-events-none"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="relative bg-black [transform-style:preserve-3d] will-change-transform"
                        style={{ transformOrigin: "right center" }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 180 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        onAnimationComplete={() => {
                          setSpreadIndex((s) => Math.max(0, s - 1));
                          setTurning(false);
                        }}
                      >
                        {/* Front */}
                        <div className="absolute inset-0">
                          <img
                            src={currentLeft}
                            alt="Turning page"
                            className="w-full h-[70vh] object-contain bg-black"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent opacity-80" />
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 [transform:rotateY(180deg)]">
                          <img
                            src={prevRight}
                            alt="Turning page back"
                            className="w-full h-[70vh] object-contain bg-black"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/70 via-black/10 to-transparent opacity-80" />
                        </div>
                      </motion.div>
                      <div />
                    </motion.div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

