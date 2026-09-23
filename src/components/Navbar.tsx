import { Mountain, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  {
    label: "Trang chủ",
    target: "home",
  },
  {
    label: "Khám phá",
    target: "featured-mountains",
  },
  {
    label: "Bản đồ",
    target: "map",
  },
  {
    label: "Về chúng tôi",
    target: "about",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (target: string) => {
    document
      .getElementById(target)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-[100]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-2 text-white"
        >
          <Mountain size={28} />

          <span className="text-xl font-bold tracking-wide">
            VietMountains
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavigation(item.target)}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full border border-white/20 bg-black/20 p-2 text-white backdrop-blur-md transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-3">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() =>
                    handleNavigation(item.target)
                  }
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}