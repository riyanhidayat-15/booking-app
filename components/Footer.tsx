import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <Link
              href={"/"}
              className="mb-6 block transition-opacity hover:opacity-80"
            >
              <Image
                src={"/images/logo.png"}
                width={128}
                height={49}
                alt="logo"
                className="w-28 sm:w-32 h-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatem quisquam voluptatibus numquam a ex.
            </p>
          </div>

          <div>
            <div className="flex gap-12 sm:gap-16">
              <div className="flex-1">
                <h4 className="mb-6 text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90">
                  Links
                </h4>
                <ul className="space-y-3.5 text-xs uppercase tracking-[0.15em] font-light text-neutral-400">
                  <li>
                    <Link
                      href={"/"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/room"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="mb-6 text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90">
                  Links
                </h4>
                <ul className="space-y-3.5 text-xs uppercase tracking-[0.15em] font-light text-neutral-400">
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Term & Condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Payment Method
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="hover:text-amber-200 transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90">
              Newsletter
            </h4>
            <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <form action="" className="space-y-3">
              <div>
                <input
                  type="text"
                  name="email"
                  className="w-full p-3.5 bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-200/50 transition-colors"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <button className="w-full bg-white text-neutral-950 hover:bg-amber-100 p-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer active:scale-95">
                Subcribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 py-6 text-center text-xs tracking-wider font-light text-neutral-500">
        &copy; Copyright 2026 | Riyan Hidayat | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
