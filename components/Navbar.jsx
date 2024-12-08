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
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishListContext";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const dropdownRef = useRef(null);

  const [storedUsers, setStoredUsers] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("users");
    setStoredUsers(user);
  }, []);

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
    <nav className="fixed z-50 w-full top-0 left-0 right-0 bg-[#F8FAFC] h-[80px] md:h-[100px] lg:h-[140px] border-b-2 border-[#DFE1E3]">
      <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between h-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Chez Tati"
              width={40}
              height={40}
              className="w-[146] h-[56px] md:w-[186px] lg:h-[86px]"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block">
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

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="xl:hidden text-gray-700 hover:text-orange-500"
        >
          {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex space-x-6 mt-4 md:mt-0 font-figtree text-[#232323]">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-orange-600 lg:text-[18px] text-[#4E4E4E] font-semibold flex items-center gap-[1px]"
            >
              All Category
              <DownArrow />
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-1">
                <Link
                  href="/products?category=All Categories"
                  className="block px-4 py-2 text-sm text-[#232323]  border-gray-200 rounded-md hover:bg-orange-500 hover:text-white transition-all"
                >
                  All Categories
                </Link>
                <Link
                  href="/products?category=Audio"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded hover:bg-orange-500 hover:text-white transition-all"
                >
                  Audio
                </Link>
                <Link
                  href="/products?category=Gaming"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded hover:bg-orange-500 hover:text-white transition-all"
                >
                  Gaming
                </Link>
                <Link
                  href="/products?category=Mobile"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded hover:bg-orange-500 hover:text-white transition-all"
                >
                  Mobile
                </Link>
                <Link
                  href="/products?category=tv"
                  className="block px-4 py-2 text-sm text-[#232323] border-t border-gray-200 rounded hover:bg-orange-500 hover:text-white transition-all"
                >
                  Television
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className="hover:text-orange-500 text-[#4E4E4E] font-semibold lg:text-[18px]"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-orange-500 text-[#4E4E4E] font-semibold lg:text-[18px]"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden xl:flex items-center space-x-4 md:space-x-6 mt-8 md:mt-0">
          <div className="flex items-center gap-4">
            {/* Wishlist Icon with Badge */}
            <Link href="/wishlist-products">
              <button className="relative text-gray-700 hover:text-orange-500">
                <HeartIcon />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </Link>

            {/* Cart Icon with Badge */}
            <Link href="/shopping-cart">
              <button className="relative text-gray-700 hover:text-orange-500">
                <CartIcon />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </Link>
          </div>
          {storedUsers ? (
            <Link href="/user/profile">
              <button className="text-gray-700 hover:text-orange-500">
                <UserIcon />
              </button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <button className="text-gray-700 hover:text-orange-500">
                <UserIcon />
              </button>
            </Link>
          )}
          
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Sliding Menu */}
        <div
          className={`xl:hidden fixed top-0 right-0 h-full mx-auto w-[75%] md:w-[35%] bg-white shadow-md z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          {/* Close Icon */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-black mt-4 pr-4 hover:text-orange-500 absolute"
            >
              <CrossIcon />
            </button>
          </div>

          {/* logo and searchbar */}

          <Link href="/">
            <Image
              src={logo}
              alt="Chez Tati"
              width={40}
              height={40}
              className="w-[150px] h-[56px] mx-auto"
            />
          </Link>

          <div className="flex justify-center mt-4  w-9/12 mx-auto">
            <div className="flex justify-center relative">
              {/* Search Icon */}
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <SearchIcon />
              </span>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[40px] border border-[#E6E6E6] rounded-l-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />

              {/* Search Button */}
              <button className="bg-[#EA5326] text-white px-4 py-2 rounded-r-full hover:bg-orange-600 h-[40px] w-[88px]">
                Search
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="py-4 flex flex-col items-center">
            <div className="space-y-4 text-center">
              {/* Dropdown Menu */}
              <div className="relative group">
                <button className="flex items-center hover:text-orange-500 text-[#4E4E4E] font-semibold text-[18px]">
                  All Categories
                  <DownArrow />
                </button>
                <div className="absolute left-[-25px]  right-0 top-[175px] mt-2 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity z-50">
                  <Link
                    href="/products?category=All Categories"
                    className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white transition-all"
                  >
                    All Categories
                  </Link>
                  <Link
                    href="/products?category=Audio"
                    className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white transition-all"
                  >
                    Audio
                  </Link>
                  <Link
                    href="/products?category=Gaming"
                    className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white transition-all"
                  >
                    Gaming
                  </Link>
                  <Link
                    href="/products?category=Mobile"
                    className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white transition-all"
                  >
                    Mobile
                  </Link>
                  <Link
                    href="/products?category=tv"
                    className="block px-4 py-2 text-sm text-[#232323] hover:bg-orange-500 hover:text-white transition-all"
                  >
                    Television
                  </Link>
                </div>
              </div>

              {/* Links */}
              <Link
                href="/about-us"
                className="hover:text-orange-500 text-[#4E4E4E] inline-block font-semibold text-[18px]"
              >
                About Us
              </Link>
              <br />
              <Link
                href="/contact-us"
                className="hover:text-orange-500 inline-block text-[#4E4E4E] font-semibold text-[18px]"
              >
                Contact Us
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 mt-8">
              {/* Wishlist Icon with Badge */}
              <Link href="/wishlist-products">
                <button className="relative text-gray-700 hover:text-orange-500">
                  <HeartIcon />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
              </Link>

              {/* Cart Icon with Badge */}
              <Link href="/shopping-cart">
                <button className="relative text-gray-700 hover:text-orange-500">
                  <CartIcon />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </Link>

              {/* User Icon */}
              {storedUsers ? (
                <Link href="/user/profile">
                  <button className="text-gray-700 hover:text-orange-500">
                    <UserIcon />
                  </button>
                </Link>
              ) : (
                <Link href="/sign-in">
                  <button className="text-gray-700 hover:text-orange-500">
                    <UserIcon />
                  </button>
                </Link>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
