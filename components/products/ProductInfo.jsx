import React from "react";
import CartIcon from "../svg/CartIcon";
import Link from "next/link";

const ProductInfo = () => {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-2xl font-bold">Smart Freezer</h2>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-lg">★★★★☆</span>
        <span className="text-gray-500 text-sm">(4 Reviews)</span>
        <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-md">
          In Stock
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-gray-400 line-through">$48.00</span>
        <span className="text-xl font-bold text-orange-500">$17.28</span>
        <span className="text-sm text-white bg-orange-500 px-2 py-1 rounded-md">
          64% Off
        </span>
      </div>
      <hr className="my-5" />
      <p className="text-gray-600 mt-4">
        <span className="font-semibold">Category</span>: Freeze
      </p>
      <p className="text-gray-600 mt-4">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex
        non nihil animi sapiente laudantium mollitia repellat reiciendis nostrum
        eum facilis, modi laborum ipsum labore. Dicta ea asperiores sunt
        voluptatum.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
          <button className="hover:text-orange-500 transition">-</button>
          <span>5</span>
          <button className="hover:text-orange-500 transition">+</button>
        </div>
        <Link href="/shoping-cart">
          <button className="bg-[#EA5326] w-full hover:bg-orange-500 text-white px-6 py-3 rounded-full transition">
            Buy Now
          </button>
        </Link>
        <button className="w-[45px] h-[45px] bg-[#DFE1E3] text-white flex items-center justify-center px-3 py-2 rounded-full">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
