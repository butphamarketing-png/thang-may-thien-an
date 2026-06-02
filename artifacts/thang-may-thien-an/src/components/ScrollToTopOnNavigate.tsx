import { useEffect } from "react";
import { useLocation } from "wouter";
import { scrollToTop } from "@/lib/scroll-to-top";

/** Cuộn lên đầu trang khi đổi route (menu, bài viết, sản phẩm...). */
export function ScrollToTopOnNavigate() {
  const [location] = useLocation();

  useEffect(() => {
    scrollToTop("instant");
  }, [location]);

  return null;
}
