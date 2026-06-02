import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useRoute } from "wouter";

export default function ProductDetailPage() {
  const [, params] = useRoute<{ slug: string }>("/san-pham/:slug");
  const product = PRODUCTS.find((p) => p.slug === params?.slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20">
        <h1 className="text-2xl font-bold text-primary">Không tìm thấy sản phẩm</h1>
        <div className="mt-6">
          <Link href="/san-pham">
            <Button variant="outline" className="border-primary text-primary">
              Quay lại danh sách
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-primary/5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[380px] md:h-[460px] object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center gap-3">
              <Badge className="bg-secondary text-white">Sản phẩm</Badge>
              <span className="text-secondary font-semibold">{product.priceLabel}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary uppercase mt-4">
              {product.title}
            </h1>
            <p className="text-muted-foreground mt-5 text-lg">
              {product.shortDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {product.highlights.map((h) => (
                <Card key={h} className="border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">{h}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-bold text-primary">Mô tả</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/lien-he">
                <Button className="bg-secondary hover:bg-secondary/90 text-white h-12">
                  Nhận tư vấn & báo giá
                </Button>
              </Link>
              <Link href="/san-pham">
                <Button
                  variant="outline"
                  className="border-primary text-primary h-12"
                >
                  Xem sản phẩm khác
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

