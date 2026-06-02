import { PROJECT_POSTS } from "@/data/posts";
import { PostList } from "@/pages/posts/post-list";

export default function ProjectsPage() {
  return (
    <PostList
      title="Dự án"
      subtitle="Các công trình tiêu biểu và thông tin tóm tắt."
      basePath="/du-an"
      posts={PROJECT_POSTS}
    />
  );
}

