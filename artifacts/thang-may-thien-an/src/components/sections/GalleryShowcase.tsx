import { motion } from "framer-motion";
import { Link } from "wouter";
import { GALLERY_IMAGES } from "@/data/site-images";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const PREVIEW_COUNT = 8;

export function GalleryShowcase() {
  const preview = GALLERY_IMAGES.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Thư viện hình ảnh"
          subtitle="Một số mẫu thang máy đã thi công — xem thêm tại trang thư viện đầy đủ."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {preview.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-black/5 group"
            >
              <img
                src={src}
                alt={`Thang máy Thiên Ân ${idx + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/hinh-anh">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-10"
            >
              Xem tất cả
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
