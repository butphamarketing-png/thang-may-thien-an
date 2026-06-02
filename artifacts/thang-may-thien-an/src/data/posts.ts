export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  dateLabel: string;
  coverImage: string;
  content: string[];
};

import { galleryAt } from "./site-images";

export const SERVICE_POSTS: Post[] = [
  {
    slug: "cai-tao-thang-may",
    title: "Dịch vụ cải tạo thang máy",
    excerpt:
      "Nâng cấp hệ thống thang máy cũ: an toàn hơn, vận hành êm hơn, tiết kiệm năng lượng.",
    dateLabel: "02 Nov",
    coverImage: galleryAt(2),
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
    coverImage: galleryAt(4),
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
    coverImage: galleryAt(6),
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
    coverImage: galleryAt(8),
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
    coverImage: galleryAt(12),
    content: [
      "Hạng mục: Thang máy tải khách.",
      "Tải trọng: 630kg.",
      "Tiêu chuẩn an toàn: theo kiểm định hiện hành.",
    ],
  },
  {
    slug: "du-an-biet-thu-thu-duc",
    title: "Thang máy kính biệt thự Thủ Đức",
    excerpt: "Cabin kính panorama, hoàn thiện inox vàng sang trọng.",
    dateLabel: "08 Jun",
    coverImage: galleryAt(14),
    content: ["Hạng mục: Thang máy gia đình.", "Vật liệu: Cabin kính.", "Thi công: 28 ngày."],
  },
  {
    slug: "du-an-chung-cu-mini-q7",
    title: "Thang tải khách chung cư mini Quận 7",
    excerpt: "Tối ưu diện tích hố thang, vận hành êm cho 6 tầng.",
    dateLabel: "22 May",
    coverImage: galleryAt(16),
    content: ["Hạng mục: Tải khách.", "6 điểm dừng.", "Tải trọng: 450kg."],
  },
  {
    slug: "du-an-nha-pho-tan-binh",
    title: "Thang máy nhà phố Tân Bình",
    excerpt: "Lắp đặt gọn cạnh cầu thang, cabin inox gương.",
    dateLabel: "15 Apr",
    coverImage: galleryAt(20),
    content: ["Hạng mục: Gia đình.", "4 điểm dừng.", "Thiết kế theo hiện trạng."],
  },
  {
    slug: "du-an-van-phong-q1",
    title: "Thang máy văn phòng Quận 1",
    excerpt: "Cabin rộng, cửa tự động, phù hợp tòa nhà dịch vụ.",
    dateLabel: "03 Mar",
    coverImage: galleryAt(24),
    content: ["Hạng mục: Tải khách.", "Tải trọng: 630kg.", "Kiểm định đầy đủ."],
  },
  {
    slug: "du-an-cai-tao-binh-thanh",
    title: "Cải tạo thang máy Bình Thạnh",
    excerpt: "Nâng cấp cabin và tủ điều khiển, vận hành ổn định hơn.",
    dateLabel: "19 Feb",
    coverImage: galleryAt(28),
    content: ["Hạng mục: Cải tạo.", "Giữ nguyên hố thang.", "Thời gian: 12 ngày."],
  },
  {
    slug: "du-an-thang-kinh-q9",
    title: "Thang kính nhà phố Quận 9",
    excerpt: "Giải pháp thẩm mỹ, chiếu sáng LED trong cabin.",
    dateLabel: "10 Jan",
    coverImage: galleryAt(32),
    content: ["Hạng mục: Thang kính.", "4 tầng.", "Bảo hành 24 tháng."],
  },
];

export const KNOWLEDGE_POSTS: Post[] = [
  {
    slug: "thang-may-khong-ho-pit-la-gi",
    title: "Thang máy không hố PIT là gì?",
    excerpt:
      "Giải pháp cho nhà cải tạo không đào móng, tiết kiệm không gian và vẫn đảm bảo an toàn.",
    dateLabel: "19 Jan",
    coverImage: galleryAt(18),
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
    coverImage: galleryAt(22),
    content: [
      "Giá phụ thuộc cấu hình và mức độ cá nhân hóa.",
      "Chi phí thi công và bảo trì cần được tính theo vòng đời.",
      "Nên khảo sát thực tế để có báo giá chuẩn.",
    ],
  },
];

export const NEWS_POSTS: Post[] = [
  {
    slug: "thi-cong-an-toan-kiem-dinh",
    title: "Thi công an toàn & kiểm định: 5 điểm cần lưu ý",
    excerpt:
      "Tổng hợp các điểm quan trọng trước khi bàn giao thang máy: an toàn, vận hành thử, nghiệm thu và kiểm định.",
    dateLabel: "06 Apr",
    coverImage: galleryAt(26),
    content: [
      "Luôn kiểm tra hố thang, cửa tầng và hệ thống an toàn trước khi chạy thử.",
      "Thiết lập quy trình nghiệm thu theo checklist, ghi nhận đầy đủ biên bản.",
      "Thực hiện kiểm định theo quy định trước khi đưa vào sử dụng.",
    ],
  },
  {
    slug: "bao-tri-dinh-ky-nen-lam-gi",
    title: "Bảo trì định kỳ nên làm gì để thang bền hơn?",
    excerpt:
      "Lịch bảo trì, các hạng mục kiểm tra và dấu hiệu cần gọi kỹ thuật ngay.",
    dateLabel: "30 Jan",
    coverImage: galleryAt(30),
    content: [
      "Vệ sinh, kiểm tra tiếp điểm, cảm biến cửa và phanh an toàn.",
      "Kiểm tra độ căng cáp, ray dẫn hướng, bôi trơn theo định kỳ.",
      "Khi có tiếng ồn bất thường hoặc rung lắc, nên gọi kỹ thuật sớm.",
    ],
  },
  {
    slug: "chon-thang-may-phu-hop-nha-pho",
    title: "Chọn thang máy phù hợp cho nhà phố 4–5 tầng",
    excerpt:
      "Gợi ý tải trọng, số điểm dừng và vật liệu cabin phù hợp diện tích và ngân sách.",
    dateLabel: "18 Mar",
    coverImage: galleryAt(34),
    content: [
      "Nhà phố thường dùng thang 300–450kg, 4–5 điểm dừng.",
      "Ưu tiên cabin gọn, vận hành êm và tiết kiệm điện.",
      "Nên khảo sát hiện trạng trước khi chốt báo giá.",
    ],
  },
];

