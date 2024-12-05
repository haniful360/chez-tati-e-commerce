"use client";
import React from "react";
import CustomerFeedback from "@/components/products/CustomerFeedback";
import PorductDetails from "@/components/products/PorductDetails";
import ProductCard from "@/components/products/ProductCard";
import ProductInfo from "@/components/products/ProductInfo";
import category_banner from "@/public/icon/category_banner.svg";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import product3 from "@/public/images/product3.png";
import Image from "next/image";
const ProductDynamicPage = () => {
  const products = [
    { name: "New Smart Tv", price: 14.99, image: product3, discount: 50 },
    {
      name: "New Smart Freezer",
      price: 14.99,
      image: product1,
      discount: 50,
    },
    {
      name: "New Smart AC",
      price: 14.99,
      image: product2,
      isOutOfStock: true,
    }, 
    { name: "New Smart Tv", price: 14.99, image: product1 },
  ];
  return (
    <div className="bg-gray-100 md:py-20 md:pb-8 lg:mt-[75px]">
      <Image
        className="w-full"
        src={category_banner}
        height={130}
        width={1200}
        alt=""
        
      />
      <div className="max-w-[1280px] mx-auto p-6 mb-12">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6 ">
          <PorductDetails />
          <ProductInfo />
        </div>

        {/* Customer Feedback */}
        <div className="mt-12">
          <CustomerFeedback />
        </div>

        <div className="md:mt-6">
          <div>
            <h3 className="text-[35px] font-bold">Related Products</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDynamicPage;
