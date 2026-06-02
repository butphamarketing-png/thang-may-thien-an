import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Thang máy gia đình",
    desc: "Giải pháp di chuyển an toàn, thiết kế sang trọng cho không gian nhà ở.",
    img: "/images/product-home.png",
  },
  {
    title: "Thang máy tải khách",
    desc: "Vận hành êm ái, đáp ứng nhu cầu lưu thông cao tại các tòa nhà thương mại.",
    img: "/images/product-commercial.png",
  },
  {
    title: "Thang máy tải hàng",
    desc: "Động cơ mạnh mẽ, tải trọng lớn phục vụ nhà máy, kho xưởng hiệu quả.",
    img: "/images/product-freight.png",
  },
  {
    title: "Thang cuốn",
    desc: "Hệ thống thang cuốn hiện đại cho trung tâm thương mại và siêu thị.",
    img: "/images/product-escalator.png",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase"
          >
            Sản phẩm của chúng tôi
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                </div>
                <CardContent className="p-6 bg-white flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.desc}</p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white mt-auto">
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
