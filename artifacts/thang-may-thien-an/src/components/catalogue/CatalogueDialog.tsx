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
                onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                disabled={!canNext}
                onClick={() => setPageIndex((p) => Math.min(pages.length - 1, p + 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Simple flipbook-like view (single page). We can evolve to real 2-page spreads later. */}
          <div className="relative rounded-xl overflow-hidden bg-black">
            <motion.img
              key={pageIndex}
              src={pages[pageIndex]!}
              alt={`Catalogue page ${pageIndex + 1}`}
              initial={{ rotateY: 75, opacity: 0.2 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -75, opacity: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-h-[70vh] object-contain bg-black [transform-style:preserve-3d]"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

