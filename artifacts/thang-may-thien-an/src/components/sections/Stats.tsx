import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Công trình hoàn thành" },
  { value: "1000+", label: "Khách hàng tin tưởng" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

export function Stats() {
  return (
    <section className="bg-primary text-white py-16 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
