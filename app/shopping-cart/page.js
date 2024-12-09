"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import banner from "@/public/images/banner-section.png";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";
import CrossIcon from "@/components/svg/CrossIcon";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateCart } = useCart();
  const [storedUsers, setStoredUsers] = useState(null);
  const router = useRouter();


  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "Shopping-Cart" },
  ];

  useEffect(() => {
    const user = localStorage.getItem("users");
    setStoredUsers(user);
  }, []);

  useEffect(() => {
    document.title = "Shopping Cart | Chez Tati";
  }, []);

  // Update quantity of existing cart item
  const updateQuantity = (id, operation) => {
    updateCart(id, operation); 
  };
  

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () =>{
    // if not user auth
    if (!storedUsers) {
      Swal.fire({
        title: "Authentication Required",
        text: "You need to log in to add products to your wishlist.",
        icon: "warning",
        confirmButtonText: "Sign In",
      }).then(() => {

        router.push("/sign-in");
      });
      return;
    }
    // proceed checkout
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Are you sure you want to proceed to the checkout page?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#EA5326",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/checkout";
      }
    })
  }

  return (
    <div>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="max-w-[1320px] mx-auto px-4 pb-10">
        <h1 className="text-3xl font-semibold my-10">My Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
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
                                alt=""
                                className="w-16 h-16 rounded-md object-cover"
                                height={64}
                                width={64}
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                            )}
                            <span className="text-sm lg:text-base">
                              {item.title.slice(0, 60)}
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
                              Swal.fire({
                                title: "Are you sure?",
                                text: "This item will be removed from your cart!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#EA5326",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, Remove it",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  removeFromCart(item.id);
                                  Swal.fire(
                                    "Removed!",
                                    "The item has been removed from your cart.",
                                    "success"
                                  );
                                }
                              });
                            }}
                            className="text-red-500"
                          >
                            <CrossIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between py-4">
                <Link href="/products">
                  <button className="bg-gray-100 px-3 py-2 rounded font-medium text-[15px] text-gray-700 hover:bg-gray-300 transition-all duration-500 ">
                    Return to shop
                  </button>
                </Link>
                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "This action will remove all items from your cart!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#EA5326",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, Clear Cart",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        clearCart();
                        Swal.fire(
                          "Cleared!",
                          "Your cart has been emptied.",
                          "success"
                        );
                      }
                    });
                  }}
                  className="bg-gray-100 px-3 py-2 rounded font-medium text-[15px] text-gray-700 hover:bg-gray-300 transition-all duration-500"
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
              <button
                onClick={handleCheckout}
                className="w-full mt-4 px-4 py-2 bg-[#EA5326] hover:bg-orange-500 text-white rounded-lg transition-all ease-in duration-300"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-4 text-gray-500">
              Looks like you have not added anything to your cart yet.
            </p>
            <Link href="/products">
              <button className="mt-6 px-6 py-2 bg-[#EA5326] hover:bg-orange-500 text-white rounded-lg transition-all ease-in duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
