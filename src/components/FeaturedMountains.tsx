import { useState } from "react";
import { motion } from "framer-motion";

import MountainCard from "./MountainCard";
import MountainDetailModal from "./MountainDetailModal";

import type { Mountain } from "../data/mountains";

interface FeaturedMountainsProps {
  mountains: Mountain[];
}

export default function FeaturedMountains({
  mountains,
}: FeaturedMountainsProps) {
  const [selectedMountain, setSelectedMountain] =
    useState<Mountain | null>(null);

  return (
    <>
      <section
        id="featured-mountains"
        className="bg-black px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
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
              duration: 0.6,
            }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
              Discover Vietnam
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Những đỉnh núi nổi bật
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 md:text-lg">
              Khám phá những đỉnh núi hùng vĩ và những cung đường
              trekking đặc biệt của Việt Nam.
            </p>
          </motion.div>

          {/* Mountain Grid */}
          {mountains.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mountains.map((mountain) => (
                <MountainCard
                  key={mountain.id}
                  mountain={mountain}
                  onClick={() =>
                    setSelectedMountain(mountain)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
              <p className="text-lg text-white/60">
                Không tìm thấy ngọn núi nào.
              </p>

              <p className="mt-2 text-sm text-white/40">
                Hãy thử tìm với tên ngọn núi khác.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Detail Modal */}
      <MountainDetailModal
        mountain={selectedMountain}
        onClose={() => setSelectedMountain(null)}
      />
    </>
  );
}