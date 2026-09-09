import { formatCurrency } from "@/lib/utils";
import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = ({ room }: { room: Room }) => {
  return (
    <div className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-700 hover:border-amber-200/40 hover:shadow-2xl">
      {/* Tall Editorial Image Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
        <Image
          src={room.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={room.name}
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />

        {/* Soft Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />

        {/* Capacity Badge - Floating Top Right */}
        <div className="absolute top-4 right-4 z-10 flex items-center space-x-1.5 bg-neutral-950/60 backdrop-blur-md border border-white/10 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-neutral-300 font-light">
          <IoPeopleOutline className="text-amber-200/90 text-xs" />
          <span>
            {room.capacity} {room.capacity === 1 ? "Guest" : "Guests"}
          </span>
        </div>

        {/* Bottom Floating Content Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/90 font-light mb-1">
            Private Sanctuary
          </span>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug tracking-wide">
            <Link
              href={`/room/${room.id}`}
              className="hover:text-amber-200 transition-colors duration-300"
            >
              {room.name}
            </Link>
          </h3>

          <div className="w-8 h-[1px] bg-amber-200/40 my-3 transition-all duration-500 group-hover:w-16" />

          {/* Pricing & Subtle Link Button */}
          <div className="flex items-end justify-between pt-2">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-light block text-[10px] mb-0.5">
                Starting from
              </span>
              <div className="flex items-baseline space-x-1">
                <span className="font-serif-luxury text-xl sm:text-2xl text-amber-100 font-normal">
                  {formatCurrency(room.price)}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-light">
                  / night
                </span>
              </div>
            </div>

            <Link
              href={`/room/${room.id}`}
              className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-medium text-white hover:text-amber-200 transition-colors duration-300 pb-1 border-b border-white/30 hover:border-amber-200"
            >
              Explore Villa →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
