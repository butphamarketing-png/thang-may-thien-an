import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Modern glass elevator interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-tight">
            GIẢI PHÁP THANG MÁY <span className="text-secondary">TOÀN DIỆN</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Thiên Ân tự hào là đơn vị cung cấp, lắp đặt và bảo trì thang máy chuyên nghiệp, an toàn, mang lại giá trị bền vững cho mọi công trình.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white min-w-[200px] h-14 text-lg">
              Xem sản phẩm
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 min-w-[200px] h-14 text-lg bg-transparent">
              Liên hệ tư vấn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
