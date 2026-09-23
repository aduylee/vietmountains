import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import mountainImage from "../assets/mountains.jpg";

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Hero({
  searchTerm,
  setSearchTerm,
}: HeroProps) {
  const handleExplore = () => {
    document
      .getElementById("featured-mountains")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mountainImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="max-w-4xl"
        >
          {/* Small Label */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
            Explore Vietnam
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            Khám phá những
            <br />
            <span className="text-white/70">
              đỉnh núi Việt Nam
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Hành trình khám phá những ngọn núi hùng vĩ,
            những cung đường trekking và vẻ đẹp thiên nhiên
            từ Bắc vào Nam.
          </p>

          {/* Search + Button */}
          <div className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            {/* Search Box */}
            <div className="flex flex-1 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
              <Search
                size={20}
                className="shrink-0 text-white/60"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Tìm kiếm ngọn núi..."
                className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
              />
            </div>

            {/* Explore Button */}
            <button
              type="button"
              onClick={handleExplore}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-white/80"
            >
              Khám phá ngay

              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/50"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}