'use client'
import { useState, useEffect } from "react";
import Loading from "@/components/loading";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.in/api/products", {
        cache: "no-store",
      });
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products); // Set initial filtered products
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory && selectedCategory !== "All Categories") {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products when "All Categories" is selected
    }
  }, [selectedCategory, products]);

  return (
    <div className="max-w-[1320px] mx-auto min-h-screen mt-40 pb-10">
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
