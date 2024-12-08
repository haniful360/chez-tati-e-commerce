'use client'
import Image from "next/image";
import React from "react";

import avater from "@/public/images/user.png";
import withAuth from "@/components/protectedRoute/withAuth";
const Profile = () => {
  const orders = [
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
  ];
  return (
    <div className="lg:col-span-3 space-y-6">
      {/* Profile Info */}
      <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <Image
            src={avater}
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
      <div className="bg-white rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-gray-800  text-sm lg:text-xl font-semibold px-6 pt-6">
            Recent Order History
          </h4>
          <button className="text-orange-500 font-semibold px-6 pt-6">View All</button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 rounded ">
              <th className="text-gray-600 font-medium p-4">Order ID</th>
              <th className="text-gray-600 font-medium p-4">Date</th>
              <th className="text-gray-600 font-medium p-4">Total</th>
              <th className="text-gray-600 font-medium p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.date}</td>
                <td className="p-4">{order.total}</td>
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
  );
};

export default withAuth(Profile);
