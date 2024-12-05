"use client";
import { useEffect, useRef, useState } from "react";
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

import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [wishlistCount, setWishlistCount] = useState(1);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed z-50 w-full top-0 left-0 right-0 bg-[#F8FAFC] h-[140px] border-b-2 border-[#DFE1E3]">
      <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Chez Tati"
              width={40}
              height={40}
              className="w-[186px] h-[86px] hidden md:block"
            />
            <Image
              src={responsive_logo}
              alt="Chez Tati"
              width={20}
              height={20}
              className="w-[40px] h-[40px] md:hidden"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-orange-500"
        >
          {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:block">
         
          <div className="flex mt-4 md:mt-0 w-full sm:w-[350px] md:w-[400px] lg:w-[498px] ">
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
              <button className="bg-[#EA5326] text-white px-4 py-2 rounded-r-md hover:bg-orange-600 h-[46px] w-[98px]">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 mt-4 md:mt-0 font-figtree text-[#232323]">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-orange-500 font-semibold flex items-center gap-[1px]"
            >
              All Category
              <DownArrow />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 mb-1 hover:bg-orange-500 hover:text-white transition-all"
                >
                  All Categories
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 mb-1 hover:bg-orange-500 hover:text-white transition-all"
                >
                  Category 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded-md hover:bg-orange-500 hover:text-white transition-all"
                >
                  Category 3
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded-md hover:bg-orange-500 hover:text-white transition-all"
                >
                  Category 4
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded-md hover:bg-orange-500 hover:text-white transition-all"
                >
                  Category 5
                </Link>
              </div>
            )}
          </div>
          <Link href="about-us" className="hover:text-orange-500 font-semibold">
            About Us
          </Link>
          <Link
            href="contact-us"
            className="hover:text-orange-500 font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-4 md:space-x-6 mt-8 md:mt-0">
          <div className="flex items-center gap-4">
            {/* Wishlist Icon with Badge */}
            <Link href="/wishlist-products">
              <button className="relative text-gray-700 hover:text-orange-500">
                <HeartIcon />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Cart Icon with Badge */}
            <Link href="#">
              <button className="relative text-gray-700 hover:text-orange-500">
                <CartIcon />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
          <Link href="/sign-up">
            <button className="text-gray-700 hover:text-orange-500">
              <UserIcon />
            </button>
          </Link>
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
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
                >
                  Category 3
                </Link>
              </div>
            </div>
            <Link
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white"
            >
              Contact Us
            </Link>
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
