"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full max-w-[1280px] mx-auto px-10 sm:px-6 md:px-12 py-12 font-sans">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-7 gap-3 sm:gap-0">
        <h2
          className="text-2xl sm:text-[1.75rem] font-black leading-tight text-[#0D0D0D]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Creativity Meets Functionality, Explore<br className="hidden sm:block" /> My Design
        </h2>

        <Link
          href="/projects"
          className="text-[13px] text-[#C8A200] font-medium no-underline hover:underline sm:mt-1 whitespace-nowrap hidden sm:block"
        >
          View all Projects →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:gap-7 sm:grid-cols-2 gap-5 sm:gap-3.5">
      {projects.map((p, i) => (
  <Link key={i} href={p.url} className="block">
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "1 / 1",
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
        transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered === i
          ? p.accent
            ? "0 2px 8px rgba(160,200,0,0.1)"
            : "0 2px 8px rgba(0,0,0,0.06)"
          : "none",
      }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image — subtle zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${p.image}')`,
                  transition: "transform 0.5s cubic-bezier(.22,.68,0,1.2)",
                  transform: hovered === i ? "scale(1.07)" : "scale(1)",
                }}
              />

              {/* Overlay — lightens slightly on hover */}
              <div
                className="absolute inset-0 bg-[#1a2a30]"
                style={{
                  transition: "opacity 0.3s ease",
                  opacity: hovered === i ? 0.45 : 0.60,
                }}
              />

              {/* Shine sweep on hover */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
                  transition: "transform 0.5s ease",
                  transform: hovered === i ? "translateX(100%)" : "translateX(-100%)",
                }}
              />

              {/* Footer bar */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 backdrop-blur-md px-4 sm:px-[18px] py-3 sm:py-4 flex justify-between items-end"
                style={{
                  background: "rgba(20,30,35,0.88)",
                  transition: "padding 0.3s ease",
                  paddingBottom: hovered === i ? "20px" : undefined,
                }}
              >
                <div>
                  <p
                    className="text-white font-extrabold text-[14px] sm:text-[15px] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="text-[#aabbc4] text-[10px] sm:text-[11px] leading-snug max-w-[180px] sm:max-w-[200px]"
                    style={{
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      opacity: hovered === i ? 1 : 0.75,
                      transform: hovered === i ? "translateY(0)" : "translateY(3px)",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Arrow btn */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 ${
                    p.accent ? "bg-[#C8F135]" : "bg-transparent border border-white/40"
                  }`}
                  style={{
                    transition: "transform 0.3s cubic-bezier(.22,.68,0,1.35), background 0.2s ease",
                    transform: hovered === i ? "scale(1.2) rotate(45deg)" : "scale(1) rotate(0deg)",
                    ...(hovered === i && !p.accent ? { background: "rgba(255,255,255,0.15)" } : {}),
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                  >
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

              {/* Top-right category tag — fades in on hover */}
              <div
                className="absolute top-4 right-4 z-10 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: p.accent ? "#C8F135" : "rgba(255,255,255,0.15)",
                  color: p.accent ? "#0D0D0D" : "#fff",
                  backdropFilter: "blur(6px)",
                  transition: "opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s",
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? "translateY(0)" : "translateY(-6px)",
                }}
              >
                View Project ↗
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer link */}
      <div className="text-center mt-6">
        <Link
          href="/projects"
          className="text-[13px] text-[#C8A200] font-medium no-underline hover:underline"
        >
          View all Projects →
        </Link>
      </div>
    </div>
  );
}