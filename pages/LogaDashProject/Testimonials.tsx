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
    float: "float-a",
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
    rotate: "4deg",
    size: "w-32 h-24 md:w-40 md:h-32",
    float: "float-b",
  },
  {
    url: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80",
    rotate: "6deg",
    size: "w-36 h-28 md:w-44 md:h-36",
    float: "float-b",
  },
  {
    url: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&q=80",
    rotate: "-4deg",
    size: "w-32 h-24 md:w-40 md:h-32",
    float: "float-a",
  },
];

function useReveal() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));

      els.forEach((el) => {
        el.style.transition =
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
        el.style.opacity = "0";
        const dir = el.dataset.dir;
        if (dir === "left")       el.style.transform = "translateX(-32px)";
        else if (dir === "right") el.style.transform = "translateX(32px)";
        else if (dir === "scale") el.style.transform = "scale(0.93)";
        else                      el.style.transform = "translateY(28px)";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "none";
            }, delay);
            observer.unobserve(el);
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
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
          border-color: #C8F135 !important;
        }

        @keyframes float-a {
          0%,100% { margin-top: 0;    }
          50%      { margin-top: -9px; }
        }
        @keyframes float-b {
          0%,100% { margin-top: 0;   }
          50%      { margin-top: 9px; }
        }
        .float-a { animation: float-a 4s   ease-in-out infinite; }
        .float-b { animation: float-b 4.6s ease-in-out infinite; }

        .cta-img {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
          position: relative;
        }
        .cta-img:hover {
          transform: scale(1.1) rotate(0deg) !important;
          box-shadow: 0 20px 48px rgba(0,0,0,0.5);
          z-index: 10;
        }

        .cta-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          display: inline-flex;
          align-items: center;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(200,241,53,0.45);
          filter: brightness(1.06);
        }
      `}</style>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full py-14 md:py-20 px-6 md:px-10 bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto">

          <p
            className="rv text-sm mb-2 text-[#9B9B9B]"
            data-dir="left"
            data-delay="0"
          >
            Clients Feedback
          </p>

          <h2
            className="rv text-3xl md:text-4xl font-black mb-8 md:mb-10 text-white"
            data-dir="left"
            data-delay="100"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Says
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rv t-card rounded-2xl p-6 flex flex-col justify-between bg-[#1A1A1A] border border-[#2A2A2A]"
                data-dir="scale"
                data-delay={i * 130}
              >
                <div>
                  <div className="flex gap-1 mb-4 text-xl text-[#F5C518]">★★★★★</div>
                  <p className="text-sm leading-relaxed mb-6 text-[#C8C8C8]">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0 bg-[#2A3A4A]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#9B9B9B]">{t.role}</p>
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
            className="rv rounded-3xl bg-[#1A1A1A] relative overflow-hidden min-h-[300px] flex items-center justify-center px-6 py-12 md:py-16"
            data-dir="scale"
            data-delay="0"
          >
            {/* Left images */}
            <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col justify-between py-8 px-6 gap-4">
              {ctaImages.slice(0, 2).map((img, i) => (
                <div
                  key={i}
                  className={`cta-img ${img.float} ${img.size} rounded-2xl overflow-hidden bg-cover bg-center`}
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    transform: `rotate(${img.rotate})`,
                  }}
                />
              ))}
            </div>

            {/* Center */}
            <div className="text-center z-10 px-4 md:px-64">
              <h2
                className="rv text-2xl md:text-3xl font-black mb-6 text-white"
                data-dir="up"
                data-delay="150"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Transform your Ideas into<br />Impactful Designs
              </h2>

              <div className="rv" data-dir="up" data-delay="270">
                <button className="cta-btn gap-2 text-sm font-semibold px-5 py-2.5 rounded-full mx-auto mb-5 bg-[#C8F135] text-[#0D0D0D]">
                  Collaborate With Me
                  <span className="w-3 h-3 rounded-full inline-block bg-[#0D0D0D] ml-2" />
                </button>
              </div>

              <p
                className="rv text-sm text-[#9B9B9B]"
                data-dir="up"
                data-delay="370"
              >
                Open to freelance, contract, and long-term collaborations
              </p>
            </div>

            {/* Right images */}
            <div className="hidden md:flex absolute right-0 top-0 bottom-0 flex-col justify-between py-8 px-6 gap-4">
              {ctaImages.slice(2, 4).map((img, i) => (
                <div
                  key={i}
                  className={`cta-img ${img.float} ${img.size} rounded-2xl overflow-hidden bg-cover bg-center`}
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    transform: `rotate(${img.rotate})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}