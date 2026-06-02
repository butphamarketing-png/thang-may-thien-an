import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAdminAuth } from "@/auth/AdminAuth";
import { Link } from "wouter";

export default function AdminDashboardPage() {
  const { user, signOut } = useAdminAuth();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase">
            Quản trị
          </h1>
          <div className="text-muted-foreground mt-2 text-sm">
            Đăng nhập: {user?.email ?? "—"}
          </div>
        </div>
        <Button variant="outline" className="border-primary text-primary" onClick={signOut}>
          Đăng xuất
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="font-bold text-primary">Sản phẩm</div>
            <div className="text-sm text-muted-foreground mt-2">
              Quản lý danh sách sản phẩm, giá, mô tả, hình ảnh.
            </div>
            <div className="mt-5">
              <Link href="/admin/san-pham">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Mở quản lý
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="font-bold text-primary">Bài viết</div>
            <div className="text-sm text-muted-foreground mt-2">
              Quản lý Dịch vụ / Dự án / Kiến thức.
            </div>
            <div className="mt-5">
              <Link href="/admin/bai-viet">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Mở quản lý
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="font-bold text-primary">Cài đặt</div>
            <div className="text-sm text-muted-foreground mt-2">
              Logo, catalogue, các link menu, cấu hình hiển thị.
            </div>
            <div className="mt-5">
              <Link href="/admin/cai-dat">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Mở quản lý
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

