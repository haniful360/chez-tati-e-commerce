"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Swal from "sweetalert2";
import { useWishlist } from "@/context/WishListContext";
import WishlistFilled from "../svg/WishlistFilled";
import WishlistIcon from "../svg/WishlistIcon";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingWishlist, setLoadingWishlist] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Set number of products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.in/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.products); // Fetch all products for pagination
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const { wishlist, toggleWishlist } = useWishlist();

  const handleWishlistToggle = async (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setLoadingWishlist(product.id);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toggleWishlist(product);
      const action = isProductInWishlist ? "removed from" : "added to";

      Swal.fire({
        title: "Wishlist Updated!",
        text: `Product has been ${action} your wishlist.`,
        icon: isProductInWishlist ? "info" : "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } finally {
      setLoadingWishlist(null);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  // Paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          {currentProducts.map((product, index) => (
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
                      priority={index < 2}
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
                className={`absolute z-10 top-4 right-6 flex items-center justify-center w-[40px] h-[40px] p-2 rounded-full shadow transition-all duration-1000 hover:bg-red-500 hover:text-white ${
                  wishlist.some((item) => item.id === product.id)
                    ? "bg-red-100 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {loadingWishlist === product.id ? (
                  <div className="w-4 h-4 border-2 border-t-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                ) : wishlist.some((item) => item.id === product.id) ? (
                  <WishlistFilled /> 
                ) : (
                  <WishlistIcon />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-end my-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-5 py-2 bg-[#EA5326] text-white rounded-full shadow-md hover:bg-[#D14924] disabled:opacity-50 transition-all duration-300"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? "bg-[#EA5326] text-white font-semibold shadow-md"
                  : "bg-white text-gray-600 border-2 border-gray-300 hover:bg-[#EA5326] hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-5 py-2 bg-[#EA5326] text-white rounded-full shadow-md hover:bg-[#D14924] disabled:opacity-50 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
