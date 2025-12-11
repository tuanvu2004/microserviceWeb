"use client";

import Link from "next/link";
import Input from "@/src/components/Input";
import { Mail, Lock, User } from "lucide-react";
import PrimaryButtonLink from "@/src/components/PrimaryButtonLink";

const RegisterPage = () => {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/vid/202512110307.mp4" type="video/mp4" />
            </video>

            {/* LAYER CHE MỜ VIDEO (OPTIONAL) */}
            <div className="absolute inset-0 bg-black/40" />

            {/* REGISTER CARD */}
            <div className="relative w-full min-h-screen flex items-center justify-center">
                <div className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                    <h2 className="text-3xl font-serif text-center mb-8 text-black font-bold">
                        Register
                    </h2>

                    <form className="flex flex-col gap-4 ">

                        {/* TRƯỜNG TÊN NGƯỜI DÙNG */}
                        <Input
                            type="text"
                            placeholder="Full Name"
                            icon={<User className="w-4 h-4 text-gray-800" />}
                            required
                        />

                        {/* TRƯỜNG EMAIL */}
                        <Input
                            placeholder="Email address" 
                            icon={<Mail className="w-4 h-4 text-gray-800" />}
                            required
                        />


                        {/* TRƯỜNG MẬT KHẨU */}
                        <Input
                            type="password"
                            placeholder="Password"
                            icon={<Lock className="w-4 h-4 text-gray-800" />}
                            required
                        />

                        {/* TRƯỜNG XÁC NHẬN MẬT KHẨU */}
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            icon={<Lock className="w-4 h-4 text-gray-800" />}
                            required
                        />

                        <PrimaryButtonLink
                            href=""
                            text="Register Account"
                        />

                        <p className="text-center text-sm text-gray-800">
                            Already have an account?{" "}
                            <Link
                                href="/signIn/signin"
                                className="font-medium text-black hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;