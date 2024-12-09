'use client'
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Swal from "sweetalert2";
import { useWishlist } from "@/context/WishListContext";
import { useEffect, useState } from "react";
import ProductCartIcon from "../svg/ProductCartIcon";
import WishlistIcon from "../svg/WishlistIcon";
import WishlistFilled from "../svg/WishlistFilled";

import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const { title, price, image, isOutOfStock, discount } = product;
  const { cart, addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const [loading, setLoading] = useState(false);
  const [storedUsers, setStoredUsers] = useState(null);
  
  
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("users");
    setStoredUsers(user);
  }, []);

  const handleWishlistToggle = () => {
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

    setLoading(true);

    // Simulate a delay of 1 second (1000ms)
    setTimeout(() => {
      toggleWishlist(product);
      setLoading(false);

      // Show the success/failure alert
      Swal.fire({
        title: `Wishlist Updated!`,
        text: `Product has been ${
          isProductInWishlist ? "removed from" : "added to"
        } your wishlist.`,
        icon: isProductInWishlist ? "info" : "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    }, 1000);
  };

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      // Show error alert
      Swal.fire({
        title: "Already in Cart",
        text: `Product is already in your cart.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      // Add to cart and show success alert
      addToCart(product);
      Swal.fire({
        title: "Added to Cart!",
        text: `Product has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-2 relative group hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      {/* Product Link */}
      <Link href={`/products/${product.id}`}>
        <div>
          {/* Badge */}
          {discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-2 rounded-full">
              Sale {discount}%
            </span>
          )}
          {isOutOfStock && (
            <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}

          {/* Image */}
          <Image
            src={image}
            alt=""
            width={344}
            height={344}
            className="w-full h-[280px] rounded-md"
          />

          {/* Product Details */}
          <h4 className="font-bold text-base mt-4 text-[#EA5326]">
            {title?.slice(0, 50).concat("...")}
          </h4>
          <p className="text-[#232323] text-base">${price}</p>
          <div className="flex items-center justify-between pb-2 pr-2">
            <div className="flex gap-1">
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Heart Icon with loading state */}
      <button
        onClick={handleWishlistToggle}
        className={`absolute z-10 top-4 right-6 flex items-center justify-center w-[40px] h-[40px] p-2 rounded-full shadow transition-all duration-1000 hover:bg-red-500 hover:text-white ${
          isProductInWishlist
            ? "bg-red-100 text-red-500"
            : "bg-gray-200 text-black"
        }`}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-t-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div> // Loading spinner
        ) : isProductInWishlist ? (
          <WishlistFilled />
        ) : (
          <WishlistIcon />
        )}
      </button>

      {/* Cart Button */}
      <button
        onClick={() => handleAddToCart(product)}
        className="absolute z-10 bottom-4 right-6 w-[45px] h-[45px] bg-[#DFE1E3] text-black flex items-center justify-center px-3 py-2 rounded-full transition-all duration-[900ms] hover:bg-[#EA5326] hover:text-white"
      >
        <ProductCartIcon />
      </button>
    </div>
  );
};

export default ProductCard;
