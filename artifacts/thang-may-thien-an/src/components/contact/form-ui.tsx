import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const CONTACT_FIELD_CLASS =
  "luxury-field h-14 text-base bg-white/[0.08] border-white/15 text-white placeholder:text-white/45";

export const CONTACT_TEXTAREA_CLASS =
  "luxury-field min-h-[120px] text-base resize-none bg-white/[0.08] border-white/15 text-white placeholder:text-white/45";

export function FormField({
  label,
  icon: Icon,
  required,
  children,
  className,
}: {
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label className="luxury-label flex items-center gap-2 mb-0">
        {Icon ? <Icon className="w-4 h-4 text-secondary/90 shrink-0" /> : null}
        <span>
          {label}
          {required ? <span className="text-secondary ml-0.5">*</span> : null}
        </span>
      </label>
      {children}
    </div>
  );
}

export function PrivacyNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/55 text-xs leading-relaxed flex items-start gap-2 mt-5">
      <span className="shrink-0" aria-hidden>
        🔒
      </span>
      <span>{children}</span>
    </p>
  );
}

export function ContactFormCard({
  accent,
  icon: Icon,
  title,
  description,
  children,
}: {
  accent: "blue" | "gold";
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const accentRing =
    accent === "blue"
      ? "from-[#1e6fd9]/30 to-[#0d4a9e]/10 border-[#3b82f6]/25"
      : "from-secondary/25 to-secondary/5 border-secondary/30";

  const iconBg = accent === "blue" ? "bg-[#2563eb]" : "bg-secondary";

  return (
    <div
      className={cn(
        "h-full flex flex-col rounded-3xl border p-6 md:p-8 backdrop-blur-md",
        "bg-gradient-to-br shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
        accentRing,
      )}
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className={cn(
            "grid place-items-center size-14 rounded-2xl shrink-0 text-white shadow-lg",
            iconBg,
          )}
        >
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide leading-snug">
            {title}
          </h3>
          <p className="text-white/70 text-sm mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
