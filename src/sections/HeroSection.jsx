"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(
        window.navigator.userAgent
      );
      setIsMobile(isMobileDevice);
    }
  }, []);

  // Set video playback speed and custom loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;

    let frameId;

    const loopHandler = () => {
      if (video.duration && video.currentTime >= video.duration - 4) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
      frameId = requestAnimationFrame(loopHandler);
    };

    frameId = requestAnimationFrame(loopHandler);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start py-12 px-4 sm:px-6"
    >
      <a
        href="/"
        className="absolute top-8 left-8 text-xl sm:text-2xl font-light tracking-wide text-gray-800 z-20"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#2f4f4f",
          pointerEvents: "auto",
        }}
      >
        Dr. Serena Blake, PsyD
      </a>

      <div className="relative w-full max-w-[90rem] h-[95vh] overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop={false}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        >
          <source
            src={
              isMobile ? "/assets/hero-bg-mobile.mp4" : "/assets/hero-bg.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-[-1]" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight drop-shadow-md">
            Compassionate Therapy
            <br /> for Healing & Growth
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-light drop-shadow">
            Helping you move forward — in person or online.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block px-8 py-3 border border-white text-white text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            Start Your Healing Journey
          </a>
        </div>
      </div>
    </section>
  );
}
