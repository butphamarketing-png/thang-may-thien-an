import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/image_1780381253460.png";
import { Link, useLocation } from "wouter";
import { PRODUCTS } from "@/data/products";
import { CatalogueDialog } from "@/components/catalogue/CatalogueDialog";
import { SearchCommand } from "@/components/search/SearchCommand";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Sản phẩm", href: "/san-pham" },
    { name: "Dịch vụ", href: "/dich-vu" },
    { name: "Dự án", href: "/du-an" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Kiến thức", href: "/kien-thuc" },
    { name: "Liên hệ", href: "/lien-he" },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-md py-3 md:py-4"
            : "bg-primary/60 backdrop-blur-sm py-4 md:py-6"
        }`}
      >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Thang Máy Thiên Ân"
                className="h-11 w-11 sm:h-14 sm:w-14 object-contain rounded-full shrink-0"
              />
              <div className="hidden sm:block leading-tight">
                <div className="text-white font-bold uppercase tracking-wide">
                  Thang Máy Thiên Ân
                </div>
                <div className="text-white/70 text-xs">
                  Giải pháp thang máy toàn diện
                </div>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              if (link.name !== "Sản phẩm") {
                return (
                  <Link key={link.name} href={link.href}>
                    <a className="text-white/90 hover:text-secondary transition-colors text-sm font-medium uppercase tracking-wide">
                      {link.name}
                    </a>
                  </Link>
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    className="text-white/90 hover:text-secondary transition-colors text-sm font-medium uppercase tracking-wide inline-flex items-center gap-1"
                    onClick={() => setLocation(link.href)}
                  >
                    {link.name} <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {productsOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-0 top-full mt-4 w-[320px] rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-3">
                          {PRODUCTS.map((p) => (
                            <Link key={p.slug} href={`/san-pham/${p.slug}`}>
                              <a className="block rounded-lg px-3 py-2 hover:bg-gray-50">
                                <div className="font-semibold text-primary">{p.title}</div>
                                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                                  {p.shortDescription}
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-4 shrink-0">
            <Button
              variant="outline"
              size="icon"
              className="border-white/25 text-white hover:bg-white/10 bg-transparent"
              onClick={() => setSearchOpen(true)}
              aria-label="Tìm kiếm"
              title="Tìm kiếm (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </Button>
            <CatalogueDialog />
            <Link href="/lien-he">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
                Báo giá ngay
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white p-2 -mr-2"
            aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-primary border-t border-white/10 max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => {
                if (link.name !== "Sản phẩm") {
                  return (
                    <Link key={link.name} href={link.href}>
                      <a className="text-white/90 hover:text-secondary text-lg font-medium">
                        {link.name}
                      </a>
                    </Link>
                  );
                }

                return (
                  <div key={link.name} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setProductsOpen((s) => !s)}
                      className="w-full flex items-center justify-between text-white/90 hover:text-secondary text-lg font-medium"
                    >
                      <span>Sản phẩm</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {productsOpen ? (
                      <div className="pl-3 border-l border-white/15 space-y-2">
                        {PRODUCTS.map((p) => (
                          <Link key={p.slug} href={`/san-pham/${p.slug}`}>
                            <a className="block text-white/80 hover:text-secondary">
                              {p.title}
                            </a>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
                <CatalogueDialog className="w-full" />
                <Link href="/lien-he">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white w-full">
                    Báo giá ngay
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
