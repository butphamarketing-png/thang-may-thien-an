import { SITE_CONTACTS } from "@/config/site";

type Item = {
  href: string;
  label: string;
  iconSrc: string;
  bgClass: string;
};

export function FloatingContacts() {
  const items: Item[] = [
    {
      href: `https://zalo.me/${SITE_CONTACTS.zaloPhone}`,
      label: "Zalo",
      iconSrc: "/ref/assets_images_zl.png",
      bgClass: "bg-[#0ea5e9]/15",
    },
    {
      href: `https://m.me/${SITE_CONTACTS.messengerPage}`,
      label: "Messenger",
      iconSrc: "/ref/assets_images_icon-call-nh.png",
      bgClass: "bg-[#2563eb]/15",
    },
    {
      href: `tel:${SITE_CONTACTS.phone}`,
      label: "Hotline",
      iconSrc: "/ref/assets_images_hl.png",
      bgClass: "bg-secondary/15",
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel={it.href.startsWith("http") ? "noreferrer" : undefined}
          className={[
            "group flex items-center gap-3 rounded-full border border-white/10 bg-primary/70 backdrop-blur-md shadow-lg",
            "px-3 py-2 text-white hover:bg-primary/85 transition-colors",
          ].join(" ")}
          aria-label={it.label}
          title={it.label}
        >
          <span
            className={[
              "grid place-items-center size-10 rounded-full",
              it.bgClass,
              "ring-1 ring-white/10",
            ].join(" ")}
          >
            <img src={it.iconSrc} alt="" className="size-6 object-contain" />
          </span>
          <span className="hidden md:block text-sm font-semibold">
            {it.label === "Hotline" ? SITE_CONTACTS.phoneLabel : it.label}
          </span>
        </a>
      ))}
    </div>
  );
}

