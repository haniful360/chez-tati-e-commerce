import Image from "next/image";
import React from "react";
import banner from "@/public/images/banner.png";
import gadgets from "@/public/images/gadget.png";
import RightArrow from "../svg/RightArrow";
import Link from "next/link";
import UpArrow from "../svg/UpArrow";

const Banner = () => {
  return (
    <section className="bg-gray-100 py-12 font-sans mt-32">
      <div className="max-w-[1320px] mx-auto px-4 text-center">
        <h2  data-aos="fade-up" className="text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px] text-[#232323] font-bold leading-[1.2] lg:leading-[99px] mb-4 text-center">
          The Best High-Quality
          <span className="text-[#232323] font-medium">
            <br /> Home Appliance
          </span>
          Products
        </h2>
        <p data-aos="fade-up" className="text-[#232323] text-sm md:text-[20px] mb-4 md:mb-8">
          100+ Collections for your outfit inspirations this summer
        </p>
        <button data-aos="fade-up" className="sm:w-[220px] md:w-[280px] lg:w-[344px] h-[40px] sm:h-[58px] rounded-[36px] px-3 py-2 md:px-6 md:py-3 bg-black text-white font-medium hover:bg-gray-800 text-center">
          View Category
        </button>

        {/* banner image */}
        <div  data-aos="fade-up" className="flex flex-col md:flex-row justify-center items-center p-4 bg-gray-50 rounded-lg mt-2 md:mt-8">
          {/* Left Image */}
          <div className="relative w-full max-w-[1168px] h-auto md:h-[442px] p-4">
            <Image
              src={banner}
              alt="Kitchen Appliance"
              width={1168}
              height={500}
              className="w-full h-[200px]  md:h-full rounded-[15px] object-cover"
            />
            <span className="absolute top-6 left-8 bg-white px-3 py-1 text-xs sm:text-sm lg:text-xl font-medium rounded-full shadow-md">
              cheztati.ca
            </span>
            <Link href="" className="absolute bottom-10 left-8">
              <button className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[70px] md:h-[70px] lg:w-[130px] lg:h-[130px] bg-[#EB2926] text-white py-2 px-4 rounded-full shadow-md flex flex-col items-center justify-center">
                <div className="flex justify-center">
                  <UpArrow />
                </div>
                <span className="text-sm sm:text-base lg:text-xl hidden md:block">
                  Explore
                </span>
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[332px] md:h-[442px] mt-4 md:mt-0 md:ml-4 md:py-4">
            <div>
              <Image
                src={gadgets}
                alt="Electronics Gadgets"
                width={332}
                height={500}
                className="w-full h-[200px] lg:h-[318px]"
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
      </div>
    </section>
  );
};

export default Banner;
