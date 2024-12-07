"use client";
import React, { useState } from "react";

const AccountSetting = () => {
  const [account, setAccount] = useState({
    firstName: "Dianne",
    lastName: "Russell",
    email: "dianne.russell@gmail.com",
    phone: "(603) 555-0123",
  });

  const [billing, setBilling] = useState({
    firstName: "Dianne",
    lastName: "Dianne",
    companyName: "Zakirsoft",
    address: "4140 Parl",
    country: "United States",
    state: "Washington DC",
    zip: "20033",
    email: "dianne.russell@gmail.com",
    phone: "(603) 555-0123",
  });

  return (
    <div className="lg:col-span-3 space-y-6">
      <div className="mx-auto px-4 py-1">
        {/* Account Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow p-6 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">First Name</label>
                <input
                  type="text"
                  //   value={account.firstName}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  //   value={account.lastName}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  //   value={account.email}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  //   value={account.phone}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
                />
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Save Changes
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full h-36 w-36 mb-8"
              />
              <div className="text-center">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(e) => console.log(e.target.files[0])} // Handle file selection
                />
                <label
                  htmlFor="fileInput"
                  className="block mx-auto px-4 py-2 border text-orange-500 border-orange-600 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition"
                >
                  Choose Image
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">First Name</label>
              <input
                type="text"
                //   value={billing.firstName}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Last Name</label>
              <input
                type="text"
                //   value={billing.lastName}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-medium mb-1">
                Company Name (optional)
              </label>
              <input
                type="text"
                //   value={billing.companyName}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block font-medium mb-1">Street Address</label>
              <input
                type="text"
                //   value={billing.address}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Country / Region</label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">States</label>
              <input
                type="text"
                //   value={billing.state}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Zip Code</label>
              <input
                type="text"
                //   value={billing.zip}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                //   value={billing.email}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="text"
                //   value={billing.phone}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-orange-500"
              />
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-orange-5=600 text-white rounded-lg hover:bg-orange-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
