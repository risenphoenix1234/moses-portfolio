"use client";

const marqueeItems = [
  { text: "User Research", lime: false },
  { text: "UI Design", lime: true },
  { text: "Design Systems", lime: false },
  { text: "Brand Identity", lime: true },
  { text: "User Testing", lime: false },
  { text: "Project Management", lime: true },
  { text: "User Research", lime: false },
  { text: "UI Design", lime: true },
  { text: "Design Systems", lime: false },
  { text: "Brand Identity", lime: true },
  { text: "User Testing", lime: false },
  { text: "Project Management", lime: true },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "Strategy & Direction",
    desc: "I start every project by understanding the why. I help define the product vision, align with business goals, and set a clear direction that guides every design decision.",
    lime: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <rect x="14" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "UI & UX Design",
    desc: "I create designs that are intuitive, inclusive, and visually engaging. Every interface I design is crafted to feel seamless, purposeful, and easy to use.",
    lime: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        <circle cx="14" cy="14" r="2.5" />
        <line x1="16" y1="16" x2="18.5" y2="18.5" />
      </svg>
    ),
    title: "User Research",
    desc: "I believe good design starts with listening. I conduct interviews, surveys, and usability tests to uncover real user needs and translate those insights into meaningful solutions.",
    lime: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </svg>
    ),
    title: "Framer Development",
    desc: "Design and launch interactive, responsive websites quickly with no code, bringing ideas to life with smooth animations and modern layouts.",
    lime: false,
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full bg-white" style={{ fontFamily: "'Sora', sans-serif" }}>

      {/* ── MARQUEE TICKER ── */}
      <div className="w-full bg-black overflow-hidden py-4 md:py-5 group">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-base md:text-2xl font-bold mx-4 md:mx-6 gap-3 md:gap-4 transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: "'Sora', sans-serif",
                color: item.lime ? "#C8F135" : "#FFFFFF",
              }}
            >
              {item.text}
              <span className="text-gray-600 text-xs md:text-base font-normal">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1280px] mx-auto px-8 sm:px-6 md:px-10 py-12 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Left: heading */}
        <div className="w-full lg:w-[35%] lg:shrink-0 lg:sticky md:items-center lg:top-24 flex flex-col gap-4">
          <h2
            className="text-2xl sm:text-3xl  md:text-[2.6rem] font-black md:leading-10 leading-[1.5] tracking-[-0.01em] mb-2 md:mb-1 word-spacing-wide"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D", wordSpacing: "0.15em" }}
          >
            A comprehensive look at what I deliver and how  I deliver
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
            A closer look at what I design and the thoughtful process behind how it all comes together.
          </p>
        </div>

        {/* Right: 2x2 grid */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group/card rounded-2xl p-5 md:p-7 flex flex-col gap-3 md:gap-4 cursor-pointer transition-all duration-300 ease-[cubic-bezier(.22,.68,0,1.2)] hover:-translate-y-2 hover:scale-[1.015]"
              style={{
                backgroundColor: s.lime ? "#C8F135" : "#F0F0EE",
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = s.lime
                  ? "0 16px 40px rgba(160,200,0,0.30)"
                  : "0 16px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 0 transparent";
              }}
            >
              {/* Icon circle */}
              <div
                className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-[cubic-bezier(.22,.68,0,1.35)] group-hover/card:rotate-12 group-hover/card:scale-110"
                style={{ backgroundColor: "#0D0D0D", color: "#FFFFFF" }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                className="text-base md:text-lg font-bold transition-[letter-spacing] duration-200 group-hover/card:tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0D0D0D",
                }}
              >
                {s.title}
              </h3>

              <div className="flex-1" />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: s.lime ? "#2A2A1A" : "#6B6B6B" }}
              >
                {s.desc}
              </p>

              {/* Arrow chip — slides up on hover */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit opacity-0 translate-y-2 transition-all duration-200 delay-75 group-hover/card:opacity-100 group-hover/card:translate-y-0"
                style={{
                  backgroundColor: "#0D0D0D",
                  color: s.lime ? "#C8F135" : "#FFFFFF",
                }}
              >
                Explore ↗
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Sora:wght@400;500;600&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}