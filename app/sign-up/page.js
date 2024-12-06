"use client";
import React, { useState } from "react";
import signUp_banner from "@/public/images/banner-section.png";
import google from "@/public/icon/google.svg";
import eyeIcon from "@/public/icon/eye.svg"; // Add your eye icon here
import eyeoff from "@/public/icon/eye-off.svg"; // Add your eye-off icon here
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const breadcrumbs = [
    { label: <HomeIcon/>, href: "/" },
    // { label: "signIn", href: "/sign-in" },
    { label: "SingUp" },
  ];

  return (
    <div className="">
      <PageBanner backgroundImage={signUp_banner} breadcrumbs={breadcrumbs} />
      <div className="flex items-center justify-center bg-gray-100 py-12">
        <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
              {showPassword ? (
                <Image
                  src={eyeoff}
                  alt="Hide password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <Image
                  src={eyeIcon}
                  alt="Show password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
                required
              />
              {showConfirmPassword ? (
                <Image
                  src={eyeoff}
                  alt="Hide password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              ) : (
                <Image
                  src={eyeIcon}
                  alt="Show password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                />
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 border border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                Accept all{" "}
                <Link href="#" className="text-blue-500">
                  terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full  py-2 bg-[#EA5326] text-white font-bold rounded-[62px] hover:bg-orange-600 transition-colors">
              Create Account
            </button>

            {/* Google Button */}
            <div className="text-center mt-4">
              <button className="flex items-center justify-around w-full  py-2 border border-gray-300 rounded-[8.73px]">
                <Image
                  src={google}
                  alt="Google"
                  className="h-5 w-5 mr-2"
                  width={24}
                  height={24}
                />
                Continue with Google
              </button>
            </div>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-sm md:text-xl">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-orange-500 hover:underline font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
