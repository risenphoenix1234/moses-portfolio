"use client";

import Image from "next/image";
import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? "0";
            setTimeout(() => {
              el.classList.add("revealed");
            }, Number(delay));
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

export default function HeroSection() {
  useScrollReveal();

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-reveal="fade-left"] { transform: translateX(-32px); }
        [data-reveal="fade-right"] { transform: translateX(32px); }
        [data-reveal="scale"] { transform: scale(0.94); }
        [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .float-badge { animation: float-badge 3.5s ease-in-out infinite; }

        @keyframes shimmer-btn {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .btn-primary {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-primary:hover {
          background: linear-gradient(90deg, #111 0%, #444 40%, #111 60%, #000 100%);
          background-size: 200% auto;
          animation: shimmer-btn 1.2s linear infinite;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .btn-accent {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .btn-accent:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(200, 241, 53, 0.45);
          filter: brightness(1.08);
        }
        .img-wrapper {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .img-wrapper:hover { transform: scale(1.02); }
      `}</style>

      <main
        className="font-sans bg-repeat overflow-hidden"
        style={{ backgroundImage: "url('/pattern1.jpg')", backgroundSize: "300px" }}
      >
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">

            <div
              data-reveal="fade-left"
              data-delay="0"
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-8"
              style={{ border: "1px solid #C8F135", color: "#5A5A3A" }}
            >
              👋 Hi, Aniebiet Moses Here
            </div>

            <h1
              data-reveal="fade-left"
              data-delay="100"
              className="text-[2rem] md:text-[2.9rem] leading-[1.2] font-black mb-6 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
            >
              A <span style={{ color: "#ABABC0" }}>creative product designer</span>
              <br />
              who creates user experiences that
              <br />
              solve real problems and drive results.
            </h1>

            <p
              data-reveal="fade-left"
              data-delay="200"
              className="text-base max-w-md leading-relaxed mb-8 mx-auto md:mx-0"
              style={{ color: "#6B6B6B" }}
            >
              I help brands turn ideas into well-crafted digital products through
              clean, strategic, and user-focused design.
            </p>

            <div
              data-reveal="fade-left"
              data-delay="320"
              className="flex items-center justify-center md:justify-start gap-4"
            >
              
               <a href="#footer"
                onClick={scrollToFooter}
                className="btn-primary text-white text-sm font-semibold px-7 py-3 rounded-full bg-black"
              >
                Contact Me
              </a>
              
               <a href="/projects"
                className="btn-accent text-black text-sm font-semibold px-7 py-3 rounded-full"
                style={{ backgroundColor: "#C8F135" }}
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-reveal="fade-right"
            data-delay="150"
            className="relative w-full md:w-[600px] md:max-w-none shrink-0 mt-6 md:mt-0"
          >
            <div className="float-badge absolute top-4 left-0 md:left-[-20px] z-20 flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 text-sm">
              <span className="pulse-dot w-2.5 h-2.5 rounded-full bg-lime-400" />
              Available for work
            </div>

            <div className="pt-10">
              <div
                data-reveal="scale"
                data-delay="250"
                className="img-wrapper relative w-full h-[320px] sm:h-[400px] md:h-[560px] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/moses.png"
                  alt="Aniebiet Moses"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}