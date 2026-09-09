import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <Hero />
      <div className="mt-20 md:mt-32 max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light block mb-3">
            Accommodations
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal tracking-tight uppercase mb-4 text-white">
            Room & Rates
          </h1>
          <div className="w-12 h-[1px] bg-amber-200/40 mx-auto mb-6" />
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, enim.
          </p>
        </div>

        <Main />
      </div>
    </div>
  );
}
