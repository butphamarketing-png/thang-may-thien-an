import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { CalendarClock, Facebook, MessageCircle, Phone } from "lucide-react";
import { SITE_CONTACTS } from "@/config/site";
import { cn } from "@/lib/utils";

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 5.58 2 10c0 2.55 1.35 4.82 3.5 6.35L4 22l5.9-2.45C10.58 19.85 11.28 20 12 20c5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
    </svg>
  );
}

function CircleBtn({
  href,
  label,
  children,
  className,
  shakeClass = "animate-float-ring-shake-delayed",
  style,
  onClick,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className: string;
  shakeClass?: string;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      style={style}
      className={cn(
        "grid place-items-center size-12 rounded-full border border-white/15 backdrop-blur-md shadow-xl",
        "transition-transform hover:scale-110 hover:shadow-2xl text-white",
        shakeClass,
        className,
      )}
    >
      {children}
    </a>
  );
}

export function FloatingContacts() {
  const scrollToBooking = () => {
    const el = document.getElementById("dat-hen");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Trái: Hotline rung */}
      <div className="fixed z-40 left-2 sm:left-4 bottom-2 sm:bottom-4 safe-bottom">
        <a
          href={`tel:${SITE_CONTACTS.phone}`}
          className={cn(
            "animate-float-ring-shake group flex flex-col sm:flex-row items-center gap-0 sm:gap-2.5",
            "rounded-full border border-white/12 bg-primary/95 backdrop-blur-md shadow-xl",
            "p-2 sm:pl-2.5 sm:pr-4 sm:py-2 hover:ring-2 hover:ring-secondary/50 transition-shadow",
          )}
          aria-label={`Gọi hotline ${SITE_CONTACTS.phoneLabel}`}
          title={`Gọi ${SITE_CONTACTS.phoneLabel}`}
        >
          <span className="grid place-items-center size-12 sm:size-11 rounded-full bg-secondary text-white shrink-0">
            <Phone className="size-6 sm:size-5" />
          </span>
          <span className="hidden sm:inline text-white text-sm font-bold tracking-wide pr-1">
            {SITE_CONTACTS.phoneLabel}
          </span>
          <span className="sm:hidden text-[10px] font-bold text-white mt-0.5 max-w-[3.5rem] text-center leading-tight">
            Gọi ngay
          </span>
        </a>
      </div>

      {/* Phải: Zalo, Messenger, FB, Đặt hẹn — cột dọc */}
      <div className="fixed z-40 right-2 sm:right-4 bottom-2 sm:bottom-4 safe-bottom flex flex-col items-center gap-2.5">
        <CircleBtn
          href={`https://zalo.me/${SITE_CONTACTS.zaloPhone}`}
          label="Chat Zalo"
          className="bg-[#0068ff] hover:bg-[#0056d6] shadow-[#0068ff]/40"
          shakeClass="animate-float-ring-shake-delayed"
        >
          <ZaloIcon className="size-6" />
        </CircleBtn>

        <CircleBtn
          href={`https://m.me/${SITE_CONTACTS.messengerPage}`}
          label="Messenger"
          className="bg-gradient-to-br from-[#00b2ff] to-[#006aff] shadow-blue-500/40"
          shakeClass="animate-float-ring-shake-delayed"
          style={{ animationDelay: "0.2s" }}
        >
          <MessageCircle className="size-6" />
        </CircleBtn>

        <CircleBtn
          href={`https://www.facebook.com/${SITE_CONTACTS.facebookPage}`}
          label="Facebook"
          className="bg-[#1877f2] hover:bg-[#166fe5] shadow-blue-600/40"
          shakeClass="animate-float-ring-shake-delayed"
          style={{ animationDelay: "0.35s" }}
        >
          <Facebook className="size-6" />
        </CircleBtn>

        <CircleBtn
          href="/#dat-hen"
          label="Đặt hẹn & báo giá"
          className="bg-secondary hover:bg-secondary/90 text-white shadow-secondary/30"
          shakeClass="animate-float-ring-shake-delayed"
          style={{ animationDelay: "0.5s" }}
          onClick={(e) => {
            if (window.location.pathname === "/" || window.location.pathname === "") {
              e.preventDefault();
              scrollToBooking();
            }
          }}
        >
          <CalendarClock className="size-6" />
        </CircleBtn>
      </div>
    </>
  );
}
