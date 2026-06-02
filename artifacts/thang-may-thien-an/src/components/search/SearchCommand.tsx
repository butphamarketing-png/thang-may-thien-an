import { useEffect, useMemo, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { useLocation } from "wouter";
import { PRODUCTS } from "@/data/products";
import { SERVICE_POSTS, PROJECT_POSTS, KNOWLEDGE_POSTS, NEWS_POSTS } from "@/data/posts";

type Action = { title: string; subtitle?: string; href: string; shortcut?: string };

export function SearchCommand({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const actions = useMemo<Action[]>(() => {
    return [
      { title: "Trang chủ", href: "/", shortcut: "G H" },
      { title: "Sản phẩm", href: "/san-pham", shortcut: "G P" },
      { title: "Dịch vụ", href: "/dich-vu", shortcut: "G S" },
      { title: "Dự án", href: "/du-an", shortcut: "G D" },
      { title: "Kiến thức", href: "/kien-thuc", shortcut: "G K" },
      { title: "Liên hệ", href: "/lien-he", shortcut: "G L" },
      { title: "Admin", href: "/admin", shortcut: "G A" },
    ];
  }, []);

  const productActions = useMemo<Action[]>(
    () =>
      PRODUCTS.map((p) => ({
        title: p.title,
        subtitle: p.shortDescription,
        href: `/san-pham/${p.slug}`,
      })),
    [],
  );

  const postActions = useMemo<Action[]>(
    () => {
      const map = (items: typeof SERVICE_POSTS, prefix: string) =>
        items.map((p) => ({ title: p.title, subtitle: p.excerpt, href: `${prefix}/${p.slug}` }));
      return [
        ...map(SERVICE_POSTS, "/dich-vu"),
        ...map(PROJECT_POSTS, "/du-an"),
        ...map(KNOWLEDGE_POSTS, "/kien-thuc"),
        ...map(NEWS_POSTS, "/tin-tuc"),
      ];
    },
    [],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const filtered = (items: Action[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((a) => (a.title + " " + (a.subtitle ?? "")).toLowerCase().includes(q));
  };

  function go(href: string) {
    onOpenChange(false);
    setLocation(href);
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Tìm sản phẩm, dịch vụ, dự án…"
      />
      <CommandList>
        <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>

        <CommandGroup heading="Điều hướng">
          {filtered(actions).map((a) => (
            <CommandItem key={a.href} value={a.title} onSelect={() => go(a.href)}>
              <div className="flex flex-col">
                <div className="font-medium">{a.title}</div>
              </div>
              {a.shortcut ? <CommandShortcut>{a.shortcut}</CommandShortcut> : null}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Sản phẩm">
          {filtered(productActions).map((a) => (
            <CommandItem key={a.href} value={a.title} onSelect={() => go(a.href)}>
              <div className="flex flex-col">
                <div className="font-medium">{a.title}</div>
                {a.subtitle ? <div className="text-xs text-muted-foreground line-clamp-1">{a.subtitle}</div> : null}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Bài viết">
          {filtered(postActions).slice(0, 20).map((a) => (
            <CommandItem key={a.href} value={a.title} onSelect={() => go(a.href)}>
              <div className="flex flex-col">
                <div className="font-medium">{a.title}</div>
                {a.subtitle ? <div className="text-xs text-muted-foreground line-clamp-1">{a.subtitle}</div> : null}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

