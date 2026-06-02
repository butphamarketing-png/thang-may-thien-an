import { PRODUCTS } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/lazy-image";
import { Link } from "wouter";

export function ProductsSectionPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">
              Sản phẩm
            </h2>
            <div className="w-24 h-1 bg-secondary mt-3" />
          </div>
          <Link href="/san-pham">
            <Button variant="outline" className="border-primary text-primary">
              Xem tất cả
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((p) => (
            <Card
              key={p.slug}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group h-full flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <LazyImage
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
              </div>
              <CardContent className="p-6 bg-white flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {p.shortDescription}
                </p>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="font-semibold text-secondary">{p.priceLabel}</span>
                  <Link href={`/san-pham/${p.slug}`}>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      Xem
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

