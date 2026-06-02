import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    elevatorType: "",
    note: "",
  });

  const isValidEmail = useMemo(() => {
    if (!form.email.trim()) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  }, [form.email]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    form.phone.trim().length >= 8 &&
    isValidEmail &&
    !isSubmitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      toast({
        title: "Vui lòng kiểm tra thông tin",
        description:
          "Họ tên (>=2 ký tự), số điện thoại (>=8 số) và email (nếu có) phải hợp lệ.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Kết nối Supabase để lưu lead / gửi email.
      await new Promise((r) => setTimeout(r, 650));
      toast({
        title: "Đã gửi yêu cầu",
        description: "Thiên Ân sẽ liên hệ lại sớm để tư vấn và báo giá.",
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        elevatorType: "",
        note: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">Liên hệ với chúng tôi</h2>
              <div className="w-24 h-1 bg-secondary mb-8" />
              <p className="text-muted-foreground text-lg">
                Để lại thông tin, đội ngũ kỹ sư của Thiên Ân sẽ liên hệ tư vấn giải pháp phù hợp nhất cho công trình của bạn.
              </p>
            </div>

            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Họ và tên *"
                  className="bg-white"
                />
                <Input
                  value={form.phone}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, phone: e.target.value.replace(/[^\d+ ]/g, "") }))
                  }
                  placeholder="Số điện thoại *"
                  className="bg-white"
                />
              </div>
              <Input
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="Email"
                type="email"
                className="bg-white"
              />
              <Input
                value={form.address}
                onChange={(e) => setForm((s) => ({ ...s, address: e.target.value }))}
                placeholder="Địa chỉ công trình"
                className="bg-white"
              />
              <select
                value={form.elevatorType}
                onChange={(e) => setForm((s) => ({ ...s, elevatorType: e.target.value }))}
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Chọn loại thang máy</option>
                <option value="home">Thang máy gia đình</option>
                <option value="commercial">Thang máy tải khách</option>
                <option value="freight">Thang máy tải hàng</option>
                <option value="escalator">Thang cuốn</option>
              </select>
              <Textarea
                value={form.note}
                onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                placeholder="Ghi chú thêm"
                className="bg-white min-h-[120px]"
              />
              <Button
                size="lg"
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg disabled:opacity-60"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Hotline</h4>
                  <p className="text-muted-foreground">0967 159 147</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Địa chỉ</h4>
                  <p className="text-muted-foreground">Nguyễn Ảnh Thủ, Trung Mỹ Tây, Quận 12, TP.HCM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Giờ làm việc</h4>
                  <p className="text-muted-foreground">Thứ 2 - Thứ 7: 8:00 - 17:30</p>
                  <p className="text-muted-foreground">Hỗ trợ kỹ thuật: 24/7</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-[300px] bg-gray-200">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4206640578644!2d106.6117565147496!3d10.855574792267595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b0051e0ccf1%3A0xc3f6eebffdbfa3bc!2sNguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20Trung%20M%E1%BB%B9%20T%C3%A2y%2C%20Qu%E1%BA%ADn%2012%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
