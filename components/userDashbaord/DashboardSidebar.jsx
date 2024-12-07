"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirection
import DashboardIcon from "@/components/svg/DashboardIcon";
import LogoutIcon from "@/components/svg/LogoutIcon";
import NewCartIcon from "@/components/svg/NewCartIcon";
import OrderIcon from "@/components/svg/OrderIcon";
import SettingIcon from "@/components/svg/SettingIcon";
import UserHeartIcon from "@/components/svg/UserHeartIcon";

const DashboardSidebar = () => {
  const [selected, setSelected] = useState("dashboard");
  const router = useRouter();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("users");
    setSelected("");
    router.push("/sign-in");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <nav>
        <ul className="space-y-4">
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "dashboard"
                ? "bg-[#FDEEE9] text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected("dashboard")}
          >
            <Link href="/dashboard">
              <div className="flex items-center gap-2">
                <DashboardIcon className="mr-3" />
                Dashboard
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "order-history"
                ? "bg-[#FDEEE9] text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected("order-history")}
          >
            <Link href="/order-history">
              <div className="flex items-center gap-2">
                <OrderIcon className="mr-3" />
                Order History
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "wishlist"
                ? "bg-[#FDEEE9] text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected("wishlist")}
          >
            <Link href="/wishlist">
              <div className="flex items-center gap-2">
                <UserHeartIcon className="mr-3" />
                Wishlist
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "shopping-cart"
                ? "bg-[#FDEEE9] text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected("shopping-cart")}
          >
            <Link href="/shopping-cart">
              <div className="flex items-center gap-2">
                <NewCartIcon className="mr-3" />
                Shopping Cart
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "settings"
                ? "bg-[#FDEEE9] text-black"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelected("settings")}
          >
            <Link href="/settings">
              <div className="flex items-center gap-2">
                <SettingIcon className="mr-3" />
                Settings
              </div>
            </Link>
          </li>
          <li
            className={`flex items-center gap-2 p-3 rounded-lg ${
              selected === "logout" ? "bg-[#FDEEE9]" : "hover:bg-gray-100"
            }`}
            onClick={handleLogout}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <LogoutIcon className="mr-3" />
              Log-out
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
