"use client";
import { useState } from "react";
import SearchIcon from "../svg/SearchIcon";

const Sidebar = () => {
  const [selected, setSelected] = useState("Washing Machine");
  const items = [
    { label: "Laptop", count: 134 },
    { label: "Washing Machine", count: 150 },
    { label: "Iron", count: 54 },
    { label: "Freeze", count: 47 },
    { label: "Tv", count: 43 },
    { label: "Air Conditioner", count: 38 },
    { label: "Headphone", count: 15 },
  ];
  return (
    <aside className="w-full md:w-1/4 bg-white px-4">
      {/* Search */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder=" Search"
          className="w-full border border-gray-300 px-8 py-2 rounded-[20px]"
        />
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
          <SearchIcon />
        </span>
      </div>

      {/* Categories */}
      <div className="space-y-3">
      {items.map((item, index) => (
        <label
          key={index} // Each child now has a unique key
          className="flex items-center space-x-3 cursor-pointer"
        >
          <input
            type="radio"
            name="product"
            value={item.label}
            checked={selected === item.label}
            onChange={() => setSelected(item.label)}
            className="form-radio h-4 w-4 bg-customOrange border-gray-300 focus:ring-red-500"
          />
          <span className="text-gray-800">{item.label}</span>
          <span className="ml-auto text-gray-400">({item.count})</span>
        </label>
      ))}
    </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price</h3>
        <input
          type="range"
          className="w-full custom-range"
          min="50"
          max="1500"
        />
        <p className="mt-2">Price: 50 – 1,500</p>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-3">Rating</h3>
        <ul>
          {[5, 4, 3, 2, 1].map((rating) => (
            <li key={rating} className="mb-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="flex">
                  {Array(rating).fill("⭐").join("")}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
