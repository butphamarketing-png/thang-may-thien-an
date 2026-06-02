import { NEWS_POSTS } from "@/data/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/lib/scroll-to-top";
import { Link } from "wouter";

const PREVIEW_COUNT = 3;

export function NewsSectionPreview() {
  const posts = NEWS_POSTS.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary uppercase">
              Tin tức
            </h2>
            <div className="w-24 h-1 bg-secondary mt-3" />
          </div>
          <Link href="/tin-tuc">
            <Button variant="outline" className="border-primary text-primary shrink-0">
              Xem tất cả
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/tin-tuc/${p.slug}`}
              className="group block h-full"
              onClick={() => scrollToTop("instant")}
            >
              <Card className="h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden relative bg-primary/5 shrink-0">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-80" />
                </div>
                <CardContent className="p-6 bg-white flex flex-col flex-1">
                  <div className="text-muted-foreground text-sm">{p.dateLabel}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mt-2 line-clamp-2 min-h-[3.25rem]">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 line-clamp-3 flex-1">
                    {p.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
