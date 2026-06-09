"use client";

import { useEffect } from "react";

const testimonials = [
  {
    name: "Nonso Michael",
    role: "Product Manager",
    quote: "Working with Aniebiet was seamless. His attention to detail and ability to translate our ideas into amazing product was great.",
    initials: "NM",
  },
  {
    name: "Alewi Felix",
    role: "Frontend Developer",
    quote: "Collaboration was smooth from start to finish. His designs were clear, feasible, and easy to implement.",
    initials: "AF",
  },
  {
    name: "Kathryn Murphy",
    role: "McDonald's",
    quote: "The designs are not only visually appealing but also intuitive and user-friendly. Truly understands how to craft experience.",
    initials: "KM",
  },
];

const ctaImages = [
  {
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    rotate: "-6deg",
    size: "w-36 h-28 md:w-44 md:h-36",
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
    rotate: "4deg",
    size: "w-32 h-24 md:w-40 md:h-32",
  },
  {
    url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80",
    rotate: "6deg",
    size: "w-36 h-28 md:w-44 md:h-36",
  },
  {
    url: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&q=80",
    rotate: "-4deg",
    size: "w-32 h-24 md:w-40 md:h-32",
  },
];

function useReveal() {
  useEffect(() => {
    // Wait one frame so the browser has painted, then set initial hidden states
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal-me"));

      // Apply initial hidden styles via JS (avoids SSR/hydration mismatch)
      els.forEach((el) => {
        el.style.transition = "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)";
        el.style.opacity = "0";
        const dir = el.dataset.reveal;
        if (dir === "left")       el.style.transform = "translateX(-36px)";
        else if (dir === "right") el.style.transform = "translateX(36px)";
        else if (dir === "scale") el.style.transform = "scale(0.92)";
        else                      el.style.transform = "translateY(28px)";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay = Number(el.dataset.delay ?? 0);
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0) translateX(0) scale(1)";
              }, delay);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, []);
}

export default function TestimonialsAndCTA() {
  useReveal();

  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Sora:wght@400;500;600&display=swap');

        .t-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .t-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 48px rgba(0,0,0,0.08);
          border-color: #C8F135 !important;
        }

        .cta-img {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .cta-img:hover {
          transform: scale(1.08) rotate(0deg) !important;
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
          z-index: 10;
        }

        @keyframes float-a {
          0%,100% { margin-top: 0px; }
          50%      { margin-top: -8px; }
        }
        @keyframes float-b {
          0%,100% { margin-top: 0px; }
          50%      { margin-top: 8px; }
        }
        .float-a { animation: float-a 4s ease-in-out infinite; }
        .float-b { animation: float-b 4.6s ease-in-out infinite; }

        .cta-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(200,241,53,0.4);
          filter: brightness(1.07);
        }

        .section-label::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: #C8F135;
          margin-right: 8px;
          vertical-align: middle;
        }
      `}</style>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full px-4 md:px-10 py-14 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto">

          <div className="mb-10 md:mb-14">
            <p
              className="reveal-me section-label text-xs font-semibold uppercase tracking-widest mb-3"
              data-reveal="left"
              data-delay="0"
              style={{ color: "#9B9B9B" }}
            >
              What clients say
            </p>
            <h2
              className="reveal-me text-[1.8rem] md:text-[2.4rem] font-black tracking-tight leading-tight"
              data-reveal="left"
              data-delay="100"
              style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
            >
              Kind words from<br />people I've worked with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal-me t-card rounded-2xl p-6 md:p-7 flex flex-col gap-5"
                data-reveal="scale"
                data-delay={i * 130}
                style={{ border: "1.5px solid #EBEBEB", background: "#FAFAFA" }}
              >
                <span
                  className="text-4xl font-black leading-none select-none"
                  style={{ color: "#C8F135", fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#3A3A3A" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#EBEBEB" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "#0D0D0D" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#0D0D0D" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#9B9B9B" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full px-4 md:px-10 py-10 md:py-14 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="reveal-me rounded-3xl bg-[#1A1A1A] relative overflow-hidden min-h-[300px] flex items-center justify-center px-6 py-12 md:py-16"
            data-reveal="scale"
            data-delay="0"
          >
            {/* Left images */}
            <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col justify-between py-8 px-6 gap-4">
              {ctaImages.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className={`cta-img ${img.size} ${i === 0 ? "float-a" : "float-b"} rounded-2xl overflow-hidden bg-cover bg-center`}
                  style={{ backgroundImage: `url('${img.url}')`, transform: `rotate(${img.rotate})` }}
                />
              ))}
            </div>

            {/* Center */}
            <div className="text-center z-10 px-4 md:px-64">
              <h2
                className="reveal-me text-2xl md:text-3xl font-black mb-6 text-white"
                data-reveal="up"
                data-delay="200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Transform your Ideas into<br />Impactful Designs
              </h2>
              <div className="reveal-me" data-reveal="up" data-delay="320">
                <button className="cta-btn flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full mx-auto mb-5 bg-[#C8F135] text-[#0D0D0D]">
                  Collaborate With Me
                  <span className="w-3 h-3 rounded-full inline-block bg-[#0D0D0D]" />
                </button>
              </div>
              <p className="reveal-me text-sm text-[#9B9B9B]" data-reveal="up" data-delay="420">
                Open to freelance, contract, and long-term collaborations
              </p>
            </div>

            {/* Right images */}
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 flex-col justify-between py-8 px-6 gap-4">
              {ctaImages.slice(2, 4).map((img, i) => (
                <div
                  key={i}
                  className={`cta-img ${img.size} ${i === 0 ? "float-b" : "float-a"} rounded-2xl overflow-hidden bg-cover bg-center`}
                  style={{ backgroundImage: `url('${img.url}')`, transform: `rotate(${img.rotate})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}