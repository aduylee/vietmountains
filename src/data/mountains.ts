import fansipan from "../assets/fansipan.jpg";
import puTaLeng from "../assets/pu-ta-leng.jpg";
import taChiNhu from "../assets/ta-chi-nhu.jpg";
import taXua from "../assets/ta-xua.jpg";
import laoThan from "../assets/lao-than.jpg";
import taLienSon from "../assets/ta-lien-son.jpg";

export interface Mountain {
  id: number;
  name: string;
  height: number;
  province: string;
  image: string;
}

export const mountains: Mountain[] = [
  {
    id: 1,
    name: "Fansipan",
    height: 3143,
    province: "Lào Cai",
    image: fansipan,
  },
  {
    id: 2,
    name: "Pu Ta Leng",
    height: 3049,
    province: "Lai Châu",
    image: puTaLeng,
  },
  {
    id: 3,
    name: "Tà Chì Nhù",
    height: 2979,
    province: "Yên Bái",
    image: taChiNhu,
  },
  {
    id: 4,
    name: "Tà Xùa",
    height: 2865,
    province: "Sơn La",
    image: taXua,
  },
  {
    id: 5,
    name: "Lảo Thẩn",
    height: 2860,
    province: "Lào Cai",
    image: laoThan,
  },
  {
    id: 6,
    name: "Tả Liên Sơn",
    height: 2996,
    province: "Lai Châu",
    image: taLienSon,
  },
];