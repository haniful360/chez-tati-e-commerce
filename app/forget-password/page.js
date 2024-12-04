"use client";
import React, { useState } from "react";
import signIn_banner from "@/public/icon/sign-in.svg";
import Image from "next/image";

const ForgetPassword = () => {

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
            Sign In
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
