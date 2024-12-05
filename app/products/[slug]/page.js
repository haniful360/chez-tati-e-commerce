"use client";
import React, { useState, useEffect } from "react";
import PorductDetails from "@/components/products/PorductDetails";
import ProductInfo from "@/components/products/ProductInfo";
import CustomerFeedback from "@/components/products/CustomerFeedback";
import category_banner from "@/public/icon/category_banner.svg";
import Image from "next/image";
import Loading from "@/components/loading";

const ProductDynamicPage = ({ params }) => {
  const { slug: id } = React.use(params);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await fetch(
          `https://fakestoreapi.in/api/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div><Loading/></div>;
  }

  return (
    <div className="bg-gray-100 md:py-20 md:pb-8 lg:mt-[75px]">
      <Image
        className="w-full"
        src={category_banner}
        height={130}
        width={1200}
        alt="Category Banner"
      />
      <div className="max-w-[1280px] mx-auto p-6 mb-12">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          <PorductDetails product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Customer Feedback */}
        <div className="mt-12">
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default ProductDynamicPage;
