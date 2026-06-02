import { useState } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  aspect?: string;
};

export function LazyImage({ className, aspect, alt = "", ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspect, className)}>
      {!loaded && !failed ? (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-primary/10 via-muted to-primary/5"
          aria-hidden
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      ) : null}
      {failed ? (
        <div className="absolute inset-0 grid place-items-center bg-primary/5 text-muted-foreground text-xs p-4 text-center">
          Không tải được ảnh
        </div>
      ) : (
        <img
          {...props}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}
