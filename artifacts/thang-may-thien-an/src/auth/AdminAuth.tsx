import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AdminAuthState = {
  ready: boolean;
  enabled: boolean;
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  signOut: () => Promise<void>;
};

const Ctx = createContext<AdminAuthState | null>(null);

export function AdminAuthProvider({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }

    supabase.auth
      .getSession()
      .then(({ data }) => {
        setSession(data.session ?? null);
        setUser(data.session?.user ?? null);
      })
      .finally(() => setReady(true));

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, s) => {
      setSession(s);
      setUser(s?.user ?? null);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  // Minimal admin check: user must have app_metadata.role === "admin" or user_metadata.role === "admin"
  const isAdmin = Boolean(
    user &&
      ((user.app_metadata as { role?: string } | undefined)?.role === "admin" ||
        (user.user_metadata as { role?: string } | undefined)?.role === "admin"),
  );

  const value = useMemo<AdminAuthState>(
    () => ({
      ready,
      enabled: Boolean(supabase),
      user,
      session,
      isAdmin,
      signOut: async () => {
        if (!supabase) return;
        await supabase.auth.signOut();
      },
    }),
    [ready, user, session, isAdmin],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAdminAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}

