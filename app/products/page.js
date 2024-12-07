"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Loading from "@/components/loading";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();

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
  };

  return (
    <div className="relative max-w-[1320px] mx-auto min-h-screen mt-40 pb-10">
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
