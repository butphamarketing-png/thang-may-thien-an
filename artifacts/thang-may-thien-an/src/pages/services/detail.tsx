import { SERVICE_POSTS } from "@/data/posts";
import { PostDetail } from "@/pages/posts/post-detail";
import { useRoute } from "wouter";

export default function ServiceDetailPage() {
  const [, params] = useRoute<{ slug: string }>("/dich-vu/:slug");
  const post = SERVICE_POSTS.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <PostDetail
        post={{
          slug: "not-found",
          title: "Không tìm thấy bài viết",
          excerpt: "Bài viết bạn đang xem không tồn tại hoặc đã được di chuyển.",
          dateLabel: "",
          coverImage: SERVICE_POSTS[0]?.coverImage ?? "",
          content: ["Vui lòng quay lại danh sách dịch vụ."],
        }}
        backHref="/dich-vu"
        backLabel="Quay lại dịch vụ"
      />
    );
  }

  return <PostDetail post={post} backHref="/dich-vu" backLabel="Quay lại dịch vụ" />;
}

