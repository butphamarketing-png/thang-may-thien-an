import { motion } from "framer-motion";
import { Wrench, Settings, ArrowUpCircle } from "lucide-react";
import { Link } from "wouter";
import { SERVICE_POSTS } from "@/data/posts";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    slug: "quy-trinh-lap-dat",
    icon: Wrench,
    title: "Lắp đặt thang máy mới",
    desc: "Tư vấn thiết kế và thi công lắp đặt thang máy trọn gói, đảm bảo an toàn, thẩm mỹ và tiến độ.",
  },
  {
    slug: "bao-tri-sua-chua",
    icon: Settings,
    title: "Bảo trì & sửa chữa",
    desc: "Bảo dưỡng định kỳ chuyên nghiệp, xử lý sự cố nhanh để thang vận hành ổn định.",
  },
  {
    slug: "cai-tao-thang-may",
    icon: ArrowUpCircle,
    title: "Nâng cấp thang máy cũ",
    desc: "Cải tạo, hiện đại hóa hệ thống thang máy cũ để tăng hiệu suất và an toàn.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 luxury-dark-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          dark
          title="Dịch vụ của chúng tôi"
          subtitle="Giải pháp trọn gói từ tư vấn, lắp đặt đến bảo trì — an toàn, chuyên nghiệp, đúng tiến độ."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const post = SERVICE_POSTS.find((p) => p.slug === service.slug);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
              >
                <Link href={`/dich-vu/${service.slug}`}>
                  <a className="group block h-full luxury-glass-card p-8 text-center hover:border-secondary/35 transition-all duration-300">
                    <div className="mx-auto mb-6 grid place-items-center size-16 rounded-2xl bg-secondary/15 ring-1 ring-secondary/30 group-hover:bg-secondary/25 transition-colors">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
                    {post ? (
                      <span className="inline-block mt-5 text-secondary text-sm font-semibold group-hover:underline">
                        Xem chi tiết →
                      </span>
                    ) : null}
                  </a>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
