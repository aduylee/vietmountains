import fansipan from "../assets/fansipan.jpg";
import puTaLeng from "../assets/pu-ta-leng.jpg";
import taChiNhu from "../assets/ta-chi-nhu.jpg";
import taXua from "../assets/ta-xua.jpg";
import laoThan from "../assets/lao-than.jpg";
import taLienSon from "../assets/ta-lien-son.jpg";
import mountainPlaceholder from "../assets/mountains.jpg";

export interface Mountain {
  id: number;
  name: string;
  height: number;
  province: string;
  region: string;
  difficulty: string;
  duration: string;
  description: string;
  image: string;
  latitude: number;
  longitude: number;
}

export const mountains: Mountain[] = [
  // =========================
  // TÂY BẮC
  // =========================
  {
    id: 1,
    name: "Fansipan",
    height: 3143,
    province: "Lào Cai",
    region: "Tây Bắc",
    difficulty: "Trung bình",
    duration: "1–2 ngày",
    description:
      "Fansipan là đỉnh núi cao nhất Việt Nam, nằm trong dãy Hoàng Liên Sơn và là một trong những điểm nổi bật của vùng Tây Bắc.",
    image: fansipan,
    latitude: 22.3033,
    longitude: 103.775,
  },
  {
    id: 2,
    name: "Pu Ta Leng",
    height: 3049,
    province: "Lai Châu",
    region: "Tây Bắc",
    difficulty: "Khó",
    duration: "2–3 ngày",
    description:
      "Pu Ta Leng nổi bật với địa hình núi cao, rừng và những cung đường trekking dài.",
    image: puTaLeng,
    latitude: 22.3537,
    longitude: 103.6047,
  },
  {
    id: 3,
    name: "Tà Chì Nhù",
    height: 2979,
    province: "Yên Bái",
    region: "Tây Bắc",
    difficulty: "Khó",
    duration: "2 ngày",
    description:
      "Tà Chì Nhù là một điểm trekking nổi tiếng với địa hình núi cao và cảnh quan rộng mở.",
    image: taChiNhu,
    latitude: 21.7285,
    longitude: 104.215,
  },
  {
    id: 4,
    name: "Tà Xùa",
    height: 2865,
    province: "Sơn La",
    region: "Tây Bắc",
    difficulty: "Trung bình",
    duration: "1–2 ngày",
    description:
      "Tà Xùa được biết đến với địa hình núi và những cung đường khám phá đặc trưng của vùng Tây Bắc.",
    image: taXua,
    latitude: 21.3575,
    longitude: 103.56,
  },
  {
    id: 5,
    name: "Lảo Thẩn",
    height: 2860,
    province: "Lào Cai",
    region: "Tây Bắc",
    difficulty: "Trung bình",
    duration: "1–2 ngày",
    description:
      "Lảo Thẩn là điểm trekking được nhiều người yêu thích khi khám phá vùng núi Lào Cai.",
    image: laoThan,
    latitude: 22.25,
    longitude: 103.7,
  },
  {
    id: 6,
    name: "Tả Liên Sơn",
    height: 2996,
    province: "Lai Châu",
    region: "Tây Bắc",
    difficulty: "Khó",
    duration: "2–3 ngày",
    description:
      "Tả Liên Sơn mang đặc trưng núi cao, rừng núi và các hành trình trekking thử thách.",
    image: taLienSon,
    latitude: 22.35,
    longitude: 103.6,
  },

  // =========================
  // ĐÔNG BẮC
  // =========================
  {
    id: 7,
    name: "Tây Côn Lĩnh",
    height: 2428,
    province: "Tuyên Quang",
    region: "Đông Bắc",
    difficulty: "Khó",
    duration: "2–3 ngày",
    description:
      "Tây Côn Lĩnh nằm ở khu vực phía Tây Bắc Tuyên Quang, nổi bật với địa hình núi cao và rừng già.",
    image: mountainPlaceholder,
    latitude: 22.800,
    longitude: 104.740,
  },
  {
    id: 8,
    name: "Phja Oắc",
    height: 1931,
    province: "Cao Bằng",
    region: "Đông Bắc",
    difficulty: "Trung bình",
    duration: "1–2 ngày",
    description:
      "Phja Oắc là một đỉnh núi nổi bật ở Cao Bằng, nằm trong vùng núi Phja Oắc – Phja Đén.",
    image: mountainPlaceholder,
    latitude: 22.633,
    longitude: 105.850,
  },
  {
    id: 9,
    name: "Mẫu Sơn",
    height: 1541,
    province: "Lạng Sơn",
    region: "Đông Bắc",
    difficulty: "Dễ",
    duration: "1 ngày",
    description:
      "Mẫu Sơn là vùng núi cao của Lạng Sơn với nhiều đỉnh núi và hệ sinh thái rừng đặc trưng.",
    image: mountainPlaceholder,
    latitude: 21.850,
    longitude: 106.950,
  },

  // =========================
  // MIỀN TRUNG
  // =========================
  {
    id: 10,
    name: "Bạch Mã",
    height: 1450,
    province: "Huế",
    region: "Miền Trung",
    difficulty: "Trung bình",
    duration: "1–2 ngày",
    description:
      "Núi Bạch Mã nằm trong dãy Trường Sơn Bắc, nổi bật với rừng tự nhiên và các tuyến trekking xuyên rừng.",
    image: mountainPlaceholder,
    latitude: 16.199,
    longitude: 107.858,
  },

  // =========================
  // TÂY NGUYÊN
  // =========================
  {
    id: 11,
    name: "Ngọc Linh",
    height: 2598,
    province: "Kon Tum",
    region: "Tây Nguyên",
    difficulty: "Khó",
    duration: "2–4 ngày",
    description:
      "Khối núi Ngọc Linh là một vùng núi cao nổi bật với địa hình chia cắt mạnh và hệ sinh thái rừng đặc trưng.",
    image: mountainPlaceholder,
    latitude: 15.063,
    longitude: 107.998,
  },
  {
    id: 12,
    name: "Chư Yang Sin",
    height: 2442,
    province: "Đắk Lắk",
    region: "Tây Nguyên",
    difficulty: "Khó",
    duration: "2–3 ngày",
    description:
      "Chư Yang Sin là đỉnh núi cao nổi bật ở khu vực Nam Trường Sơn, thuộc Vườn quốc gia Chư Yang Sin.",
    image: mountainPlaceholder,
    latitude: 12.650,
    longitude: 108.350,
  },

  // =========================
  // MIỀN NAM
  // =========================
  {
    id: 13,
    name: "Bà Đen",
    height: 986,
    province: "Tây Ninh",
    region: "Miền Nam",
    difficulty: "Trung bình",
    duration: "1 ngày",
    description:
      "Núi Bà Đen là một điểm núi nổi bật ở Đông Nam Bộ, với nhiều tuyến tiếp cận và cảnh quan rộng mở từ khu vực đỉnh.",
    image: mountainPlaceholder,
    latitude: 11.307,
    longitude: 106.157,
  },
  {
    id: 14,
    name: "Chứa Chan",
    height: 837,
    province: "Đồng Nai",
    region: "Miền Nam",
    difficulty: "Trung bình",
    duration: "1 ngày",
    description:
      "Núi Chứa Chan là một điểm núi nổi bật ở Đồng Nai, có đỉnh cao khoảng 837 m.",
    image: mountainPlaceholder,
    latitude: 10.925,
    longitude: 107.405,
  },

  // =========================
  // MIỀN TÂY
  // =========================
  {
    id: 15,
    name: "Núi Cấm",
    height: 705,
    province: "An Giang",
    region: "Miền Tây",
    difficulty: "Dễ",
    duration: "1 ngày",
    description:
      "Núi Cấm thuộc vùng Thất Sơn của An Giang, nổi bật với địa hình núi giữa đồng bằng.",
    image: mountainPlaceholder,
    latitude: 10.525,
    longitude: 104.973,
  },
  {
    id: 16,
    name: "Núi Cô Tô",
    height: 614,
    province: "An Giang",
    region: "Miền Tây",
    difficulty: "Dễ",
    duration: "1 ngày",
    description:
      "Núi Cô Tô là một ngọn núi thuộc vùng Thất Sơn của An Giang, có độ cao khoảng 614 m.",
    image: mountainPlaceholder,
    latitude: 10.430,
    longitude: 104.940,
  },
];