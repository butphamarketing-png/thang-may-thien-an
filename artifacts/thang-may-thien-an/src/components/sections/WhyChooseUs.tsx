import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Clock, Headset, Users, DollarSign } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "An toàn tuyệt đối", desc: "Tiêu chuẩn an toàn khắt khe." },
  { icon: Cpu, title: "Công nghệ hiện đại", desc: "Ứng dụng kỹ thuật tiên tiến nhất." },
  { icon: Clock, title: "Bảo hành dài hạn", desc: "Cam kết đồng hành lâu dài cùng khách hàng." },
  { icon: Headset, title: "Hỗ trợ 24/7", desc: "Sẵn sàng phục vụ bất cứ lúc nào." },
  { icon: Users, title: "Đội ngũ chuyên nghiệp", desc: "Kỹ sư tay nghề cao, tận tâm." },
  { icon: DollarSign, title: "Giá cả cạnh tranh", desc: "Chi phí hợp lý, minh bạch." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase"
          >
            Tại sao chọn Thiên Ân?
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
