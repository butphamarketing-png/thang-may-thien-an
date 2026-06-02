export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  coverImage: string;
  content: string[];
};

import catalogueCover from "@assets/image_1780381253460.png";

export const SERVICE_POSTS: Post[] = [
  {
    slug: "cai-tao-thang-may",
    title: "Dịch vụ cải tạo thang máy",
    excerpt:
      "Nâng cấp hệ thống thang máy cũ: an toàn hơn, vận hành êm hơn, tiết kiệm năng lượng.",
    dateLabel: "02 Nov",
    coverImage: catalogueCover,
    content: [
      "Khảo sát hiện trạng và tư vấn phương án tối ưu.",
      "Thay thế linh kiện xuống cấp, tối ưu tủ điều khiển, hệ thống an toàn.",
      "Nâng cấp nội thất cabin theo phong cách hiện đại.",
    ],
  },
  {
    slug: "bao-tri-sua-chua",
    title: "Bảo trì và sửa chữa thang máy",
    excerpt:
      "Bảo dưỡng định kỳ, xử lý sự cố nhanh chóng giúp thang vận hành ổn định và an toàn.",
    dateLabel: "02 Nov",
    coverImage: catalogueCover,
    content: [
      "Kiểm tra định kỳ theo checklist tiêu chuẩn.",
      "Xử lý lỗi, thay thế linh kiện đúng thông số.",
      "Hỗ trợ kỹ thuật và tư vấn vận hành an toàn.",
    ],
  },
  {
    slug: "quy-trinh-lap-dat",
    title: "Quy trình lắp đặt thang máy",
    excerpt:
      "Các bước triển khai lắp đặt chuẩn chỉnh từ khảo sát đến nghiệm thu đưa vào vận hành.",
    dateLabel: "02 Nov",
    coverImage: catalogueCover,
    content: [
      "Khảo sát công trình và chốt bản vẽ kỹ thuật.",
      "Thi công lắp đặt theo tiến độ, đảm bảo an toàn.",
      "Kiểm định, chạy thử và bàn giao hướng dẫn sử dụng.",
    ],
  },
];

export const PROJECT_POSTS: Post[] = [
  {
    slug: "du-an-nha-pho-q12",
    title: "Dự án thang máy nhà phố Quận 12",
    excerpt: "Thang máy gia đình 4 điểm dừng, thiết kế gọn và sang trọng.",
    dateLabel: "12 Jul",
    coverImage: catalogueCover,
    content: [
      "Hạng mục: Thang máy gia đình.",
      "Tải trọng: 300kg.",
      "Thời gian thi công: 25 ngày.",
    ],
  },
  {
    slug: "du-an-van-phong-go-vap",
    title: "Dự án thang máy tải khách văn phòng Gò Vấp",
    excerpt: "Giải pháp tải khách tối ưu lưu lượng, vận hành êm và bền.",
    dateLabel: "12 Jul",
    coverImage: catalogueCover,
    content: [
      "Hạng mục: Thang máy tải khách.",
      "Tải trọng: 630kg.",
      "Tiêu chuẩn an toàn: theo kiểm định hiện hành.",
    ],
  },
];

export const KNOWLEDGE_POSTS: Post[] = [
  {
    slug: "thang-may-khong-ho-pit-la-gi",
    title: "Thang máy không hố PIT là gì?",
    excerpt:
      "Giải pháp cho nhà cải tạo không đào móng, tiết kiệm không gian và vẫn đảm bảo an toàn.",
    dateLabel: "19 Jan",
    coverImage: catalogueCover,
    content: [
      "Không hố pit giúp thi công nhanh và phù hợp nhà cải tạo.",
      "Cần lựa chọn cấu hình truyền động phù hợp tải trọng và kích thước.",
      "Luôn ưu tiên tiêu chuẩn an toàn và kiểm định trước khi vận hành.",
    ],
  },
  {
    slug: "gia-thang-may-gia-dinh-2026",
    title: "Thang máy gia đình giá bao nhiêu? Cập nhật 2026",
    excerpt:
      "Các yếu tố ảnh hưởng giá: tải trọng, số tầng, vật liệu cabin và điều kiện thi công.",
    dateLabel: "01 Dec",
    coverImage: catalogueCover,
    content: [
      "Giá phụ thuộc cấu hình và mức độ cá nhân hóa.",
      "Chi phí thi công và bảo trì cần được tính theo vòng đời.",
      "Nên khảo sát thực tế để có báo giá chuẩn.",
    ],
  },
];

