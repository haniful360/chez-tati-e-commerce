import React from "react";
import signIn_banner from "@/public/images/sign_in.png";
import google from "@/public/icon/google.svg";
import Image from "next/image";

const SignUp = () => {
  return (
    <div>
      <Image
        className="w-full"
        src={signIn_banner}
        width={1500}
        height={120}
        alt=""
      />
      <div className="flex items-center justify-center py-16 bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full max-w-lg sm:w-[687px] sm:max-w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="w-full max-w-lg sm:w-[687px] sm:max-w-full  border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="w-full max-w-lg sm:w-[687px] sm:max-w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm Password"
                required
              />
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
                Accept all terms & Conditions
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full max-w-lg sm:w-[687px] sm:max-w-full py-2 bg-[#EA5326] text-white font-bold rounded-[62px] hover:bg-orange-600 transition-colors"
            >
              Create Account
            </button>

            {/* Google Button */}
            <div className="text-center mt-4">
              <button className="flex items-center justify-around w-full max-w-lg sm:w-[687px] sm:max-w-full py-2 border border-gray-300 rounded-[8.73px]">
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
