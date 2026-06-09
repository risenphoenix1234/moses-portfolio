"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      setTimeout(() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About me", href: "/about" },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);

    if (pathname === "/") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Aniebiet.
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors duration-200"
          >
            Contact Me
            <span className="w-2 h-2 rounded-full bg-[#A3D900] inline-block" />
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 bg-white">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full"
            >
              Contact Me
              <span className="w-2 h-2 rounded-full bg-[#A3D900] inline-block" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
