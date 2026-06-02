import { PROJECT_POSTS } from "@/data/posts";
import { PostDetail } from "@/pages/posts/post-detail";
import { useRoute } from "wouter";

export default function ProjectDetailPage() {
  const [, params] = useRoute<{ slug: string }>("/du-an/:slug");
  const post = PROJECT_POSTS.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <PostDetail
        post={{
          slug: "not-found",
          title: "Không tìm thấy dự án",
          excerpt: "Dự án bạn đang xem không tồn tại hoặc đã được di chuyển.",
          dateLabel: "",
          coverImage: PROJECT_POSTS[0]?.coverImage ?? "",
          content: ["Vui lòng quay lại danh sách dự án."],
        }}
        backHref="/du-an"
        backLabel="Quay lại dự án"
      />
    );
  }

  return <PostDetail post={post} backHref="/du-an" backLabel="Quay lại dự án" />;
}

