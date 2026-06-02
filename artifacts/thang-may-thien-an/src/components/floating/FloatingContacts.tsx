import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONTACTS } from "@/config/site";

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
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={[
        "grid place-items-center size-12 rounded-full border border-white/15 backdrop-blur-md shadow-xl",
        "transition-all hover:scale-105 hover:shadow-2xl text-white",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export function FloatingContacts() {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <div className="flex items-center gap-2 sm:gap-3">
        <CircleBtn
          href={`https://zalo.me/${SITE_CONTACTS.zaloPhone}`}
          label="Chat Zalo"
          className="bg-[#0068ff] hover:bg-[#0056d6] shadow-[#0068ff]/30"
        >
          <ZaloIcon className="size-6" />
        </CircleBtn>

        <a
          href={`tel:${SITE_CONTACTS.phone}`}
          className="group flex items-center gap-2.5 rounded-full border border-white/12 bg-primary/95 backdrop-blur-md shadow-xl pl-2.5 pr-4 py-2 hover:ring-2 hover:ring-secondary/40 transition-all"
          aria-label="Gọi hotline"
        >
          <span className="grid place-items-center size-11 rounded-full bg-secondary text-white shrink-0">
            <Phone className="size-5" />
          </span>
          <span className="text-white text-sm font-bold tracking-wide hidden sm:inline">
            {SITE_CONTACTS.phoneLabel}
          </span>
        </a>

        <CircleBtn
          href={`https://m.me/${SITE_CONTACTS.messengerPage}`}
          label="Messenger"
          className="bg-gradient-to-br from-[#00b2ff] to-[#006aff] hover:opacity-95 shadow-blue-500/30"
        >
          <MessageCircle className="size-6" />
        </CircleBtn>
      </div>
    </div>
  );
}
