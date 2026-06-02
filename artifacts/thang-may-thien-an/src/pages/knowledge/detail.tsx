import { KNOWLEDGE_POSTS } from "@/data/posts";
import { PostDetail } from "@/pages/posts/post-detail";
import { useRoute } from "wouter";

export default function KnowledgeDetailPage() {
  const [, params] = useRoute<{ slug: string }>("/kien-thuc/:slug");
  const post = KNOWLEDGE_POSTS.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <PostDetail
        post={{
          slug: "not-found",
          title: "Không tìm thấy bài viết",
          excerpt: "Bài viết bạn đang xem không tồn tại hoặc đã được di chuyển.",
          dateLabel: "",
          coverImage: KNOWLEDGE_POSTS[0]?.coverImage ?? "",
          content: ["Vui lòng quay lại danh sách kiến thức."],
        }}
        backHref="/kien-thuc"
        backLabel="Quay lại kiến thức"
      />
    );
  }

  return (
    <PostDetail post={post} backHref="/kien-thuc" backLabel="Quay lại kiến thức" />
  );
}

