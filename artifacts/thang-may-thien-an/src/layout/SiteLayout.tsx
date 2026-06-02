import { PropsWithChildren } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingContacts } from "@/components/floating/FloatingContacts";

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-[4.5rem] sm:pt-24 md:pt-28 pb-28 sm:pb-24 md:pb-8 overflow-x-hidden w-full">
        {children}
      </main>
      <FloatingContacts />
      <Footer />
    </div>
  );
}

