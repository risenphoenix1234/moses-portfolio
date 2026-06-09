"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "HireAfixer App",
    desc: "A platform that connects users with verified service providers for home repairs and small tasks.",
    accent: true,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    url: "/HireAFixer",
  },
  {
    title: "ProofBoard",
    desc: "A collaborative task and issue tracking system designed to streamline workflows and team productivity.",
    accent: false,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    url: "/proofboard",
  },
  {
    title: "Flospay Fintech App",
    desc: "A seamless digital payment platform designed for fast, secure transactions.",
    accent: true,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    url: "/Flospay",
  },
  {
    title: "LogaDash",
    desc: "A smart logistics and food delivery system with real-time tracking and multi-user support.",
    accent: false,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    url: "/LogaDashProject",
  },
];

const INITIAL_COUNT = 2;

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <div className="bg-white">
      <div className="w-full bg-white max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-12 font-sans">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-black text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          See More Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {visibleProjects.map((p, i) => (
            <Link key={p.title} href={p.url} className="block">
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "1 / 1",
                  animation:
                    i >= INITIAL_COUNT
                      ? "fadeSlideIn 0.45s ease forwards"
                      : "none",
                  opacity: i >= INITIAL_COUNT ? 0 : 1,
                  animationDelay: `${(i - INITIAL_COUNT) * 0.1}s`,
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1a2a30] opacity-60" />

                {/* Footer bar */}
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-[rgba(20,30,35,0.88)] backdrop-blur-md px-4 sm:px-[18px] py-3 sm:py-4 flex justify-between items-end">
                  <div>
                    <p
                      className="text-white font-extrabold text-[14px] sm:text-[15px] mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.title}
                    </p>
                    <p className="text-[#aabbc4] text-[10px] sm:text-[11px] leading-snug max-w-[180px] sm:max-w-[200px]">
                      {p.desc}
                    </p>
                  </div>

                  {/* Arrow btn */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-transform hover:scale-110 ${
                      p.accent
                        ? "bg-[#C8F135]"
                        : "bg-transparent border border-white/40"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke={p.accent ? "#0D0D0D" : "#fff"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Toggle */}
        {projects.length > INITIAL_COUNT && (
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C8A200]/50 text-[13px] text-[#C8A200] font-medium hover:bg-[#C8A200]/8 transition-colors duration-200 cursor-pointer"
            >
              {expanded ? (
                <>
                  Show less
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 9l4-4 4 4" stroke="#C8A200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              ) : (
                <>
                  See more projects
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#C8A200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}