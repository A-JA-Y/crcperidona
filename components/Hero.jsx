"use client";

import { useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.volume = 1;
    setMuted(v.muted);
  };

  return (
    <section className="w-full">
      <div className="relative w-full h-[62vh] md:h-[78vh] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="CRC The Peridona — Live More. Walkthrough film of the residences at Jaypee Greens, Greater Noida"
          className="video-rich absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft cinematic gradients */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Ambient gold light behind the tagline */}
        <div className="glow-blob -bottom-28 -left-20 w-[380px] h-[380px] opacity-40" />

        {/* Animated tagline */}
        <div className="absolute bottom-8 left-5 md:bottom-12 md:left-10 z-10 pointer-events-none select-none">
          <p
            className="animate-hero-fade-up text-[#DCA54A] text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em] mb-2"
            style={{ animationDelay: "0.3s" }}
          >
            CRC The Peridona · Jaypee Greens
          </p>
          <p
            className="animate-hero-fade-up text-white text-3xl md:text-5xl font-bold leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            style={{ animationDelay: "0.5s", fontFamily: "var(--font-work-sans)" }}
          >
            Live. More.
          </p>
          <span
            className="animate-hero-fade-up block h-[2px] w-14 md:w-20 mt-3 bg-gradient-to-r from-[#DCA54A] to-transparent"
            style={{ animationDelay: "0.7s" }}
          />
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1 text-white/80 pointer-events-none animate-hero-fade-up"
          style={{ animationDelay: "1.1s" }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <svg
            className="animate-scroll-hint"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        {/* Mute / Unmute control */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className="absolute bottom-5 right-5 md:bottom-8 md:right-8 z-10 group flex items-center gap-2.5 rounded-full border border-white/40 bg-black/35 backdrop-blur-md pl-3.5 pr-5 py-2.5 text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[#C49A2B]/90 hover:border-[#C49A2B] hover:shadow-[0_6px_28px_rgba(196,154,43,0.45)] hover:scale-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DCA54A] focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
        >
          {muted && (
            <span className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-40 pointer-events-none" />
          )}

          {muted ? (
            /* Speaker muted icon */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            /* Speaker with sound waves icon */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}

          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
            {muted ? "Unmute" : "Mute"}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
