import { useLocation } from "wouter";
import { useContentProtection } from "@/hooks/use-content-protection";

/** Bật trên production; tắt tại /admin để quản trị vẫn dùng DevTools được. */
export function ContentProtection() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");
  useContentProtection(import.meta.env.PROD && !isAdminRoute);
  return null;
}
