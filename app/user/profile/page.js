'use client'
import DashboardIcon from "@/components/svg/DashboardIcon";
import LogoutIcon from "@/components/svg/LogoutIcon";
import NewCartIcon from "@/components/svg/NewCartIcon";
import OrderIcon from "@/components/svg/OrderIcon";
import SettingIcon from "@/components/svg/SettingIcon";
import UserHeartIcon from "@/components/svg/UserHeartIcon";
import Image from "next/image";
import React, { useState } from "react";

const UserProfile = () => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <div className="min-h-screen bg-gray-100 mt-[140px]">
      <div className="max-w-[1320px] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
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
                  <DashboardIcon className="mr-3" />
                  Dashboard
                </li>
                <li
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    selected === "order-history"
                      ? "bg-[#FDEEE9] text-black"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelected("order-history")}
                >
                  <OrderIcon className="mr-3" />
                  Order History
                </li>
                <li
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    selected === "wishlist"
                      ? "bg-[#FDEEE9] text-black"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelected("wishlist")}
                >
                  <UserHeartIcon className="mr-3" />
                  Wishlist
                </li>
                <li
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    selected === "shopping-cart"
                      ? "bg-[#FDEEE9] text-black"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelected("shopping-cart")}
                >
                  <NewCartIcon className="mr-3" />
                  Shopping Cart
                </li>
                <li
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    selected === "settings"
                      ? "bg-[#FDEEE9] text-black"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelected("settings")}
                >
                  <SettingIcon className="mr-3" />
                  Settings
                </li>
                <li
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    selected === "logout"
                      ? "bg-[#FDEEE9]"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelected("logout")}
                >
                  <LogoutIcon className="mr-3" />
                  Log-out
                </li>
              </ul>
            </nav>
          </div>

          {/* Profile and Order Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Info */}
            <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto"
                />
                <h3 className="text-lg font-medium mt-4">Dianne Russell</h3>
                <p className="text-gray-500">Customer</p>
                <button className="text-orange-600 mt-2">Edit Profile</button>
              </div>
              <div>
                <h4 className="text-gray-800 font-medium">Billing Address</h4>
                <p className="text-gray-600 mt-2">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-gray-600">dainne.russell@gmail.com</p>
                <p className="text-gray-600">(671) 555-0110</p>
                <button className="text-orange-600 mt-2">Edit Address</button>
              </div>
            </div>

            {/* Recent Order History */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-gray-800  text-sm lg:text-xl font-semibold">
                  Recent Order History
                </h4>
                <button className="text-orange-500 font-semibold">View All</button>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 rounded">
                    <th className="text-gray-600 font-medium py-2">Order ID</th>
                    <th className="text-gray-600 font-medium py-2">Date</th>
                    <th className="text-gray-600 font-medium py-2">Total</th>
                    <th className="text-gray-600 font-medium py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "#738",
                      date: "8 Sep, 2020",
                      total: "$135.00",
                      status: "Processing",
                    },
                    {
                      id: "#703",
                      date: "24 May, 2020",
                      total: "$25.00",
                      status: "On the way",
                    },
                    {
                      id: "#130",
                      date: "22 Oct, 2020",
                      total: "$250.00",
                      status: "Completed",
                    },
                  ].map((order, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{order.id}</td>
                      <td className="py-2">{order.date}</td>
                      <td className="py-2">{order.total}</td>
                      <td
                        className={`py-2 font-medium ${
                          order.status === "Processing"
                            ? "text-yellow-500"
                            : order.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
