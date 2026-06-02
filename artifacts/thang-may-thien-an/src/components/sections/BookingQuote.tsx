import { useMemo, useState } from "react";
import { Calculator, CalendarClock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SectionHeader } from "@/components/ui/section-header";

type QuoteForm = {
  name: string;
  phone: string;
  elevatorType: "home" | "commercial" | "freight" | "escalator" | "";
  floors: number;
  stops: number;
  loadKg: number;
  material: "standard" | "premium" | "glass" | "";
  date: string;
  time: string;
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
  const floors = Math.max(1, form.floors || 1);
  const stops = Math.max(2, form.stops || 2);
  const effectiveStops = Math.max(stops, floors);
  const extraStops = Math.max(0, effectiveStops - 3);
  const stopCost = extraStops * 22_000_000;
  const loadDelta = Math.max(0, form.loadKg - 350);
  const loadCost = Math.ceil(loadDelta / 50) * 6_000_000;
  const materialCost =
    form.material === "premium" ? 28_000_000 : form.material === "glass" ? 55_000_000 : 0;

  const estimate = base + stopCost + loadCost + materialCost;
  const low = Math.round(estimate * 0.93 / 1_000_000) * 1_000_000;
  const high = Math.round(estimate * 1.07 / 1_000_000) * 1_000_000;
  return { low, high, base, stopCost, loadCost, materialCost };
}

const typeLabels: Record<Exclude<QuoteForm["elevatorType"], "">, string> = {
  home: "Thang máy gia đình",
  commercial: "Thang máy tải khách",
  freight: "Thang máy tải hàng",
  escalator: "Thang cuốn",
};

const materialLabels: Record<Exclude<QuoteForm["material"], "">, string> = {
  standard: "Tiêu chuẩn",
  premium: "Cao cấp (inox)",
  glass: "Thang kính",
};

