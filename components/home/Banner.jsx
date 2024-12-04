import { Figtree } from "@next/font/google";
import Image from "next/image";
import React from "react";
import banner from "@/public/images/banner.svg";
import gadgets from "@/public/images/gadget.png";
import RightArrow from "../svg/RightArrow";
import Link from "next/link";

// Load Figtree font
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you want to use
  variable: "--font-figtree",
});

const Banner = () => {
  return (
    <section className={`${figtree.variable} bg-gray-100 py-12 font-sans`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-[#232323] font-bold leading-[1.2] lg:leading-[99px] mb-4 text-center">
          The Best High-Quality
          <span className="text-[#232323] font-medium">
            <br /> Home Appliance
          </span>
          Products
        </h2>
        <p className="text-[#232323] text-[20px] mb-8">
          100+ Collections for your outfit inspirations this summer
        </p>
        <button className="w-full sm:w-[220px] md:w-[280px] lg:w-[344px] h-[50px] sm:h-[58px] rounded-[36px] px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 text-center">
          View Category
        </button>

        {/* banner image */}
        <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-gray-50 rounded-lg mt-8">
          {/* Left Image */} 
          <div className="relative w-full md:w-[1168px] h-[442px]">
            <Image
              src={banner}
              alt="Kitchen Appliance"
              width={1168}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            <span className="absolute top-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full shadow-md">
              cheztati.ca
            </span>
            <button className="absolute bottom-4 left-4 bg-red-500 text-white py-2 px-4 rounded-full flex items-center shadow-md">
              <span className="mr-2">Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[332px] h-[442px] mt-4 md:mt-0 md:ml-4">
            <Image
              src={gadgets}
              alt="Electronics Gadgets"
              width={332}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            <div>
              <h3 className="text-lg text-[#232323] font-semibold my-3">
                Electronics Gadgets
              </h3>
            </div>
            <Link href="">
              <button className="border border-red-500 text-red-500 bg-white py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded-full flex justify-center items-center w-full sm:w-[220px] md:w-[280px] lg:w-[332px] transition-all duration-300 hover:bg-red-500 hover:text-white">
                <span className="mr-2 text-sm sm:text-base md:text-lg">
                  Shop Now
                </span>
                <RightArrow />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
