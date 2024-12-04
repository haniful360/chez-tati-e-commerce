"use client";
import React, { useState } from "react";
import signIn_banner from "@/public/icon/sign-in.svg";
import google from "@/public/icon/google.svg";
import eyeIcon from "@/public/icon/eye.svg"; // Add your eye icon here
import eyeoff from "@/public/icon/eye-off.svg"; // Add your eye-off icon here
import Image from "next/image";
import Link from "next/link";

const ForgetPassword = () => {

  const [forgetPassword, setForgetPassword] = useState(false);

  return (
    <div>
      <Image
        className="w-full mt-[150px]"
        src={signIn_banner}
        width={1500}
        height={120}
        alt=""
      />
      <div className="flex items-center justify-center bg-gray-100 py-12">
        <div className="w-full max-w-[600px] bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Forget Password
          </h2>

          <form>
           
            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type={forgetPassword ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded-[8.73px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
              {forgetPassword ? (
                <Image
                  src={eyeoff}
                  alt="Hide password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setForgetPassword((prev) => !prev)}
                />
              ) : (
                <Image
                  src={eyeIcon}
                  alt="Show password"
                  className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer"
                  onClick={() => setForgetPassword((prev) => !prev)}
                />
              )}
            </div>

           

            {/* Submit Button */}
            <button className="w-full  py-2 bg-[#EA5326] text-white font-bold rounded-[62px] hover:bg-orange-600 transition-colors">
             Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
