import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { SiteLayout } from "@/layout/SiteLayout";
import { AdminAuthProvider, useAdminAuth } from "@/auth/AdminAuth";

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
import AdminLoginPage from "@/pages/admin/login";
import AdminDashboardPage from "@/pages/admin";
import NewsPage from "@/pages/news";
import NewsDetailPage from "@/pages/news/detail";

const queryClient = new QueryClient();

function AdminGuard({ component: Component }: { component: React.ComponentType }) {
  const { ready, enabled, isAdmin } = useAdminAuth();

  if (!enabled) return <AdminLoginPage />;
  if (!ready) return null;
  if (!isAdmin) return <AdminLoginPage />;
  return <Component />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminAuthProvider>
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

              <Route path="/tin-tuc" component={NewsPage} />
              <Route path="/tin-tuc/:slug" component={NewsDetailPage} />

              <Route path="/lien-he" component={ContactPage} />

              <Route path="/admin/login" component={AdminLoginPage} />
              <Route
                path="/admin"
                component={() => <AdminGuard component={AdminDashboardPage} />}
              />

              <Route component={NotFound} />
            </Switch>
          </SiteLayout>
        </AdminAuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
