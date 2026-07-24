"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ImageSlider({ images, alts }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Swipe support for touch devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    stopAutoSlide();
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 45) {
      touchDeltaX.current < 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    startAutoSlide();
  };

  return (
    <div
      className="group/slider relative w-full h-full overflow-hidden rounded shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={
            (alts && alts[index]) ||
            `CRC The Peridona Jaypee Greens gallery image ${index + 1}`
          }
          className={`img-rich absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
            index === current ? "opacity-100 z-10 scale-100" : "opacity-0 scale-[1.06]"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}

        />
      ))}

      {/* Slide counter */}
      <span className="absolute top-3 right-3 z-20 rounded-full bg-black/45 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 tracking-wider pointer-events-none">
        {current + 1} / {images.length}
      </span>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white text-lg leading-none transition-all duration-300 hover:bg-[#C49A2B] hover:scale-110 active:scale-90 md:opacity-0 md:group-hover/slider:opacity-100"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white text-lg leading-none transition-all duration-300 hover:bg-[#C49A2B] hover:scale-110 active:scale-90 md:opacity-0 md:group-hover/slider:opacity-100"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-400 ease-out ${
              index === current
                ? "w-6 bg-[#DCA54A]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
