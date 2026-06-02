import { useContentProtection } from "@/hooks/use-content-protection";

/** Active in production builds only. */
export function ContentProtection() {
  useContentProtection(import.meta.env.PROD);
  return null;
}
