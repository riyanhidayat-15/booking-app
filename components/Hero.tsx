"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Gambar Ultra HD Unsplash (w=2000, q=90) khas resort Bali
const heroImages = [
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=90&w=2000&auto=format&fit=crop", // Tropical luxury pool
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=90&w=2000&auto=format&fit=crop", // Oceanfront villa
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=90&w=2000&auto=format&fit=crop", // Minimalist suite
  "/images/hero.jpg",
];

// Ganti sesuai fasilitas/kebijakan hotel yang benar
const highlights = ["Free Cancellation", "Best Rate Guarantee", "24/7 Support"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Berganti tiap 6 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full text-white overflow-hidden bg-neutral-950 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 max-w-[1500px] mx-auto">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className={`w-full h-full transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`Luxury Hotel View ${index + 1}`}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-center object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-neutral-950/30 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent z-20 pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-30 my-auto max-w-2xl flex flex-col text-left">
        <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-amber-200/90 font-light mb-2">
          Sanctuary of Comfort
        </span>
        <h1 className="font-serif-luxury text-6xl sm:text-7xl md:text-8xl italic font-normal leading-none tracking-tight text-white mb-4 drop-shadow-lg">
          Hotels
        </h1>
        <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-normal tracking-wider uppercase text-neutral-100 leading-tight mb-3">
          Book Your Luxury Room.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-300/80 font-light tracking-wide max-w-sm">
          Get special offer just for you today
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href={"/room"}
            className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-amber-100 text-neutral-950 py-4 px-8 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl active:scale-95"
          >
            Book Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href={"/contact"}
            className="inline-flex items-center justify-center border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-amber-200/60 text-white py-4 px-8 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Info singkat */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
          {highlights.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 && (
                <span className="size-1 rounded-full bg-amber-200/60" />
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Footer Anchor & Indicator */}
      <div className="relative z-30 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400/80 pt-6 border-t border-white/10 gap-3">
        <div className="flex items-center space-x-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === currentIndex ? "w-8 bg-amber-200" : "w-2 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="#rooms"
          className="flex items-center gap-2 text-amber-200/80 hover:text-white transition-colors"
        >
          <span>Scroll Down</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
