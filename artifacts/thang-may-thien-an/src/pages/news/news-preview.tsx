import { NEWS_POSTS } from "@/data/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function NewsSectionPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">
              Tin tức
            </h2>
            <div className="w-24 h-1 bg-secondary mt-3" />
          </div>
          <Link href="/tin-tuc">
            <Button variant="outline" className="border-primary text-primary">
              Xem tất cả
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_POSTS.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/tin-tuc/${p.slug}`}>
              <a className="group">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden relative bg-primary/5">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-80" />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <div className="text-muted-foreground text-sm">{p.dateLabel}</div>
                    <h3 className="text-xl font-bold text-primary mt-2 line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-3 line-clamp-3">
                      {p.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

