"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // 💫 Set slower playback speed
    video.playbackRate = 0.8; // You can tweak this (0.5 is half speed, 1 is normal)

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 5) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Soft black overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-[-1]" />

      {/* Floating text */}
      <div className="relative z-10 max-w-3xl text-center text-white px-4 sm:px-6">
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
    </section>
  );
}
