import { NEWS_POSTS } from "@/data/posts";
import { PostList } from "@/pages/posts/post-list";

export default function NewsPage() {
  return (
    <PostList
      title="Tin tức"
      subtitle="Cập nhật thông tin, chia sẻ kinh nghiệm và tin tức trong ngành."
      basePath="/tin-tuc"
      posts={NEWS_POSTS}
    />
  );
}

