"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full py-6 px-6 md:px-12 bg-white border-b border-gray-200 sticky top-0 z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand name with elegant serif font */}
        <a
          href="#hero"
          className="text-2xl font-semibold text-gray-800 font-serif tracking-tight hover:text-gray-600 transition"
        >
          Dr. Serena Blake, PsyD
        </a>

        {/* Nav links with uppercase and letter spacing */}
        <nav className="hidden md:flex space-x-6 text-sm tracking-widest uppercase text-gray-600 font-light">
          <a href="#about" className="hover:text-gray-800 transition">About</a>
          <a href="#services" className="hover:text-gray-800 transition">Services</a>
          <a href="#faq" className="hover:text-gray-800 transition">FAQ</a>
          <a href="#contact" className="hover:text-gray-800 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
