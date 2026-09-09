import { LoginGoogleButton } from "@/components/LoginButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect_url?: string }>;
}) => {
  const params = (await searchParams)?.redirect_url;
  let redirectUrl;
  if (!params) {
    redirectUrl = "/";
  } else {
    redirectUrl = `/${params}`;
  }
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-200/5 via-transparent to-transparent pointer-events-none" />

      {/* Glassmorphism Sign In Card */}
      <div className="relative z-10 bg-neutral-900/40 backdrop-blur-md border border-white/10 w-full max-w-md mx-auto p-8 sm:p-10 shadow-2xl">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light block mb-2">
            Welcome Back
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white tracking-tight mb-3">
            Sign In
          </h1>
          <div className="w-10 h-[1px] bg-amber-200/40 mx-auto mb-4" />
          <p className="font-light text-xs sm:text-sm text-neutral-400 tracking-wide">
            Sign in to access your reservation and account
          </p>
        </div>

        <div className="py-2 text-center">
          <LoginGoogleButton redirectUrl={redirectUrl} />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
