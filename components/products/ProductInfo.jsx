'use client'
import React, { useState } from "react";
import CartIcon from "../svg/CartIcon";
import Buynow from "../svg/Buynow";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ProductInfo = () => {
  const router = useRouter();

  // State for quantity and price
  const [quantity, setQuantity] = useState(1);
  const basePrice = 17.28; // Base price for a single product
  const totalPrice = (basePrice * quantity).toFixed(2); // Calculate total price based on quantity

  // Function to update quantity
  const updateQuantity = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Function to handle Add to Cart button click
  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Smart Freezer",
      quantity,
      price: totalPrice,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      Swal.fire({
        title: "Error!",
        text: "This product is already in your cart.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      Swal.fire({
        title: "Success!",
        text: "Product added to your Shopping cart.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  // Function to handle Buy Now button click
  const handleBuyNow = () => {
    const product = {
      id: 1,
      name: "Smart Freezer",
      quantity,
      price: totalPrice,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, just update the quantity without showing the success alert
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Otherwise, add the product to the cart and show success alert
      cart.push(product);

      Swal.fire({
        title: "Success!",
        text: "Product added to your Shopping cart. Redirecting to checkout...",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // After the alert is closed, redirect to the checkout page
        router.push("/shopping-cart");
      });
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // If the product was already in the cart, immediately redirect to checkout without showing the success alert
    if (existingProductIndex !== -1) {
      router.push("/shopping-cart");
    }
  };

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
        <span className="text-xl font-bold text-orange-500">${totalPrice}</span>
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
        <button
          onClick={handleBuyNow}
          className="bg-[#EA5326] hover:bg-orange-500 text-white px-6 py-3 rounded-full transition flex items-center gap-2"
        >
          Buy Now
          <Buynow />
        </button>
        <button
          onClick={handleAddToCart}
          className="w-[45px] h-[45px] bg-[#DFE1E3] text-white flex items-center justify-center px-3 py-2 rounded-full"
        >
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
