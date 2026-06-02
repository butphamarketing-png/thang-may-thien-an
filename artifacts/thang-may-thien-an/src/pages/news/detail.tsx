import { NEWS_POSTS } from "@/data/posts";
import { PostDetail } from "@/pages/posts/post-detail";
import { useRoute } from "wouter";

export default function NewsDetailPage() {
  const [, params] = useRoute<{ slug: string }>("/tin-tuc/:slug");
  const post = NEWS_POSTS.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <PostDetail
        post={{
          slug: "not-found",
          title: "Không tìm thấy bài viết",
          excerpt: "Bài viết bạn đang xem không tồn tại hoặc đã được di chuyển.",
          dateLabel: "",
          coverImage: NEWS_POSTS[0]?.coverImage ?? "",
          content: ["Vui lòng quay lại danh sách tin tức."],
        }}
        backHref="/tin-tuc"
        backLabel="Quay lại tin tức"
      />
    );
  }

  return <PostDetail post={post} backHref="/tin-tuc" backLabel="Quay lại tin tức" />;
}

