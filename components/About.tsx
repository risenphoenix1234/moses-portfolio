"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2,  suffix: "+", label: "Years of\nexperience" },
  { value: 99, suffix: "%", label: "Clients\nSatisfaction" },
  { value: 6, suffix: "+", label: "Projects Done\nSuccessfully" },
  { value: 8, suffix: "+", label: "Clients\nWorldwide" },
];

/* ── Scroll-reveal hook ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("revealed"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      <span style={{ color: "#C8F135" }}>{suffix}</span>
    </span>
  );
}

export default function AboutExperienceSection() {
  useScrollReveal();

  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Sora:wght@400;500;600&display=swap');

        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal="fade-left"]  { transform: translateX(-30px); }
        [data-reveal="fade-right"] { transform: translateX(30px); }
        [data-reveal="scale"]      { transform: scale(0.93); }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        .stat-card {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: #C8F135 !important;
          box-shadow: 0 12px 32px rgba(200, 241, 53, 0.12);
        }

        .about-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .about-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
          background-color: #1a1a1a !important;
        }
      `}</style>

      {/* ── ABOUT ME ── */}
      <section className="max-w-[1280px] mx-auto px-10 md:px-10 py-12 md:py-20 flex flex-col md:flex-row gap-10 md:gap-20 items-start">

        {/* Left: heading */}
        <div
          data-reveal="fade-left"
          data-delay="0"
          className="w-full md:w-[280px] shrink-0"
        >
          <h2
            className="text-[1.8rem] font-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
          >
            About Me
          </h2>
        </div>

        {/* Right: content */}
        <div className="flex-1">
          <p
            data-reveal="fade-right"
            data-delay="80"
            className="text-base leading-relaxed mb-6"
            style={{ color: "#3A3A3A" }}
          >
            I design digital experiences people actually enjoy using.
            <br />
            I work with Figma and Framer to craft designs that balance function and
            flow, making complex tasks feel simple. I collaborate closely with
            developers to ensure every interaction is feasible, polished, and seamless.
          </p>

          <p
            data-reveal="fade-right"
            data-delay="180"
            className="text-base leading-relaxed mb-8"
            style={{ color: "#3A3A3A" }}
          >
            <span className="font-bold" style={{ color: "#0D0D0D" }}>My Mission</span>{" "}
            is to assist startups and enterprises in creating emotional bond between
            their products and satisfied, engaged customers.
          </p>

          <div data-reveal="fade-right" data-delay="280">
            <button
              className="about-btn flex items-center gap-2  text-white text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{ backgroundColor: "#0D0D0D" }}
            >
            <a href="/about">  About Me
              <span
                className="w-3 h-3 rounded-full ml-3 inline-block"
                style={{ backgroundColor: "#C8F135" }}
              />
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* ── MY EXPERIENCE ── */}
      <section className="w-full py-12 md:py-20" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">

          {/* Heading */}
          <div className="mb-6 md:mb-10">
            <p
              data-reveal="fade-left"
              data-delay="0"
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
            >
              My
            </p>
            <p
              data-reveal="fade-left"
              data-delay="80"
              className="text-4xl md:text-5xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
            >
              Experience
            </p>
          </div>

          {/* Subtitle */}
          <p
            data-reveal
            data-delay="160"
            className="text-sm leading-relaxed max-w-xl mb-10 md:mb-12"
            style={{ color: "#9B9B9B" }}
          >
            Extensive experience in product design, brand identity, and user research —
            always committed to delivering the best results for every client.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                data-reveal="scale"
                data-delay={i * 100}
                className="stat-card rounded-2xl p-5 md:p-7 flex flex-col justify-between min-h-[120px] md:min-h-[130px]"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <p
                  className="text-3xl md:text-4xl font-black"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
                >
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm mt-4 whitespace-pre-line" style={{ color: "#9B9B9B" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}