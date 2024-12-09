"use client";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishListContext";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import CartIcon from "@/components/svg/CartIcon";
import HeartIcon from "@/components/svg/HeartIcon";
import EmptyIcon from "@/components/svg/EmptyIcon";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";
import banner from "@/public/images/banner-section.png";

const WishlistProducts = () => {
  const { cart, addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [loadingProductId, setLoadingProductId] = useState(null);

  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "Favorite Products" },
  ];

  useEffect(() => {
    document.title = "Wishlist | Chez Tati";
  }, []);

  const handleWishlistToggle = (product) => {
    setLoadingProductId(product.id);
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    setTimeout(() => {
      toggleWishlist(product);
      setLoadingProductId(null); // Reset loading state after action

      const action = isProductInWishlist ? "removed from" : "added to";
      Swal.fire({
        title: `Product ${action} your wishlist.`,
        icon: isProductInWishlist ? "info" : "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    }, 1000); // Simulate a delay (like an API call)
  };

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

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen">
        <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
        <div className="max-w-[1320px] mx-auto p-4 ">
          <h2 className="text-base md:text-xl lg:text-4xl font-semibold py-4 md:py-10">
            Favorite
          </h2>
          <div className="flex flex-col items-center justify-center pb-16 text-center">
            <EmptyIcon />
            <h2 className="text-lg font-semibold">
              You do not have any favorite products
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="max-w-[1320px] mx-auto py-10">
        <h2 className="text-sm md:text-xl lg:text-4xl font-semibold  mb-10">
          Favorite
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg shadow-md p-2 relative group hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out"
            >
              {/* Product Link */}
              <Link href={`/products/${product.id}`}>
                <div>
                  {/* Badge */}
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-2 rounded-full">
                      Sale {product.discount}%
                    </span>
                  )}
                  {product.isOutOfStock && (
                    <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}

                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={344}
                    height={344}
                    className="w-full h-[280px] rounded-md"
                  />

                  {/* Product Details */}
                  <h4 className="font-bold text-base mt-4 text-[#EA5326]">
                    {product.title?.slice(0, 50)}
                  </h4>
                  <p className=" text-[#232323] text-base">${product.price}</p>
                  <div className="flex items-center justify-between pb-2 pr-2">
                    <div className="flex gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-yellow-500">★</span>
                      <span className="text-yellow-500">★</span>
                      <span className="text-yellow-500">★</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Heart Icon with Spinner */}
              <button
                onClick={() => handleWishlistToggle(product)}
                className={`absolute z-10 top-4 right-6 flex items-center justify-center w-[40px] h-[40px] p-2 rounded-full shadow transition-all duration-300 ${
                  wishlist.some((item) => item.id === product.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {loadingProductId === product.id ? (
                  <div className="w-4 h-4 border-2 border-t-2 border-gray-400 rounded-full animate-spin"></div>
                ) : (
                  <HeartIcon />
                )}
              </button>

              {/* Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute z-10 bottom-4 right-6 w-[45px] h-[45px] bg-[#DFE1E3] text-black flex items-center justify-center px-3 py-2 rounded-full transition-all duration-[900ms] hover:bg-[#EA5326] hover:text-white"
              >
                <CartIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistProducts;
