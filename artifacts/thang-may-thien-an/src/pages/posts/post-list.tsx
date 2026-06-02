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
    <div className={isDark ? "bg-primary text-white" : "bg-gray-50"}>
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
                <Card className={isDark ? "bg-white/5 border-white/10 hover:bg-white/10 transition-colors" : "border-none shadow-lg hover:shadow-xl transition-shadow"}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className={isDark ? "text-white/70 text-sm" : "text-muted-foreground text-sm"}>
                      {p.dateLabel}
                    </div>
                    <h3 className="text-xl font-bold mt-2">{p.title}</h3>
                    <p className={isDark ? "text-white/70 text-sm mt-3" : "text-muted-foreground text-sm mt-3"}>
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

