import { formatCurrency } from "@/lib/utils";
import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = ({ room }: { room: Room }) => {
  return (
    <div className="group bg-neutral-900/40 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl">
      {/* Image Container with Elegant Aspect Ratio & Subtle Zoom on Hover */}
      <div className="h-[280px] sm:h-[320px] w-full relative overflow-hidden bg-neutral-950">
        <Image
          src={room.image}
          width={384}
          height={256}
          alt="room image"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Subtle Gradient Overlay for Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Room Name - Editorial Serif Font */}
          <h4 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mb-2 tracking-wide leading-tight">
            <Link
              href={`/room/${room.id}`}
              className="hover:text-amber-200/90 transition-colors duration-300"
            >
              {room.name}
            </Link>
          </h4>

          {/* Pricing - Minimalist & Clear */}
          <div className="mb-6 flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-light text-amber-100 tracking-tight">
              {formatCurrency(room.price)}
            </span>
            <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-light">
              / Night
            </span>
          </div>
        </div>

        {/* Footer Details & Action - Mobile First Layout */}
        <div className="pt-4 border-t border-white/10 flex flex-row items-center justify-between gap-4">
          {/* Capacity Spec */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-300 font-light tracking-wider uppercase">
            <IoPeopleOutline className="text-base text-amber-200/80" />
            <span>
              {room.capacity} {room.capacity === 1 ? "Person" : "People"}
            </span>
          </div>

          {/* Minimalist Action Button */}
          <Link
            href={`/room/${room.id}`}
            className="inline-flex items-center justify-center bg-white text-neutral-950 hover:bg-amber-100 px-5 py-2.5 sm:px-6 sm:py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
