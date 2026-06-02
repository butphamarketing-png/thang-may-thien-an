import { KNOWLEDGE_POSTS } from "@/data/posts";
import { PostList } from "@/pages/posts/post-list";

export default function KnowledgePage() {
  return (
    <PostList
      title="Kiến thức"
      subtitle="Bài viết chia sẻ kinh nghiệm, thông số và lưu ý khi lựa chọn thang máy."
      basePath="/kien-thuc"
      posts={KNOWLEDGE_POSTS}
    />
  );
}

