import React from "react";
import { motion } from "framer-motion";
import { Wrench, Settings, ArrowUpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Lắp đặt thang máy mới",
    desc: "Tư vấn thiết kế và thi công lắp đặt thang máy trọn gói, đảm bảo an toàn, thẩm mỹ và tiến độ."
  },
  {
    icon: Settings,
    title: "Bảo trì & sửa chữa",
    desc: "Dịch vụ bảo dưỡng định kỳ chuyên nghiệp, xử lý sự cố nhanh chóng để thang vận hành ổn định."
  },
  {
    icon: ArrowUpCircle,
    title: "Nâng cấp thang máy cũ",
    desc: "Cải tạo, hiện đại hóa hệ thống thang máy cũ để tăng cường hiệu suất và tính năng an toàn."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase"
          >
            Dịch vụ của chúng tôi
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-full">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <Icon className="w-12 h-12 text-secondary mb-6" />
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/70">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
