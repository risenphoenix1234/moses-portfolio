"use client";

export default function ContactAndFooter() {
  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>

   

      {/* ── FOOTER ── */}
      <footer className="w-full px-6 md:px-16 py-8 bg-[#111111] border-t border-[#1E1E1E]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10">

          <div id="footer">
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
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M13 9.8c0 .2-.05.4-.16.6-.1.19-.24.37-.41.52-.28.26-.59.38-.91.38-.23 0-.47-.05-.73-.16a7.3 7.3 0 0 1-.73-.39 12.7 12.7 0 0 1-.7-.54 12.3 12.3 0 0 1-.66-.65 12.3 12.3 0 0 1-.54-.7 7.3 7.3 0 0 1-.39-.72c-.1-.26-.16-.5-.16-.73 0-.22.04-.43.13-.63.09-.2.23-.38.41-.54L9.6 5.3c.15-.14.31-.21.48-.21.2 0 .37.06.52.19l1.08 1.08c.13.13.2.29.2.47 0 .12-.03.24-.1.36a1.6 1.6 0 0 1-.26.36l-.36.37a.24.24 0 0 0-.07.18c0 .07.01.13.04.2.07.14.2.32.38.54.18.22.37.44.57.65.21.21.42.4.64.57.22.18.4.3.55.37.06.03.12.04.19.04a.25.25 0 0 0 .18-.07l.37-.37c.11-.11.23-.19.36-.24.13-.05.25-.08.37-.08.18 0 .34.06.47.18l1.1 1.1c.13.13.19.29.19.47Z" fill="#9B9B9B"/>
                </svg>
                +2347065340659
              </a>

              <a href="mailto:thenowfocus@gmail.com" className="flex items-center gap-2 text-xs text-[#C8C8C8] no-underline hover:text-white transition">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h9A1.5 1.5 0 0 1 13 3.5v7A1.5 1.5 0 0 1 11.5 12h-9A1.5 1.5 0 0 1 1 10.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v.34l5 3.12 5-3.12V3.5a.5.5 0 0 0-.5-.5h-9ZM12 4.84l-4.72 2.95a.5.5 0 0 1-.52 0L2 4.84V10.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V4.84Z" fill="#9B9B9B"/>
                </svg>
                thenowfocus@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-3">Connect</p>
            <div className="flex flex-col gap-2.5">
              {["Linkedin", "Instagram", "Facebook"].map((s) => (
                <a key={s} href="#" className="text-xs text-[#C8C8C8] no-underline hover:text-white transition">
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}