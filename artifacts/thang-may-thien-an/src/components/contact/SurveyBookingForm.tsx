import { useState } from "react";
import {
  CalendarClock,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitLead } from "@/lib/api/submit-lead";
import {
  CONTACT_FIELD_CLASS,
  CONTACT_TEXTAREA_CLASS,
  ContactFormCard,
  FormField,
  PrivacyNote,
} from "./form-ui";

type SurveyForm = {
  name: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  note: string;
};

const initial: SurveyForm = {
  name: "",
  phone: "",
  address: "",
  date: "",
  time: "",
  note: "",
};

function validateSurvey(form: SurveyForm): string | null {
  if (form.name.trim().length < 2) return "Vui lòng nhập họ tên (ít nhất 2 ký tự).";
  if (form.phone.trim().length < 8) return "Vui lòng nhập số điện thoại hợp lệ.";
  if (!form.address.trim()) return "Vui lòng nhập địa chỉ công trình.";
  if (!form.date) return "Vui lòng chọn ngày khảo sát.";
  if (!form.time) return "Vui lòng chọn giờ khảo sát.";
  return null;
}

export function SurveyBookingForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<SurveyForm>(initial);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateSurvey(form);
    if (err) {
      toast({ title: "Thiếu thông tin", description: err, variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        type: "survey_booking",
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        survey_date: form.date,
        survey_time: form.time,
        note: form.note.trim(),
      });
      toast({
        title: "Đã đặt lịch khảo sát",
        description: "Thiên Ân sẽ liên hệ xác nhận lịch khảo sát tận nơi.",
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
      accent="blue"
      icon={CalendarClock}
      title="Đặt lịch khảo sát"
      description="Đăng ký lịch khảo sát tận nơi miễn phí, tư vấn giải pháp thang máy phù hợp cho công trình của bạn."
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

        <FormField label="Địa chỉ công trình" icon={MapPin} required>
          <Input
            value={form.address}
            onChange={(e) => setForm((s) => ({ ...s, address: e.target.value }))}
            placeholder="Số nhà, quận, TP.HCM"
            className={CONTACT_FIELD_CLASS}
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Ngày khảo sát" icon={CalendarClock} required>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
          <FormField label="Giờ khảo sát" icon={Clock} required>
            <Input
              type="time"
              value={form.time}
              onChange={(e) => setForm((s) => ({ ...s, time: e.target.value }))}
              className={CONTACT_FIELD_CLASS}
            />
          </FormField>
        </div>

        <FormField label="Ghi chú" icon={MessageSquare}>
          <Textarea
            value={form.note}
            onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
            placeholder="Yêu cầu thêm về công trình..."
            className={CONTACT_TEXTAREA_CLASS}
          />
        </FormField>

        <div className="mt-auto pt-2">
          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-14 text-base font-bold uppercase tracking-wide bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/25"
          >
            <CalendarClock className="w-5 h-5 mr-2" />
            {submitting ? "Đang gửi..." : "Đặt lịch khảo sát"}
          </Button>
          <PrivacyNote>
            Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích khảo sát, tư vấn.
          </PrivacyNote>
        </div>
      </form>
    </ContactFormCard>
  );
}
