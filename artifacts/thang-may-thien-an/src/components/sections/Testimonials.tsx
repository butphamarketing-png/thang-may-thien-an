import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Anh Hoàng",
    district: "Quận 1, TP.HCM",
    text: "Thang máy hoạt động rất êm ái, thiết kế phù hợp hoàn hảo với nội thất căn nhà. Đội ngũ lắp đặt chuyên nghiệp và nhiệt tình."
  },
  {
    name: "Chị Lan",
    district: "Quận 7, TP.HCM",
    text: "Tôi rất an tâm khi sử dụng dịch vụ của Thiên Ân. Bảo trì đúng hạn, kỹ thuật viên có mặt nhanh chóng khi cần hỗ trợ."
  },
  {
    name: "Chú Bình",
    district: "Bình Dương",
    text: "Giá cả hợp lý so với chất lượng nhận được. Thang tải hàng hoạt động ổn định giúp công xưởng của chúng tôi tăng năng suất đáng kể."
  }
];

export function Testimonials() {
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
            Khách hàng nói gì về chúng tôi
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-gray-50 border-none shadow-md h-full">
                <CardContent className="p-8">
                  <div className="flex text-secondary mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">"{testi.text}"</p>
                  <div>
                    <h4 className="font-bold text-primary">{testi.name}</h4>
                    <p className="text-sm text-muted-foreground">{testi.district}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
