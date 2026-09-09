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
      {/* Background Slideshow with Ayana Slow-Zoom (Ken Burns) Effect */}
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
        {/* Soft Linear Gradient Overlay - Jauh Lebih Bening */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-neutral-950/30 z-20 pointer-events-none" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end my-auto">
        {/* Left Column: Subtle Editorial Text */}
        <div className="lg:col-span-7 flex flex-col justify-end text-left">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-amber-200/90 font-light mb-1">
            Sanctuary of Comfort
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl italic font-normal leading-none tracking-tight text-white mb-3 drop-shadow-lg">
            Hotels
          </h1>
          <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-normal tracking-wider uppercase text-neutral-100 leading-tight mb-2">
            Book Your Luxury Room.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300/80 font-light tracking-wide max-w-sm">
            Get special offer just for you today
          </p>
        </div>

        {/* Right Column: Glassmorphic Quick Booking Card */}
        <div className="lg:col-span-5 w-full max-w-sm lg:ml-auto">
          <div className="bg-neutral-950/30 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-2xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-serif-luxury text-lg font-normal text-white tracking-wide">
                Quick Booking
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-neutral-200">
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/30 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Check-in
                </span>
                <span className="font-light text-xs tracking-wide">
                  Select Date
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/30 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Check-out
                </span>
                <span className="font-light text-xs tracking-wide">
                  Select Date
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/30 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Guests
                </span>
                <span className="font-light text-xs tracking-wide">
                  2 Adults
                </span>
              </div>
            </div>

            <div className="pt-1 space-y-2">
              <Link
                href={"/room"}
                className="w-full inline-flex items-center justify-center bg-white hover:bg-amber-100 text-neutral-950 py-3 px-5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 rounded-lg shadow-lg active:scale-95"
              >
                Book Now
              </Link>
              <Link
                href={"/contact"}
                className="w-full inline-flex items-center justify-center bg-transparent border border-white/20 text-white hover:bg-white/10 py-2.5 px-5 text-[11px] tracking-[0.2em] uppercase font-light transition-all duration-300 rounded-lg active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
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

        <div className="flex items-center gap-2 text-amber-200/80 cursor-pointer hover:text-white transition-colors">
          <span>Scroll Down</span>
          <span>↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
