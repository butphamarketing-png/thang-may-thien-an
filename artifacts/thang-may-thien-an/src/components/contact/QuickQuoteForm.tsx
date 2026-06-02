import { useState } from "react";
import {
  BadgeDollarSign,
  Layers,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/api/submit-lead";
import {
  CONTACT_FIELD_CLASS,
  ContactFormCard,
  FormField,
  PrivacyNote,
} from "./form-ui";

type ElevatorType = "home" | "commercial" | "freight" | "escalator";
type Material = "standard" | "premium" | "glass";

type QuoteForm = {
  name: string;
  phone: string;
  elevatorType: ElevatorType | "";
  floors: string;
  stops: string;
  loadKg: string;
  material: Material | "";
};

const initial: QuoteForm = {
  name: "",
  phone: "",
  elevatorType: "",
  floors: "",
  stops: "",
  loadKg: "",
  material: "",
};

const SUCCESS_MESSAGE =
  "Cảm ơn quý khách đã gửi yêu cầu. Chuyên viên tư vấn sẽ liên hệ và gửi báo giá chi tiết trong thời gian sớm nhất.";

function validateQuote(form: QuoteForm): string | null {
  if (form.name.trim().length < 2) return "Vui lòng nhập họ tên (ít nhất 2 ký tự).";
  if (form.phone.trim().length < 8) return "Vui lòng nhập số điện thoại hợp lệ.";
  if (!form.elevatorType) return "Vui lòng chọn loại thang máy.";
  const floors = Number(form.floors);
  if (!floors || floors < 1) return "Vui lòng nhập số tầng hợp lệ.";
  const stops = Number(form.stops);
  if (!stops || stops < 2) return "Vui lòng nhập số điểm dừng (tối thiểu 2).";
  const load = Number(form.loadKg);
  if (!load || load < 250) return "Vui lòng nhập tải trọng (tối thiểu 250kg).";
  if (!form.material) return "Vui lòng chọn chất liệu hoàn thiện.";
  return null;
}

export function QuickQuoteForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<QuoteForm>(initial);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateQuote(form);
    if (err) {
      toast({ title: "Thiếu thông tin", description: err, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        type: "quick_quote",
        name: form.name.trim(),
        phone: form.phone.trim(),
        elevator_type: form.elevatorType,
        floors: Number(form.floors),
        stops: Number(form.stops),
        load_kg: Number(form.loadKg),
        material: form.material,
      });
      toast({
        title: "Đã nhận yêu cầu báo giá",
        description: SUCCESS_MESSAGE,
      });
      setForm(initial);
    } catch {
      toast({
        title: "Gửi không thành công",
        description: "Vui lòng thử lại hoặc gọi hotline 0967 159 147.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <ContactFormCard
      accent="gold"
      icon={BadgeDollarSign}
      title="Nhận báo giá nhanh"
      description="Nhập thông tin công trình để nhận báo giá phù hợp và chính xác nhất."
    >
      <form onSubmit={onSubmit} className="flex flex-col flex-1 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Họ và tên" icon={User} required>
            <Input
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              placeholder="Nguyễn Văn A"
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
          <FormField label="Số điện thoại" icon={Phone} required>
            <Input
              value={form.phone}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  phone: e.target.value.replace(/[^\d+ ]/g, ""),
                }))
              }
              placeholder="09xx xxx xxx"
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
        </div>

        <FormField label="Loại thang máy" icon={Layers} required>
          <select
            value={form.elevatorType}
            onChange={(e) =>
              setForm((s) => ({ ...s, elevatorType: e.target.value as QuoteForm["elevatorType"] }))
            }
            className={CONTACT_FIELD_CLASS}
          >
            <option value="">Chọn loại thang</option>
            <option value="home">Thang máy gia đình</option>
            <option value="commercial">Thang máy tải khách</option>
            <option value="freight">Thang máy tải hàng</option>
            <option value="escalator">Thang cuốn</option>
          </select>
        </FormField>

        <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-5">
          <FormField label="Số tầng" required>
            <Input
              type="number"
              min={1}
              max={30}
              value={form.floors}
              onChange={(e) => setForm((s) => ({ ...s, floors: e.target.value }))}
              placeholder="4"
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
          <FormField label="Số điểm dừng" required>
            <Input
              type="number"
              min={2}
              max={30}
              value={form.stops}
              onChange={(e) => setForm((s) => ({ ...s, stops: e.target.value }))}
              placeholder="4"
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
          <FormField label="Tải trọng (kg)" required>
            <Input
              type="number"
              min={250}
              max={2000}
              value={form.loadKg}
              onChange={(e) => setForm((s) => ({ ...s, loadKg: e.target.value }))}
              placeholder="350"
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
        </div>

        <FormField label="Chất liệu hoàn thiện" icon={Layers} required>
          <select
            value={form.material}
            onChange={(e) =>
              setForm((s) => ({ ...s, material: e.target.value as QuoteForm["material"] }))
            }
            className={CONTACT_FIELD_CLASS}
          >
            <option value="">Chọn vật liệu</option>
            <option value="standard">Vật liệu tiêu chuẩn</option>
            <option value="premium">Inox / hoàn thiện cao cấp</option>
            <option value="glass">Thang kính</option>
          </select>
        </FormField>

        <div className="mt-auto pt-2">
          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-14 text-base font-bold uppercase tracking-wide bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25"
          >
            <BadgeDollarSign className="w-5 h-5 mr-2" />
            {submitting ? "Đang gửi..." : "Nhận báo giá"}
          </Button>
          <PrivacyNote>
            Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích tư vấn báo giá.
          </PrivacyNote>
        </div>
      </form>
    </ContactFormCard>
  );
}
