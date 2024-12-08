"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";


export default function ClientProductsPage({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  useEffect(() => {
    // Filter products based on category
    if (category && category !== "All Categories") {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if no category selected
    }
  }, [category, products]);

  const handleCategorySelect = (category) => {
    router.push(`/products?category=${category}`);
    setCurrentPage(1); // Reset pagination
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="relative max-w-[1320px] mx-auto min-h-screen pb-10">
      <div className="flex justify-end">
        <p className="text-base my-4">
          <span className="font-semibold">{filteredProducts.length} </span>
          Results Found
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Sidebar onCategorySelect={handleCategorySelect} />
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-end my-12 space-x-2">
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
  );
}
