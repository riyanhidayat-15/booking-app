"use client";
import { contactMessage } from "@/lib/action";
import clsx from "clsx";
import { useActionState } from "react";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(contactMessage, null);
  return (
    <div className="bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 sm:p-8">
      {state?.message ? (
        <div
          className="p-4 mb-6 text-xs tracking-wider uppercase bg-emerald-950/80 border border-emerald-500/30 text-emerald-200"
          role="alert"
        >
          <div className="font-light">{state.message}</div>
        </div>
      ) : null}
      <form action={formAction}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              name="name"
              className="bg-white/5 border border-white/15 p-3.5 w-full text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-amber-200/50 transition-colors"
              placeholder="Name*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-xs text-red-400 mt-2 font-light tracking-wide">
                {state?.error?.name}
              </p>
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="bg-white/5 border border-white/15 p-3.5 w-full text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-amber-200/50 transition-colors"
              placeholder="jhondoe@gmail.com*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-xs text-red-400 mt-2 font-light tracking-wide">
                {state?.error?.email}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              className="bg-white/5 border border-white/15 p-3.5 w-full text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-amber-200/50 transition-colors"
              placeholder="Subject*"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-xs text-red-400 mt-2 font-light tracking-wide">
                {state?.error?.subject}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <textarea
              rows={5}
              name="message"
              className="bg-white/5 border border-white/15 p-3.5 w-full text-sm text-white placeholder-neutral-500 font-light focus:outline-none focus:border-amber-200/50 transition-colors resize-none"
              placeholder="Your message*"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-xs text-red-400 mt-2 font-light tracking-wide">
                {state?.error?.message}
              </p>
            </div>
          </div>
        </div>
        <button
          className={clsx(
            "w-full py-4 text-xs uppercase tracking-[0.2em] font-medium text-neutral-950 bg-white hover:bg-amber-100 transition-all duration-300 cursor-pointer shadow-md active:scale-95",
            {
              "opacity-50 cursor-progress animate-pulse": isPending,
            },
          )}
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
