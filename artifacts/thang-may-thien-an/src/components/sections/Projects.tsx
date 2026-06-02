import { motion } from "framer-motion";
import { Link } from "wouter";
import { PROJECT_POSTS } from "@/data/posts";
import { SectionHeader } from "@/components/ui/section-header";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Công trình tiêu biểu"
          subtitle="Một số dự án thang máy đã triển khai — thi công gọn, vận hành ổn định."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PROJECT_POSTS.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group shadow-md ring-1 ring-black/5"
            >
              <Link href={`/du-an/${project.slug}`}>
                <a className="absolute inset-0">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <div className="text-left">
                      <div className="text-white/75 text-xs">{project.dateLabel}</div>
                      <div className="text-white font-bold leading-snug mt-1 line-clamp-2">
                        {project.title}
                      </div>
                      <div className="text-white/75 text-xs mt-1 line-clamp-2">
                        {project.excerpt}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 text-secondary font-semibold text-sm">
                        Xem dự án <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
