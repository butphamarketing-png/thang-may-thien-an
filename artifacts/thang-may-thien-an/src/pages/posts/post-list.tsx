import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import type { Post } from "@/data/posts";

export function PostList({
  title,
  subtitle,
  basePath,
  posts,
  theme = "light",
}: {
  title: string;
  subtitle?: string;
  basePath: string;
  posts: Post[];
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";
  return (
    <div
      className={
        isDark
          ? "bg-gradient-to-b from-primary via-primary to-[#071427] text-white"
          : "bg-gray-50"
      }
    >
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">{title}</h1>
          <div className={`w-24 h-1 ${isDark ? "bg-secondary" : "bg-secondary"} mt-4`} />
          {subtitle ? (
            <p className={isDark ? "text-white/80 mt-6" : "text-muted-foreground mt-6"}>
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((p) => (
            <Link key={p.slug} href={`${basePath}/${p.slug}`}>
              <a className="group">
                <Card
                  className={
                    isDark
                      ? "bg-white/8 border-white/10 hover:bg-white/12 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                      : "border-none shadow-lg hover:shadow-xl transition-shadow"
                  }
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {isDark ? (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                    ) : null}
                  </div>
                  <CardContent className="p-6">
                    <div className={isDark ? "text-white/70 text-sm" : "text-muted-foreground text-sm"}>
                      {p.dateLabel}
                    </div>
                    <h3 className={isDark ? "text-xl font-bold mt-2 text-white" : "text-xl font-bold mt-2"}>
                      {p.title}
                    </h3>
                    <p
                      className={
                        isDark
                          ? "text-white/75 text-sm mt-3 leading-relaxed"
                          : "text-muted-foreground text-sm mt-3"
                      }
                    >
                      {p.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

