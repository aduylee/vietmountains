import {
  X,
  MapPin,
  Mountain as MountainIcon,
  Route,
  Clock3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Mountain } from "../data/mountains";

interface MountainDetailModalProps {
  mountain: Mountain | null;
  onClose: () => void;
}

export default function MountainDetailModal({
  mountain,
  onClose,
}: MountainDetailModalProps) {
  return (
    <AnimatePresence>
      {mountain && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(event) => event.stopPropagation()}
            className="relative z-[10000] max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative h-72 overflow-hidden md:h-[420px]">
              <img
                src={mountain.image}
                alt={mountain.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-6 right-16">
                <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                  <MountainIcon size={16} />
                  <span>{mountain.region}</span>
                </div>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                  {mountain.name}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* Height */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Độ cao
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white">
                    {mountain.height.toLocaleString()} m
                  </p>
                </div>

                {/* Location */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Địa điểm
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-white/50"
                    />

                    <p className="text-xl font-semibold text-white">
                      {mountain.province}
                    </p>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Độ khó
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <Route
                      size={16}
                      className="text-white/50"
                    />

                    <p className="text-xl font-semibold text-white">
                      {mountain.difficulty}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Thời gian
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <Clock3
                      size={16}
                      className="text-white/50"
                    />

                    <p className="text-xl font-semibold text-white">
                      {mountain.duration}
                    </p>
                  </div>
                </div>

              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Giới thiệu
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50 md:text-base">
                  {mountain.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Khu vực
                  </p>

                  <p className="mt-2 text-sm font-medium text-white/70">
                    {mountain.region}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
                >
                  Đóng
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}