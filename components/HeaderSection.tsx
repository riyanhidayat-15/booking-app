import Image from "next/image";

const HeaderSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="relative h-64 sm:h-80 w-full text-white overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Image
          src={"/images/hero.jpg"}
          alt="header"
          fill
          priority
          className="object-cover object-center w-full h-full scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60" />
      </div>
      <div className="relative z-10 flex flex-col justify-end items-center h-full text-center pb-10 sm:pb-14 px-6 max-w-7xl mx-auto">
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal leading-tight capitalize text-white tracking-tight mb-2">
          {title}
        </h1>
        <div className="w-10 h-[1px] bg-amber-200/40 my-3" />
        <p className="text-xs sm:text-sm text-neutral-300/90 font-light tracking-[0.15em] uppercase max-w-lg">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default HeaderSection;
