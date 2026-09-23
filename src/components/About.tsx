import {
  Mountain,
  Map,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

const regions = [
  {
    number: "01",
    icon: Mountain,
    title: "Tây Bắc",
    description:
      "Nơi tập trung nhiều đỉnh núi cao với địa hình hiểm trở, thung lũng và những cung đường trekking nổi tiếng.",
  },
  {
    number: "02",
    icon: Map,
    title: "Đông Bắc",
    description:
      "Khám phá những vùng núi hoang sơ, rừng núi và các cung đường trekking đặc trưng của miền Bắc.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Miền Trung & Tây Nguyên",
    description:
      "Những dãy núi trải dài với địa hình đa dạng, rừng tự nhiên và nhiều đỉnh núi đáng khám phá.",
  },
  {
    number: "04",
    icon: Mountain,
    title: "Miền Nam & Miền Tây",
    description:
      "Khám phá những ngọn núi và vùng đồi núi phía Nam, từ An Giang đến các khu vực miền Đông Nam Bộ.",
  },
];

const features = [
  {
    icon: Mountain,
    title: "Đỉnh núi",
    description:
      "Thông tin về những đỉnh núi nổi bật trên khắp Việt Nam.",
  },
  {
    icon: Map,
    title: "Trekking",
    description:
      "Khám phá cung đường, địa hình và hành trình leo núi.",
  },
  {
    icon: Compass,
    title: "Thiên nhiên",
    description:
      "Chiêm ngưỡng cảnh quan núi rừng và thiên nhiên xung quanh.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-white/40">
            <Mountain size={17} />

            <p className="text-xs font-medium uppercase tracking-[0.3em]">
              About VietMountains
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Khám phá núi
            <br />
            <span className="text-white/50">
              khắp Việt Nam
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
            VietMountains là nơi khám phá những ngọn núi,
            vùng núi và cung đường trekking trên khắp Việt Nam,
            từ miền Bắc đến miền Nam.
          </p>
        </motion.div>

        {/* Regions */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, index) => {
            const Icon = region.icon;

            return (
              <motion.div
                key={region.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Top */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/30">
                    {region.number}
                  </span>

                  <Icon
                    size={20}
                    className="text-white/30 transition group-hover:text-white/70"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {region.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-white/40">
                  {region.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Features */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 border-t border-white/10 pt-10"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon
                      size={18}
                      className="text-white/40 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 border-t border-white/10 pt-7 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            VietMountains
          </p>

          <p className="mt-2 text-base text-white/50 md:text-lg">
            Những đỉnh núi. Những cung đường. Những hành trình.
          </p>
        </motion.div>

      </div>
    </section>
  );
}