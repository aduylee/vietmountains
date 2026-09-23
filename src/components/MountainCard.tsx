import { MapPin, Mountain as MountainIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { Mountain } from "../data/mountains";

interface MountainCardProps {
  mountain: Mountain;
}

export default function MountainCard({
  mountain,
}: MountainCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={mountain.image}
          alt={mountain.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Mountain height */}
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-sm text-white backdrop-blur-md">
          {mountain.height.toLocaleString()} m
        </div>

        {/* Mountain name */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
            <MountainIcon size={15} />
            <span>Vietnam</span>
          </div>

          <h3 className="text-2xl font-semibold text-white">
            {mountain.name}
          </h3>
        </div>
      </div>

      {/* Card information */}
      <div className="flex items-center gap-2 px-5 py-4 text-sm text-white/60">
        <MapPin size={16} />
        <span>{mountain.province}</span>
      </div>
    </motion.article>
  );
}