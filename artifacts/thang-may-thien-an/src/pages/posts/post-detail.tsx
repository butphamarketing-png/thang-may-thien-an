import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Post } from "@/data/posts";
import { Link } from "wouter";

export function PostDetail({
  post,
  backHref,
  backLabel,
}: {
  post: Post;
  backHref: string;
  backLabel: string;
}) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-primary/5">
            <img src={post.coverImage} alt={post.title} className="w-full h-[420px] object-cover" />
          </div>

          <div className="mt-8">
            <div className="text-muted-foreground text-sm">{post.dateLabel}</div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary uppercase mt-3">
              {post.title}
            </h1>
            <p className="text-muted-foreground mt-5 text-lg">{post.excerpt}</p>
          </div>

          <Card className="border-none shadow-sm mt-10">
            <CardContent className="p-8">
              <div className="space-y-4">
                {post.content.map((line, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-10">
            <Link href={backHref}>
              <Button variant="outline" className="border-primary text-primary">
                {backLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

