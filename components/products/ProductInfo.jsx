"use client";
import React, { useState, useEffect } from "react";
import CartIcon from "../svg/CartIcon";
import Buynow from "../svg/Buynow";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const ProductInfo = ({ product }) => {
  const { cart, addToCart } = useCart();

  // State for quantity and price
  const [quantity, setQuantity] = useState(1);
  const basePrice = product.product.price; // Base price from the product object
  const [totalPrice, setTotalPrice] = useState(basePrice); // Calculate total price based on quantity

  // Function to update quantity
  const updateQuantity = (action) => {
    if (action === "increment") {
      setQuantity((prev) => {
        const newQuantity = prev + 1;
        setTotalPrice((basePrice * newQuantity).toFixed(2)); // Update total price dynamically
        return newQuantity;
      });
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        setTotalPrice((basePrice * newQuantity).toFixed(2)); // Update total price dynamically
        return newQuantity;
      });
    }
  };

  // Function to handle Add to Cart button click
  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      // Show error alert
      Swal.fire({
        title: `Product is already in your cart.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      // Add to cart and show success alert
      addToCart(product);
      Swal.fire({
        title: "Product has been added to your cart.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="lg:w-1/2">
      <h2 className="text-2xl font-bold">{product.product.title}</h2>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-lg">★★★★☆</span>
        <span className="text-gray-500 text-sm">(4 Reviews)</span>
        <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-md">
          In Stock
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-gray-400 line-through">$48.00</span>
        <span className="text-xl font-bold text-orange-500">${totalPrice}</span>
        <span className="text-sm text-white bg-orange-500 font-semibold px-2 py-1 rounded-md">
          {product.product.discount} % Off
        </span>
      </div>
      <hr className="my-5" />
      <p className="text-gray-600 mt-4">
        <span className="font-semibold">Category</span>:
        {product.product.category}
      </p>
      <p className="text-gray-600 mt-4">{product.product.description}</p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center gap-3 border-2 border-gray-300 w-[105px] rounded-full">
          <button
            onClick={() => updateQuantity("decrement")}
            className="flex justify-center items-center w-[39px] h-[35px] shadow bg-gray-100 rounded-full hover:bg-[#EA5326] hover:text-white transition ease-in duration-300"
          >
            -
          </button>
          <span className="text-sm lg:text-base">{quantity}</span>
          <button
            onClick={() => updateQuantity("increment")}
            className="flex justify-center items-center w-[39px] h-[35px] shadow bg-gray-100 rounded-full hover:bg-[#EA5326] hover:text-white transition ease-in duration-300"
          >
            +
          </button>
        </div>
        <Link href='/shopping-cart'>
          <button
            // onClick={handleBuyNow}
            className="bg-[#EA5326] hover:bg-orange-500 text-white px-6 py-3 rounded-full transition flex items-center gap-2"
          >
            Buy Now
            <Buynow />
          </button>
        </Link>
        <button
          onClick={() => handleAddToCart(product.product)}
          className="w-[45px] h-[45px] bg-[#DFE1E3] text-white flex items-center justify-center px-3 py-2 rounded-full"
        >
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
