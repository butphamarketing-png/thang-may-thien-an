import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Products } from "./components/sections/Products";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col w-full">
          <Header />
          <main className="flex-1">
            <Hero />
            <Stats />
            <Products />
            <WhyChooseUs />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
