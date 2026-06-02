import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/site-images";
import { SectionHeader } from "@/components/ui/section-header";

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Thư viện hình ảnh"
          subtitle={`${GALLERY_IMAGES.length} hình ảnh thang máy — mẫu thi công và thiết kế cabin.`}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 12) * 0.03 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-black/5 group"
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
      </div>
    </div>
  );
}