export function BookingQuote() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<QuoteForm>({
    name: "",
    phone: "",
    elevatorType: "home",
    floors: 4,
    stops: 4,
    loadKg: 350,
    material: "standard",
    date: "",
    time: "",
    address: "",
    note: "",
  });

  const estimate = useMemo(() => estimatePrice(form), [form]);

  const canSubmit =
    form.name.trim().length >= 2 && form.phone.trim().length >= 8 && !submitting;

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

  const fieldClass =
    "luxury-field bg-white/[0.08] border-white/15 text-white placeholder:text-white/45";

  return (
    <section id="dat-hen" className="py-24 luxury-dark-section">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          dark
          align="left"
          title="Đặt hẹn & tính giá"
          subtitle="Nhập thông số cơ bản để xem mức giá tham khảo ngay. Báo giá chính thức sẽ được xác nhận sau khảo sát công trình."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Form */}
          <div className="luxury-glass-card p-6 md:p-8 h-full">
            <div className="flex items-center gap-2 text-secondary mb-6">
              <CalendarClock className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Thông tin đặt hẹn
              </span>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="luxury-label">Họ và tên *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Nguyễn Văn A"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="luxury-label">Số điện thoại *</label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        phone: e.target.value.replace(/[^\d+ ]/g, ""),
                      }))
                    }
                    placeholder="09xx xxx xxx"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="luxury-label">Loại thang</label>
                  <select
                    value={form.elevatorType}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        elevatorType: e.target.value as QuoteForm["elevatorType"],
                      }))
                    }
                    className={fieldClass}
                  >
                    <option value="home">Thang máy gia đình</option>
                    <option value="commercial">Thang máy tải khách</option>
                    <option value="freight">Thang máy tải hàng</option>
                    <option value="escalator">Thang cuốn</option>
                  </select>
                </div>
                <div>
                  <label className="luxury-label">Chất liệu / hoàn thiện</label>
                  <select
                    value={form.material}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        material: e.target.value as QuoteForm["material"],
                      }))
                    }
                    className={fieldClass}
                  >
                    <option value="standard">Vật liệu tiêu chuẩn</option>
                    <option value="premium">Inox / hoàn thiện cao cấp</option>
                    <option value="glass">Thang kính</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="luxury-label">Số tầng</label>
                  <Input
                    value={String(form.floors)}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        floors: Math.max(1, Math.min(30, Number(e.target.value) || 1)),
                      }))
                    }
                    type="number"
                    min={1}
                    max={30}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="luxury-label">Điểm dừng</label>
                  <Input
                    value={String(form.stops)}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        stops: Math.max(2, Math.min(30, Number(e.target.value) || 2)),
                      }))
                    }
                    type="number"
                    min={2}
                    max={30}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="luxury-label">Tải trọng (kg)</label>
                  <Input
                    value={String(form.loadKg)}
                    onChange={(e) =>
                      setForm((s) => ({
                        ...s,
                        loadKg: Math.max(250, Math.min(2000, Number(e.target.value) || 350)),
                      }))
                    }
                    type="number"
                    min={250}
                    max={2000}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="luxury-label">Ngày hẹn</label>
                  <Input
                    value={form.date}
                    onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
                    type="date"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="luxury-label">Giờ hẹn</label>
                  <Input
                    value={form.time}
                    onChange={(e) => setForm((s) => ({ ...s, time: e.target.value }))}
                    type="time"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className="luxury-label">Địa chỉ công trình</label>
                <Input
                  value={form.address}
                  onChange={(e) => setForm((s) => ({ ...s, address: e.target.value }))}
                  placeholder="Quận, TP.HCM"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className="luxury-label">Ghi chú</label>
                <Textarea
                  value={form.note}
                  onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                  placeholder="Kích thước hố thang, yêu cầu thẩm mỹ..."
                  className={`${fieldClass} min-h-[96px] resize-none`}
                />
              </div>

              <Button
                type="submit"
                disabled={!canSubmit}
                className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base shadow-lg shadow-secondary/20"
              >
                {submitting ? "Đang gửi..." : "Đặt hẹn & nhận báo giá chi tiết"}
              </Button>
            </form>
          </div>

          {/* Price panel */}
          <div className="luxury-glass-card p-6 md:p-8 h-full flex flex-col border-secondary/20">
            <div className="flex items-center gap-2 text-secondary mb-6">
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Bảng tính giá tham khảo
              </span>
            </div>

            <div className="rounded-2xl border border-secondary/25 bg-gradient-to-br from-secondary/15 via-transparent to-transparent p-6 mb-6">
              <div className="text-white/70 text-sm">Khoảng giá ước tính</div>
              <div className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight gold-text">
                {estimate ? (
                  <>
                    {formatVnd(estimate.low)}
                    <span className="text-white/50 font-normal text-xl"> – </span>
                    {formatVnd(estimate.high)}
                  </>
                ) : (
                  "—"
                )}
              </div>
              <p className="mt-3 text-white/60 text-xs">
                Giá thay đổi theo lựa chọn bên trái
              </p>
            </div>

            {estimate && form.elevatorType ? (
              <div className="space-y-3 text-sm flex-1">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Loại thang</span>
                  <span className="text-white font-medium">{typeLabels[form.elevatorType]}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Tầng / điểm dừng</span>
                  <span className="text-white font-medium">
                    {form.floors} tầng · {form.stops} điểm
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Tải trọng</span>
                  <span className="text-white font-medium">{form.loadKg} kg</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Vật liệu</span>
                  <span className="text-white font-medium">
                    {materialLabels[form.material]}
                  </span>
                </div>
                {estimate.stopCost > 0 ? (
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-white/65">Phụ thu điểm dừng</span>
                    <span className="text-secondary font-medium">+{formatVnd(estimate.stopCost)}</span>
                  </div>
                ) : null}
                {estimate.materialCost > 0 ? (
                  <div className="flex justify-between py-2">
                    <span className="text-white/65">Phụ thu vật liệu</span>
                    <span className="text-secondary font-medium">
                      +{formatVnd(estimate.materialCost)}
                    </span>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.04] p-4 flex gap-3">
              <Sparkles className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <p className="text-white/75 text-sm leading-relaxed">
                Nhà phố 4 tầng thường dùng 4–5 điểm dừng, tải trọng 300–450kg, vật liệu tiêu chuẩn
                hoặc inox cao cấp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
