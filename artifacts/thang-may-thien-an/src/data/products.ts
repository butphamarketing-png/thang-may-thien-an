import { galleryAt } from "./site-images";

export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  priceLabel: string;
  image: string;
  highlights: string[];
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "thang-may-gia-dinh",
    title: "Thang máy gia đình",
    shortDescription:
      "Thiết kế gọn, vận hành êm, tối ưu cho nhà phố và biệt thự.",
    priceLabel: "Từ 280.000.000đ",
    image: galleryAt(0),
    highlights: ["Tiết kiệm diện tích", "Vận hành êm", "Thiết kế theo yêu cầu"],
    description:
      "Giải pháp thang máy gia đình tập trung vào an toàn, thẩm mỹ và sự tiện nghi. Thiết kế linh hoạt theo kích thước công trình, nhiều lựa chọn vật liệu và hoàn thiện nội thất cabin.",
  },
  {
    slug: "thang-may-tai-khach",
    title: "Thang máy tải khách",
    shortDescription:
      "Tối ưu lưu lượng di chuyển, phù hợp tòa nhà văn phòng và chung cư mini.",
    priceLabel: "Từ 420.000.000đ",
    image: galleryAt(5),
    highlights: ["Tải trọng đa dạng", "Độ bền cao", "Tiết kiệm năng lượng"],
    description:
      "Dòng thang tải khách có khả năng vận hành ổn định với lưu lượng sử dụng cao. Tùy chọn cấu hình tốc độ, tải trọng và tiêu chuẩn an toàn phù hợp từng loại công trình.",
  },
  {
    slug: "thang-may-tai-hang",
    title: "Thang máy tải hàng",
    shortDescription:
      "Khung chịu lực tốt, tối ưu vận chuyển hàng hóa cho kho xưởng và nhà máy.",
    priceLabel: "Từ 520.000.000đ",
    image: galleryAt(10),
    highlights: ["Kết cấu chắc chắn", "Tải trọng lớn", "Bền bỉ theo thời gian"],
    description:
      "Thiết kế ưu tiên độ bền và hiệu suất. Có thể tùy biến kích thước cabin và cửa theo loại hàng hóa, giúp quá trình vận chuyển an toàn và thuận tiện.",
  },
  {
    slug: "thang-cuon",
    title: "Thang cuốn",
    shortDescription:
      "Giải pháp di chuyển liên tục cho trung tâm thương mại, siêu thị và tòa nhà dịch vụ.",
    priceLabel: "Liên hệ báo giá",
    image: galleryAt(15),
    highlights: ["Lưu lượng lớn", "Vận hành ổn định", "Thẩm mỹ hiện đại"],
    description:
      "Thang cuốn phù hợp cho các khu vực có lưu lượng người qua lại lớn. Thiết kế tối ưu an toàn và bảo trì thuận tiện.",
  },
];
