"use client";
import { useState } from "react";
import SearchIcon from "../svg/SearchIcon";
import PriceRangeSlider from "./PriceRangeSlider";
import StarIcon from "../svg/StarIcon";

const Sidebar = ({ onCategorySelect }) => {
  const [selected, setSelected] = useState("All Categories");

  // Categories with counts
  const items = [
    { label: "All Categories", count: 50 },
    { label: "Audio", count: 24 },
    { label: "Mobile", count: 14 },
    { label: "Gaming", count: 7 },
    { label: "Television", count: 65 },
  ];

  const handleCategoryChange = (category) => {
    setSelected(category); // Update local state
    if (onCategorySelect) {
      onCategorySelect(category); // Notify the parent
    }
  };

  return (
    <aside className="w-full md:w-1/4 bg-white px-4">
      {/* Search */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-8 py-2 rounded-[20px]"
        />
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
          <SearchIcon />
        </span>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={item.label}
                checked={selected === item.label}
                onChange={() => handleCategoryChange(item.label)}
                className="form-radio h-4 w-4 bg-customOrange border-gray-300 focus:ring-red-500"
              />
              <span className="text-gray-800">{item.label}</span>
              <span className="ml-auto text-gray-400">({item.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-xl">Price</h3>
        <input type="range" className="w-10/12" />
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
      <span className="flex gap-1 text-orange-600">
        {Array(rating)
          .fill(null)
          .map((_, index) => (
            <StarIcon key={index}/>
          ))}
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
