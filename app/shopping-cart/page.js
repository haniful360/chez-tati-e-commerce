// pages/cart.js
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import category_banner from "@/public/icon/category_banner.svg";
import Image from "next/image";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Update cart data in localStorage whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add product to cart (check if product already exists and update quantity)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item does not exist, add it to the cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity of existing cart item
  const updateQuantity = (id, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                operation === "increment"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // Subtotal calculation
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 py-16 mt-20">
      <Image
        className="w-full"
        src={category_banner}
        height={130}
        width={1200}
        alt=""
      />
      <div className="max-w-[1280px] mx-auto px-4">
        <h1 className="text-3xl font-semibold my-10">My Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            {/* Add overflow-x-auto wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] lg:min-w-full">
                <thead>
                  <tr>
                    <th className="text-left font-medium text-gray-500 text-sm lg:text-base px-2">
                      PRODUCT
                    </th>
                    <th className="text-left font-medium text-gray-500 text-sm lg:text-base px-2">
                      PRICE
                    </th>
                    <th className="text-left font-medium text-gray-500 text-sm lg:text-base px-2">
                      QUANTITY
                    </th>
                    <th className="text-left font-medium text-gray-500 text-sm lg:text-base px-2">
                      SUBTOTAL
                    </th>
                    <th className="text-left font-medium text-gray-500 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 transition ease-in duration-300"
                    >
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-4">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 rounded-md object-cover"
                              height={64}
                              width={64}
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                          )}
                          <span className="text-sm lg:text-base">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="text-sm lg:text-base px-2">
                        ${Number(item.price).toFixed(2)}
                      </td>
                      <td className="px-2">
                        <div className="flex items-center gap-3 border-2 border-gray-300 w-[105px] rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, "decrement")}
                            className="flex justify-center items-center w-[39px] h-[35px] shadow bg-gray-100 rounded-full hover:bg-[#EA5326] hover:text-white transition ease-in duration-300"
                          >
                            -
                          </button>
                          <span className="text-sm lg:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, "increment")}
                            className="flex justify-center items-center w-[39px] h-[35px] shadow bg-gray-100 rounded-full hover:bg-[#EA5326] hover:text-white transition ease-in duration-300"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-sm lg:text-base px-2">
                        ${Number(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-2">
                        <button
                          onClick={() => {
                            // Remove item from state
                            setCart((prevCart) => {
                              const updatedCart = prevCart.filter(
                                (cartItem) => cartItem.id !== item.id
                              );
                              // Update localStorage after removing the item
                              localStorage.setItem(
                                "cart",
                                JSON.stringify(updatedCart)
                              );
                              return updatedCart;
                            });
                          }}
                          className="text-red-500"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between">
              <Link href="/products">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
                  Return to shop
                </button>
              </Link>
              <button
                onClick={() => {
                  // Trigger SweetAlert for confirmation
                  Swal.fire({
                    title: "All products will be removed from your cart",
                    text: "Remove",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#EA5326",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Remove All",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // Clear the cart in state
                      setCart([]);
                      // Remove the cart from localStorage
                      localStorage.removeItem("cart");
                      // Show success message
                      Swal.fire(
                        "Cleared!",
                        "Your cart has been cleared.",
                        "success"
                      );
                    }
                  });
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between border-b pb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold mt-4">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-[#EA5326] hover:bg-orange-500 text-white rounded-lg transition-all ease-in duration-300">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
