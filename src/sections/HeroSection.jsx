"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const loopThreshold = 5;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;

    let frameId;

    const loopHandler = () => {
      if (video.duration && video.currentTime >= video.duration - loopThreshold) {
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
      className="relative flex items-center justify-center py-24 px-4 sm:px-6"
    >
      <div className="relative w-full max-w-[90rem] h-[80vh] rounded-2xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop={false}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
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
