import HeaderSection from "@/components/HeaderSection";
import { Metadata } from "next";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About",
  description: "Who We Are",
};

const AboutPage = () => {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <HeaderSection title="About Us" subtitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-7xl mx-auto py-16 md:py-28 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative overflow-hidden bg-neutral-900 border border-white/10 group">
            <Image
              src={"/images/about-image.jpg"}
              width={650}
              height={579}
              alt="about image"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light block mb-3">
              Our Story
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
              Who We Are
            </h1>
            <div className="w-12 h-[1px] bg-amber-200/40 mb-6" />
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              aperiam qui consequatur libero velit voluptas amet cupiditate non.
              Rerum, adipisci?
            </p>
            <ul className="space-y-8 pt-4 border-t border-white/10">
              <li className="flex gap-5 items-start">
                <div className="flex-none p-3 bg-white/5 border border-white/10 text-amber-200/90">
                  <IoEyeOutline className="size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90 mb-2">
                    Vision :
                  </h4>
                  <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas dolor tempora officiis, animi harum consectetur.
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="flex-none p-3 bg-white/5 border border-white/10 text-amber-200/90">
                  <IoLocateOutline className="size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90 mb-2">
                    Mision :
                  </h4>
                  <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure itaque incidunt labore earum voluptates enim harum
                    ratione sunt dignissimos eius!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
