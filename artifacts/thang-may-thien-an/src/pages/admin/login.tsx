import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useAdminAuth } from "@/auth/AdminAuth";

export default function AdminLoginPage() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { enabled, isAdmin, ready } = useAdminAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(
    () => email.trim().length > 3 && password.length >= 6 && !loading,
    [email, password, loading],
  );

  if (ready && isAdmin) {
    setLocation("/admin");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!enabled || !supabase) {
      toast({
        title: "Chưa cấu hình Supabase",
        description:
          "Bạn cần set VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY trên Vercel.",
        variant: "destructive",
      });
      return;
    }

    if (!canSubmit) return;

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        toast({
          title: "Đăng nhập thất bại",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Đăng nhập thành công" });
      setLocation("/admin");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-primary uppercase">Admin</h1>
        <div className="w-24 h-1 bg-secondary mt-4" />

        <Card className="mt-8 border-none shadow-lg">
          <CardContent className="p-8">
            <form className="space-y-4" onSubmit={onSubmit}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                type="password"
              />
              <Button
                type="submit"
                disabled={!canSubmit}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Tài khoản cần có role <b>admin</b> mới truy cập được khu vực quản trị.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

