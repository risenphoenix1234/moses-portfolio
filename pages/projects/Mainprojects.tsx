"use client";

import { useState } from "react";
import Link from "next/link";

const filters = ["All", "B2B", "B2C", "SaaS", "Fintech"];

const projects = [
  {
    title: "HireAFixer",
    desc: "A service marketplace connecting users with trusted technicians and artisans on demand.",
    category: ["All", "B2C"],
    bg: "#5A6E72",
    accent: true,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=60",
    link: "/HireAFixer",
  },
  {
    title: "Flospay",
    desc: "A fintech platform enabling fast, secure digital payments and transactions.",
    category: ["All", "Fintech", "B2C"],
    bg: "#3A4A40",
    accent: false,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    link: "/Flospay",
  },
  {
    title: "LogaDash",
    desc: "A logistics dashboard built for real-time tracking, analytics, and operational control.",
    category: ["All", "B2B"],
    bg: "#3A4A50",
    accent: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    link: "/LogaDashProject",
  },
  {
    title: "Proofboard",
    desc: "A SaaS collaboration tool for managing creative proofs, feedback, and approvals.",
    category: ["All", "SaaS", "B2B"],
    bg: "#4A5060",
    accent: false,
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=60",
    link: "/proofboard",
  },
  {
    title: "SafeNaija",
    desc: "A safety-focused platform designed to improve awareness, reporting, and community security.",
    category: ["All", "B2C"],
    bg: "#5A4A50",
    accent: true,
   image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=60",
    link: "/SafeNaija",
  },
];

export default function Mainprojects() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter((p) => p.category.includes(active));

  return (
    <div style={{ fontFamily: "'Sora', sans-serif", backgroundColor: "#fff" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 mt-10">

        {/* Heading */}
        <h1
          className="font-black text-4xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0D0D0D" }}
        >
          All Projects
        </h1>
        <p
          className="text-sm mb-10"
          style={{ color: "#6B6B6B", maxWidth: 400, lineHeight: 1.6 }}
        >
          A selection of work focused on complex systems, thoughtful design, and measurable impact.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: active === f ? "#C8F135" : "#F0F0F0",
                color: active === f ? "#0D0D0D" : "#6B6B6B",
                border: "none",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Link key={i} href={p.link} className="block">
              <div
                className="rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: p.bg }}
              >
                {/* Image */}
                <div style={{ height: "clamp(160px, 30vw, 220px)", position: "relative", overflow: "hidden" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.25)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5" style={{ background: "rgba(0,0,0,0.3)" }}>
                  <p
                    className="font-bold text-sm text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="text-xs mb-4"
                    style={{ color: "#AABBC0", lineHeight: 1.5 }}
                  >
                    {p.desc}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white">
                      View Case Study
                    </span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: p.accent ? "#C8F135" : "transparent",
                        border: p.accent
                          ? "none"
                          : "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M1.5 5h7M5 1.5l3.5 3.5L5 8.5"
                          stroke={p.accent ? "#0D0D0D" : "#fff"}
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Sora:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
}