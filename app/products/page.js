"use client";

import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import ClientProductsPage from "@/components/products/ClientProductsPage";
import Loading from "@/components/loading";
import banner from "@/public/images/banner-section.png";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products", {
          cache: "no-store",
        });
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
          <ClientProductsPage products={products} />
        </div>
      )}
    </>
  );
}
