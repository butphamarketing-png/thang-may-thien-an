import { PRODUCTS } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function ProductsPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-primary uppercase">
            Sản phẩm
          </h1>
          <div className="w-24 h-1 bg-secondary mt-4" />
          <p className="text-muted-foreground mt-6">
            Rê chuột để xem tiêu đề sản phẩm. Bấm vào từng sản phẩm để xem chi
            tiết, cấu hình và các điểm nổi bật.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/san-pham/${p.slug}`}>
              <a className="group">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-primary/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-5 text-white">
                        <div className="text-lg font-bold">{p.title}</div>
                        <div className="text-white/80 text-sm mt-1">
                          {p.priceLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {p.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {p.shortDescription}
                        </p>
                      </div>
                      <span className="shrink-0 font-semibold text-secondary">
                        {p.priceLabel}
                      </span>
                    </div>
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

