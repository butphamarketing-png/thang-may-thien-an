import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/site-images";

export function HeroSlideshow() {
  const slides = useMemo(
    () =>
      GALLERY_IMAGES.map((src, i) => ({
        src,
        alt: `Thang máy Thiên Ân ${i + 1}`,
      })),
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-[92vh] md:h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index]?.src + index}
          src={slides[index]!.src}
          alt={slides[index]!.alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
