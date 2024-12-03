"use client";
import { useState } from "react";
import Image from "next/image"; // Next.js optimized images
import logo from "@/public/logo/logo.svg";
import responsive_logo from "@/public/logo/mobile-logo.svg";
import SearchIcon from "./svg/SearchIcon";
import HeartIcon from "./svg/HeartIcon";
import CartIcon from "./svg/CartIcon";
import UserIcon from "./svg/UserIcon";
import DownArrow from "./svg/DownArrow";
import MenuIcon from "./svg/MenuIcon";
import CrossIcon from "./svg/CrossIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-50 h-[157px] border-b border-[#DFE1E3]">
      <div className="max-w-[1511px] mx-auto flex flex-wrap items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo} // Replace with actual logo path
            alt="Chez Tati"
            width={40}
            height={40} // Ensure proper dimensions
            className="w-[186px] h-[86px] hidden md:block"
          />
          <Image
            src={responsive_logo} // Replace with actual logo path
            alt="Chez Tati"
            width={20}
            height={20} // Ensure proper dimensions
            className="w-[40px] h-[40px] md:hidden"
          />
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-orange-500"
        >
         {isMenuOpen ? <CrossIcon/> :  <MenuIcon />}
        </button>

        {/* Search Bar */}
        <div className="flex mt-4 md:mt-0 w-full sm:w-[350px] md:w-[400px] lg:w-[498px]">
          <div className="flex justify-center relative w-full">
            {/* Search Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <SearchIcon />
            </span>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[46px] border border-[#E6E6E6] rounded-l-md pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />

            {/* Search Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 h-[46px] w-[98px]">
              Search
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 mt-4 md:mt-0 font-figtree text-[#232323]">
          <div className="relative group">
            <button className="hover:text-orange-500 flex items-center gap-[1px]">
              All Category
              <DownArrow />
            </button>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
              >
                Category 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
              >
                Category 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
              >
                Category 3
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact Us
          </a>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-4 md:space-x-6 mt-8 md:mt-0">
          <button className="text-gray-700 hover:text-orange-500">
            <HeartIcon />
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <CartIcon />
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <UserIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-[250px] bg-gray-50 shadow-md transform ${
          isMenuOpen ? "translate-y-24" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <div className="px-4 py-2">
          <div className="space-y-3">
            <div className="relative group">
              <button className="hover:text-orange-500 flex items-center gap-[1px]">
                All Category
                <DownArrow />
              </button>
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 3
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:flex items-center space-x-4 md:space-x-6 mt-8 md:mt-0">
          <button className="text-gray-700 hover:text-orange-500">
            <HeartIcon />
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <CartIcon />
          </button>
          <button className="text-gray-700 hover:text-orange-500">
            <UserIcon />
          </button>
        </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
