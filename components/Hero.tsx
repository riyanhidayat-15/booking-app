import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[100dvh] w-full text-white overflow-hidden bg-neutral-950 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-12 max-w-[1500px] mx-auto">
      {/* Full-Screen Background Image with Subtle Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/hero.jpg"}
          alt="heroimage"
          fill
          priority
          className="object-center object-cover w-full h-full scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-neutral-950/40" />
      </div>

      {/* Main Content Layout - Sleeker & More Transparent */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end my-auto">
        {/* Left Column: Subtle Editorial Text */}
        <div className="lg:col-span-7 flex flex-col justify-end text-left">
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-amber-200/90 font-light mb-1">
            Sanctuary of Comfort
          </span>
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl italic font-normal leading-none tracking-tight text-white mb-3 drop-shadow-md">
            Hotels
          </h1>
          <h2 className="font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-normal tracking-wider uppercase text-neutral-100 leading-tight mb-2">
            Book Your Luxury Room.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300/80 font-light tracking-wide max-w-sm">
            Get special offer just for you today
          </p>
        </div>

        {/* Right Column: Ultra-Transparent & Compact Booking Glass Card */}
        <div className="lg:col-span-5 w-full max-w-sm lg:ml-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/15 p-5 rounded-xl shadow-2xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-serif-luxury text-lg font-normal text-white tracking-wide">
                Quick Booking
              </h3>
            </div>

            {/* Compact Transparent Inputs */}
            <div className="space-y-2.5 text-xs text-neutral-200">
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/20 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Check-in
                </span>
                <span className="font-light text-xs tracking-wide">
                  Select Date
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/20 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Check-out
                </span>
                <span className="font-light text-xs tracking-wide">
                  Select Date
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-neutral-950/20 border border-white/10 rounded-lg backdrop-blur-sm">
                <span className="text-neutral-400 font-light text-[10px] uppercase tracking-wider">
                  Guests
                </span>
                <span className="font-light text-xs tracking-wide">
                  2 Adults
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 space-y-2">
              <Link
                href={"/room"}
                className="w-full inline-flex items-center justify-center bg-white/90 hover:bg-amber-100 text-neutral-950 py-3 px-5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 rounded-lg shadow-lg active:scale-95"
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

      {/* Bottom Footer Anchor Line */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-400/70 pt-6 border-t border-white/10 gap-3">
        <span>Explore by Property</span>
        <div className="flex items-center gap-2 text-amber-200/80 cursor-pointer hover:text-white transition-colors">
          <span>Scroll Down</span>
          <span>↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
