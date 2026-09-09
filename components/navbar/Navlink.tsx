"use client";

import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <>
      {/* User Profile & Desktop Sign Out */}
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2 space-x-4">
          <div className="hidden md:flex items-center space-x-3 bg-white/5 border border-white/10 pl-1 pr-3 py-1 rounded-full backdrop-blur-md">
            <Image
              className="size-7 rounded-full object-cover border border-amber-200/40"
              src={session.user.image || "/images/avatar.svg"}
              width={64}
              height={64}
              alt="avatar"
            />
            <span className="text-xs text-neutral-200 font-light tracking-wide max-w-[100px] truncate">
              {session.user.name || "Guest"}
            </span>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-5 bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-200 hover:text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : null}

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-neutral-200 hover:text-white md:hidden transition-colors"
      >
        {!open ? <IoMenu className="size-7" /> : <IoClose className="size-7" />}
      </button>

      {/* Links Container */}
      <div
        className={clsx(
          "w-full md:block md:w-auto transition-all duration-300",
          {
            "block absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl":
              open,
            "hidden md:flex": !open,
          },
        )}
      >
        <ul className="flex flex-col font-light text-[11px] tracking-[0.2em] uppercase p-2 md:p-0 mt-2 md:mt-0 space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-8 text-neutral-300">
          <li>
            <Link
              className={clsx(
                "block py-2 transition-colors duration-300",
                pathname === "/"
                  ? "text-amber-200 font-normal"
                  : "text-neutral-300 hover:text-amber-200",
              )}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                "block py-2 transition-colors duration-300",
                pathname === "/about"
                  ? "text-amber-200 font-normal"
                  : "text-neutral-300 hover:text-amber-200",
              )}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                "block py-2 transition-colors duration-300",
                pathname === "/room"
                  ? "text-amber-200 font-normal"
                  : "text-neutral-300 hover:text-amber-200",
              )}
              href={"/room"}
            >
              Room
            </Link>
          </li>
          <li>
            <Link
              className={clsx(
                "block py-2 transition-colors duration-300",
                pathname === "/contact"
                  ? "text-amber-200 font-normal"
                  : "text-neutral-300 hover:text-amber-200",
              )}
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link
                  className={clsx(
                    "block py-2 transition-colors duration-300",
                    pathname === "/myreservation"
                      ? "text-amber-200 font-normal"
                      : "text-neutral-300 hover:text-amber-200",
                  )}
                  href={"/myreservation"}
                >
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      className={clsx(
                        "block py-2 transition-colors duration-300",
                        pathname === "/admin/dashboard"
                          ? "text-amber-200 font-normal"
                          : "text-neutral-300 hover:text-amber-200",
                      )}
                      href={"/admin/dashboard"}
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={clsx(
                        "block py-2 transition-colors duration-300",
                        pathname === "/admin/room"
                          ? "text-amber-200 font-normal"
                          : "text-neutral-300 hover:text-amber-200",
                      )}
                      href={"/admin/room"}
                    >
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}

          {session ? (
            <li className="pt-4 md:pt-0 border-t border-white/10 md:border-none">
              <button
                onClick={() => signOut()}
                className="md:hidden w-full text-center py-3 bg-red-950/40 border border-red-500/30 text-red-200 hover:bg-red-900/50 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 cursor-pointer"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-4 md:pt-0 border-t border-white/10 md:border-none">
              <Link
                href={"/signin"}
                className="inline-block w-full md:w-auto text-center py-2.5 px-5 bg-white text-neutral-950 hover:bg-amber-100 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 shadow-md"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
