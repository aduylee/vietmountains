import {
  Mountain,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 md:gap-20">

          {/* Left - Personal Information */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            {/* Name */}
            <div className="flex items-center gap-2">
              <Mountain
                size={25}
                strokeWidth={1.8}
              />

              <h2 className="text-xl font-semibold">
                Lê Anh Duy
              </h2>
            </div>

            {/* Role */}
            <p className="mt-2 text-sm text-white/50">
              Information Technology Student
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin size={17} />
                <span>Vietnam</span>
              </div>

              <a
                href="tel:0905042689"
                className="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <Phone size={17} />
                <span>0905042689</span>
              </a>

              <a
                href="mailto:leaduy21@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <Mail size={17} />
                <span>leaduy21@gmail.com</span>
              </a>

            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/leaduy21/?locale=vi_VN"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.55.45-1 1-1z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/aduylee"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.69 1.26 3.35.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Right - Project Information */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">

            <h3 className="text-xl font-semibold">
              VietMountains
            </h3>

            <div className="mt-5 max-w-md">
              <p className="text-sm leading-7 text-white/40">
                Dự án khám phá những ngọn núi, vùng núi và
                cung đường trekking trên khắp Việt Nam.
              </p>

              <p className="mt-4 text-sm text-white/30">
                Built with React + TypeScript
              </p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom */}
        <div className="relative flex items-center justify-center py-6">

          <p className="text-xs text-white/30 text-center">
            © 2026 Lê Anh Duy. All rights reserved. · VietMountains Project
          </p>

        </div>

      </div>

      {/* Back To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/60 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        <ArrowUp size={17} />
      </button>
    </footer>
  );
}