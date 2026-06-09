"use client";

export default function ContactAndFooter() {
  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>

      {/* ── FOOTER ── */}
      <footer className="w-full px-6 md:px-16 py-8 bg-[#111111] border-t border-[#1E1E1E]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">

          <div>
            <p className="text-xs font-medium text-white mb-2">
              Designing systems that bring clarity and drive impact
            </p>
            <p className="text-[11px] text-[#9B9B9B]">
              © 2026 Aniebiet, All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-3">Contacts</p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+2347065340659" className="flex items-center gap-2 text-xs text-[#C8C8C8] no-underline hover:text-white transition">
                {/* phone svg */}
                +2347065340659
              </a>

              <a href="mailto:thenowfocus@gmail.com" className="flex items-center gap-2 text-xs text-[#C8C8C8] no-underline hover:text-white transition">
                {/* mail svg */}
                thenowfocus@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-3">Connect</p>
            <div className="flex flex-col gap-2.5">
              
              <a
                href="https://www.linkedin.com/in/aniebietmoses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C8C8C8] no-underline hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C8C8C8] no-underline hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C8C8C8] no-underline hover:text-white transition"
              >
                Facebook
              </a>

            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}