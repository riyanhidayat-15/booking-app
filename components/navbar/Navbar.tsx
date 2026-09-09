import Link from "next/link";
import Image from "next/image";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-neutral-950/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between px-6 sm:px-12 py-4">
        <Link href={"/"} className="transition-opacity hover:opacity-80">
          <Image
            src={"/images/logo.png"}
            width={128}
            height={49}
            alt="logo"
            priority
            className="w-24 sm:w-28 h-auto object-contain brightness-0 invert"
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
