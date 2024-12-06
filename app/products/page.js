"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/loading"; // This component should be your full-page loader
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true); // New state to track loading

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      const response = await fetch("https://fakestoreapi.in/api/products", {
        cache: "no-store",
      });
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products); // Set initial filtered products
      setIsLoading(false); // Set loading to false once data is fetched
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory && selectedCategory !== "All Categories") {
      const filtered = products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products when "All Categories" is selected
    }
  }, [selectedCategory, products]);

  return (
    <div className="relative max-w-[1320px] mx-auto min-h-screen mt-40 pb-10">
      {/* Full-page Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 z-50">
          <Loading /> {/* Your full-page loading component */}
        </div>
      )}

      <div className="flex justify-end">
        <p className="text-base my-4">
          <span className="font-semibold">{filteredProducts.length} </span>
          Results Found
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <Sidebar onCategorySelect={setSelectedCategory} />

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
