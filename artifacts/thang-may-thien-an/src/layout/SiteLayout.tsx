import { PropsWithChildren } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingContacts } from "@/components/floating/FloatingContacts";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      {/* header is fixed */}
      <main className="flex-1 pt-24 md:pt-28">{children}</main>
      <FloatingContacts />
      <Footer />
    </div>
  );
}

