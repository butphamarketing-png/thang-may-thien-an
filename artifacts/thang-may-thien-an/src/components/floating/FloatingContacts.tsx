import { SITE_CONTACTS } from "@/config/site";

export function FloatingContacts() {
  return (
    <div className="fixed right-5 bottom-5 z-40">
      {/* Symmetric cluster: Zalo (left) - Hotline (center) - Messenger (right) */}
      <div className="relative size-[168px]">
        <a
          href={`tel:${SITE_CONTACTS.phone}`}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 group"
          aria-label="Hotline"
          title={`Hotline ${SITE_CONTACTS.phoneLabel}`}
        >
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-primary/80 backdrop-blur-md shadow-xl px-4 py-3 hover:bg-primary/90 transition-colors">
            <span className="grid place-items-center size-12 rounded-full bg-secondary/15 ring-1 ring-white/10">
              <img src="/ref/assets_images_hl.png" alt="" className="size-7 object-contain" />
            </span>
            <span className="hidden md:block text-white font-semibold">
              {SITE_CONTACTS.phoneLabel}
            </span>
          </div>
        </a>

        <a
          href={`https://zalo.me/${SITE_CONTACTS.zaloPhone}`}
          target="_blank"
          rel="noreferrer"
          className="absolute left-0 bottom-9 group"
          aria-label="Zalo"
          title="Zalo"
        >
          <div className="grid place-items-center size-12 rounded-full border border-white/10 bg-primary/75 backdrop-blur-md shadow-lg hover:bg-primary/90 transition-colors">
            <span className="grid place-items-center size-11 rounded-full bg-[#0ea5e9]/15 ring-1 ring-white/10">
              <img src="/ref/assets_images_zl.png" alt="" className="size-7 object-contain" />
            </span>
          </div>
        </a>

        <a
          href={`https://m.me/${SITE_CONTACTS.messengerPage}`}
          target="_blank"
          rel="noreferrer"
          className="absolute right-0 bottom-9 group"
          aria-label="Messenger"
          title="Messenger"
        >
          <div className="grid place-items-center size-12 rounded-full border border-white/10 bg-primary/75 backdrop-blur-md shadow-lg hover:bg-primary/90 transition-colors">
            <span className="grid place-items-center size-11 rounded-full bg-[#2563eb]/15 ring-1 ring-white/10">
              <img
                src="/ref/assets_images_icon-call-nh.png"
                alt=""
                className="size-7 object-contain"
              />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

