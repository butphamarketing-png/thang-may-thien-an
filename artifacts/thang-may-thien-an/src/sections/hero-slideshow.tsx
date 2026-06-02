import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import catalogueCover from "@assets/image_1780381253460.png";

type Slide = { src: string; alt: string };

export function HeroSlideshow() {
  const slides: Slide[] = useMemo(
    () => [
      { src: catalogueCover, alt: "Thang máy Thiên Ân" },
      { src: catalogueCover, alt: "Giải pháp thang máy" },
      { src: catalogueCover, alt: "Thi công & lắp đặt" },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-[92vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index]?.src + index}
          src={slides[index]!.src}
          alt={slides[index]!.alt}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/45" />
    </section>
  );
}

