import CustomerFeedback from "@/components/products/CustomerFeedback";
import PorductDetails from "@/components/products/PorductDetails";
import ProductInfo from "@/components/products/ProductInfo";
import React from "react";

const ProductDynamicPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-6">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-40">
        <PorductDetails/>
        <ProductInfo />
      </div>

      {/* Customer Feedback */}
      <div className="mt-12">
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default ProductDynamicPage;
