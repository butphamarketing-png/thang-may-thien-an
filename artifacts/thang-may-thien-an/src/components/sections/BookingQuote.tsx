import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type QuoteForm = {
  name: string;
  phone: string;
  elevatorType: "home" | "commercial" | "freight" | "escalator" | "";
  stops: number;
  loadKg: number;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm
  address: string;
  note: string;
};

function formatVnd(value: number) {
  return value.toLocaleString("vi-VN") + "đ";
}

function estimatePrice(form: QuoteForm) {
  const baseByType: Record<Exclude<QuoteForm["elevatorType"], "">, number> = {
    home: 280_000_000,
    commercial: 420_000_000,
    freight: 520_000_000,
    escalator: 900_000_000,
  };

  if (!form.elevatorType) return null;

  const base = baseByType[form.elevatorType];

  // Stops factor (first 3 stops included)
  const extraStops = Math.max(0, form.stops - 3);
  const stopCost = extraStops * 22_000_000;

  // Load factor (reference 350kg)
  const loadDelta = Math.max(0, form.loadKg - 350);
  const loadCost = Math.ceil(loadDelta / 50) * 6_000_000;

  // Site conditions placeholder factor
  const conditionCost = form.address.trim() ? 0 : 0;

  const estimate = base + stopCost + loadCost + conditionCost;

  // Display as a range ±7%
  const low = Math.round(estimate * 0.93 / 1_000_000) * 1_000_000;
  const high = Math.round(estimate * 1.07 / 1_000_000) * 1_000_000;
  return { low, high };
}

export function BookingQuote() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<QuoteForm>({
    name: "",
    phone: "",
    elevatorType: "home",
    stops: 4,
    loadKg: 350,
    date: "",
    time: "",
    address: "",
    note: "",
  });

  const estimate = useMemo(() => estimatePrice(form), [form]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    form.phone.trim().length >= 8 &&
    Boolean(form.elevatorType) &&
    !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      toast({
        title: "Vui lòng kiểm tra thông tin",
        description: "Họ tên và số điện thoại là bắt buộc.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      // TODO: Kết nối Supabase để lưu lịch hẹn + báo giá.
      await new Promise((r) => setTimeout(r, 650));
      toast({
        title: "Đã đặt lịch hẹn",
        description: "Thiên Ân sẽ liên hệ xác nhận và gửi báo giá chi tiết.",
      });
      setForm((s) => ({ ...s, note: "" }));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary via-primary to-[#071427] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold uppercase"
          >
            Đặt hẹn & tính giá (ước tính)
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mt-4" />
          <p className="text-white/80 mt-6">
            Chọn cấu hình cơ bản để xem khoảng giá tham khảo. Báo giá chính xác sẽ
            dựa trên khảo sát công trình thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <Card className="lg:col-span-2 bg-white/8 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <CardContent className="p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Họ và tên *"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        phone: e.target.value.replace(/[^\d+ ]/g, ""),
                      }))
                    }
                    placeholder="Số điện thoại *"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={form.elevatorType}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        elevatorType: e.target.value as QuoteForm["elevatorType"],
                      }))
                    }
                    className="flex h-10 w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="home">Thang máy gia đình</option>
                    <option value="commercial">Thang máy tải khách</option>
                    <option value="freight">Thang máy tải hàng</option>
                    <option value="escalator">Thang cuốn</option>
                  </select>

                  <Input
                    value={String(form.stops)}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        stops: Math.max(2, Math.min(20, Number(e.target.value || 0))),
                      }))
                    }
                    type="number"
                    min={2}
                    max={20}
                    placeholder="Số điểm dừng"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />

                  <Input
                    value={String(form.loadKg)}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        loadKg: Math.max(250, Math.min(2000, Number(e.target.value || 0))),
                      }))
                    }
                    type="number"
                    min={250}
                    max={2000}
                    placeholder="Tải trọng (kg)"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={form.date}
                    onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
                    type="date"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />
                  <Input
                    value={form.time}
                    onChange={(e) => setForm((s) => ({ ...s, time: e.target.value }))}
                    type="time"
                    className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  />
                </div>

                <Input
                  value={form.address}
                  onChange={(e) => setForm((s) => ({ ...s, address: e.target.value }))}
                  placeholder="Địa chỉ công trình"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                />

                <Textarea
                  value={form.note}
                  onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                  placeholder="Ghi chú thêm (kích thước hố thang, yêu cầu vật liệu, thang kính, ...)"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/50 min-h-[110px]"
                />

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
                >
                  {submitting ? "Đang gửi..." : "Đặt hẹn & nhận báo giá chi tiết"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white/8 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <CardContent className="p-8">
              <div className="text-white/80 text-sm">Khoảng giá tham khảo</div>
              <div className="mt-3 text-3xl font-extrabold tracking-tight">
                {estimate ? (
                  <>
                    {formatVnd(estimate.low)} <span className="text-white/70">–</span>{" "}
                    {formatVnd(estimate.high)}
                  </>
                ) : (
                  "—"
                )}
              </div>
              <div className="mt-4 space-y-2 text-white/75 text-sm">
                <div>• Bao gồm ước tính theo loại thang, điểm dừng, tải trọng.</div>
                <div>• Chưa bao gồm phát sinh theo điều kiện công trình.</div>
                <div>• Kỹ sư sẽ liên hệ xác nhận lịch hẹn và khảo sát.</div>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-white/70">Gợi ý nhanh</div>
                <div className="mt-2 text-sm text-white/85">
                  Nhà phố 4 tầng thường phù hợp 4–5 điểm dừng, tải trọng 300–450kg.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

