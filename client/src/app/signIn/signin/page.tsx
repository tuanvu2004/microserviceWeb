"use client";

import Link from "next/link";
import Input from "@/src/components/Input";
import { Mail, Lock } from "lucide-react";
import PrimaryButtonLink from "@/src/components/PrimaryButtonLink";


// ... (các imports không đổi)

const SignInPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid/vidsigin.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div
          className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-serif text-center mb-8 text-black font-bold">
            Sign In
          </h2>

          <form className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email address"
              icon={<Mail className="w-4 h-4 text-gray-800" />}
              required
            />

            <Input
              type="password"
              placeholder="Password"
              icon={<Lock className="w-4 h-4 text-gray-800" />}
              required
            />

            <PrimaryButtonLink href="" text="Sign In" />

            <p className="text-center text-sm text-gray-800 mt-2">
              Don&apos;t have an account?{" "}
              <Link
                href="/signIn/register"
                className="font-medium text-black hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SignInPage;
