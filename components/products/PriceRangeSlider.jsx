import { useState } from "react";

const PriceRangeSlider = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(1500);
  
  const handleMinPriceChange = (event) => {
    const value = Math.min(Number(event.target.value), maxPrice - 10); // Ensure min price is always less than max
    setMinPrice(value);
    onPriceChange(value, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 10); // Ensure max price is always greater than min
    setMaxPrice(value);
    onPriceChange(minPrice, value);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="relative w-full h-2 bg-gray-300 rounded-full">
          <input
            type="range"
            min="0"
            max="5000"
            step="1"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="absolute w-full h-2 text-orange-500-500 rounded-full"
            style={{ zIndex: 1 }}
          />
          <input
            type="range"
            min="0"
            max="5000"
            step="1"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="absolute w-full h-2 bg-orange-500 rounded-full"
            style={{ zIndex: 2 }}
          />
          <div
            className="absolute left-0 top-0 w-5 h-5 bg-white border-2 border-orange-500 rounded-full"
            style={{ left: `calc(${(minPrice / 5000) * 100}% - 0.5rem)` }}
          ></div>
          <div
            className="absolute left-0 top-0 w-5 h-5 bg-white border-2 border-orange-500 rounded-full"
            style={{ left: `calc(${(maxPrice / 5000) * 100}% - 0.5rem)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
