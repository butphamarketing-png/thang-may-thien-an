import { SERVICE_POSTS } from "@/data/posts";
import { PostList } from "@/pages/posts/post-list";

export default function ServicesPage() {
  return (
    <PostList
      title="Dịch vụ"
      subtitle="Danh sách dịch vụ và bài viết giới thiệu. Bố cục lấy cảm hứng từ website tham khảo."
      basePath="/dich-vu"
      posts={SERVICE_POSTS}
      theme="dark"
    />
  );
}

