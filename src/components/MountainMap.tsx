import { Compass, MapPinned, Mountain } from "lucide-react";
import { motion } from "framer-motion";

const regions = [
  {
    name: "Tây Bắc",
    description:
      "Nơi tập trung những đỉnh núi cao và những cung đường trekking nổi tiếng nhất Việt Nam.",
    mountains: "Fansipan · Pu Ta Leng · Tả Liên Sơn",
  },
  {
    name: "Đông Bắc",
    description:
      "Vùng núi với cảnh quan hùng vĩ, thung lũng xanh và những cung đường khám phá đặc biệt.",
    mountains: "Mẫu Sơn · Tây Côn Lĩnh · Phja Oắc",
  },
  {
    name: "Miền Trung",
    description:
      "Những dãy núi trải dài với thiên nhiên đa dạng và nhiều địa điểm trekking hấp dẫn.",
    mountains: "Bạch Mã · Ngọc Linh · Chư Yang Sin",
  },
];

export default function MountainMap() {
  return (
    <section
      id="map"
      className="bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-2 text-white/50">
            <MapPinned size={18} />

            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Explore by region
            </p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Bản đồ núi Việt Nam
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50 md:text-lg">
            Khám phá những vùng núi nổi bật và tìm cảm hứng
            cho hành trình tiếp theo của bạn.
          </p>
        </motion.div>

        {/* Map Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

            <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl" />
          </div>

          {/* Map Header */}
          <div className="relative z-10 mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Compass
                    size={22}
                    className="text-white/70"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Các vùng núi nổi bật
                  </h3>

                  <p className="mt-1 text-sm text-white/40">
                    Vietnam Mountain Regions
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/40">
              <Mountain size={16} />

              <span>Khám phá từ Bắc vào Nam</span>
            </div>
          </div>

          {/* Region Cards */}
          <div className="relative z-10 grid gap-5 md:grid-cols-3">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
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
                  y: -6,
                }}
                className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-white/30">
                    0{index + 1}
                  </span>

                  <Mountain
                    size={20}
                    className="text-white/40 transition group-hover:text-white"
                  />
                </div>

                {/* Region name */}
                <h4 className="text-2xl font-semibold text-white">
                  {region.name}
                </h4>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-white/50">
                  {region.description}
                </p>

                {/* Mountains */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Núi nổi bật
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {region.mountains}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}