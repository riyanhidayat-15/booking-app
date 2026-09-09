import ContactForm from "@/components/ContactForm";
import HeaderSection from "@/components/HeaderSection";
import { Metadata } from "next";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <HeaderSection
        title="Contact Us"
        subtitle="Lorem ipsum dolor sit amet."
      />
      <div className="max-w-7xl mx-auto py-16 md:py-28 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light block mb-3">
              Contact Us
            </span>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
              Get In Touch Today
            </h1>
            <div className="w-12 h-[1px] bg-amber-200/40 mb-6" />
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
              neque inventore quam dignissimos odio obcaecati.
            </p>
            <ul className="space-y-8 pt-4 border-t border-white/10">
              <li className="flex gap-5 items-start">
                <div className="flex-none p-3 bg-white/5 border border-white/10 text-amber-200/90">
                  <IoMailOutline className="size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90 mb-1">
                    Email
                  </h4>
                  <p className="text-neutral-300 font-light text-sm tracking-wide">
                    email-us@example.com
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="flex-none p-3 bg-white/5 border border-white/10 text-amber-200/90">
                  <IoCallOutline className="size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90 mb-1">
                    Phone Number
                  </h4>
                  <p className="text-neutral-300 font-light text-sm tracking-wide">
                    +62 814 6096 0618, +62 831 5032 0607
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-start">
                <div className="flex-none p-3 bg-white/5 border border-white/10 text-amber-200/90">
                  <IoLocationOutline className="size-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-amber-200/90 mb-1">
                    Address
                  </h4>
                  <p className="text-neutral-300 font-light text-sm tracking-wide capitalize">
                    jl raya serang km 12 cikupa
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
