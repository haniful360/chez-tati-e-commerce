"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeartIcon from "../svg/HeartIcon";
import Swal from "sweetalert2";
import { useWishlist } from "@/context/WishListContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingWishlist, setLoadingWishlist] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.in/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products.slice(0, 8)); // Limit to first 8 products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { wishlist, toggleWishlist } = useWishlist();

  const handleWishlistToggle = async (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setLoadingWishlist(product.id); // Set loading state to the product being processed

    try {
      // Simulate an API request or a time delay for adding/removing from wishlist
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating a 1-second delay

      toggleWishlist(product);
      const action = isProductInWishlist ? "removed from" : "added to";

      Swal.fire({
        title: "Wishlist Updated!",
        text: ` has been ${action} your wishlist.`,
        icon: isProductInWishlist ? "info" : "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } finally {
      setLoadingWishlist(null); // Reset loading state after the operation is done
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  const categories = [
    { label: "New Arrival", className: "border-gray-300 hover:bg-gray-200" },
    { label: "Discount", className: "border-gray-300 hover:bg-gray-200" },
    { label: "Popular", className: "border-gray-300 hover:bg-gray-200" },
    {
      label: "SHOES",
      className: "border-red-500 bg-red-500 text-white hover:bg-red-600",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Products
          </h1>
          <div className="flex gap-4 flex-wrap">
            {categories.map(({ label, className }) => (
              <button
                key={label}
                className={`px-4 py-2 text-sm sm:text-base border rounded-full transition sm:w-auto ${className}`}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Product Link */}
              <Link href={`/products/${product.id}`} className="block">
                <div>
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={286}
                      className="w-full h-auto rounded-[20px]"
                      priority={index < 2} // Prioritize first few images for faster load
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 mt-1">${product.price}</p>
                  </div>
                </div>
              </Link>

              {/* Wishlist Button */}
              <button
                onClick={() => handleWishlistToggle(product)}
                className={`absolute z-10 top-4 right-6 flex items-center justify-center w-[40px] h-[40px] p-2 rounded-full shadow transition-all duration-300 ${
                  wishlist.some((item) => item.id === product.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {loadingWishlist === product.id ? (
                 <div className="w-4 h-4 border-2 border-t-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <HeartIcon />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
