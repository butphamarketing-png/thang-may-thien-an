import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { SiteLayout } from "@/layout/SiteLayout";

import HomePage from "@/pages/home";
import ProductsPage from "@/pages/products";
import ProductDetailPage from "@/pages/products/detail";
import ServicesPage from "@/pages/services";
import ServiceDetailPage from "@/pages/services/detail";
import ProjectsPage from "@/pages/projects";
import ProjectDetailPage from "@/pages/projects/detail";
import KnowledgePage from "@/pages/knowledge";
import KnowledgeDetailPage from "@/pages/knowledge/detail";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SiteLayout>
          <Switch>
            <Route path="/" component={HomePage} />

            <Route path="/san-pham" component={ProductsPage} />
            <Route path="/san-pham/:slug" component={ProductDetailPage} />

            <Route path="/dich-vu" component={ServicesPage} />
            <Route path="/dich-vu/:slug" component={ServiceDetailPage} />

            <Route path="/du-an" component={ProjectsPage} />
            <Route path="/du-an/:slug" component={ProjectDetailPage} />

            <Route path="/kien-thuc" component={KnowledgePage} />
            <Route path="/kien-thuc/:slug" component={KnowledgeDetailPage} />

            <Route path="/lien-he" component={ContactPage} />

            <Route component={NotFound} />
          </Switch>
        </SiteLayout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
