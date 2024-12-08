"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Loading from "@/components/loading";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";
import banner from "@/public/images/banner-section.png";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();

  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories" },
  ];

  useEffect(() => {
    document.title = "Products | Chez Tati";
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.in/api/products", {
        cache: "no-store",
      });
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products); // Set initial filtered products
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the selected category from the URL
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
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get products for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <Suspense>
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="relative max-w-[1320px] mx-auto min-h-screen pb-10">
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 z-50">
            <Loading />
          </div>
        )}

        <div className="flex justify-end">
          <p className="text-base my-4">
            <span className="font-semibold">{filteredProducts.length} </span>
            Results Found
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Sidebar onCategorySelect={handleCategorySelect} /> {/* Sidebar */}
          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
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
    </Suspense>
  );
}
