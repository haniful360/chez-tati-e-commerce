"use client";
import React, { useState, useEffect } from "react";
import PorductImage from "@/components/products/PorductImage";
import ProductInfo from "@/components/products/ProductInfo";
import CustomerFeedback from "@/components/products/CustomerFeedback";
import ProductCard from "@/components/products/ProductCard";
import banner from "@/public/images/banner-section.png";
import Image from "next/image";
import Loading from "@/components/loading";
import PageBanner from "@/components/PageBanner";
import HomeIcon from "@/components/svg/HomeIcon";

const ProductDynamicPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Product Details | Chez Tati";
  }, []);


  useEffect(() => {
    const fetchParams = async () => {
      const { slug: id } = await params;

      if (id) {
        const fetchProduct = async () => {
          setIsLoading(true);
          try {
            // Fetch the current product
            const response = await fetch(
              `https://fakestoreapi.in/api/products/${id}`
            );
            const data = await response.json();
            console.log("Product:", data);
            setProduct(data);

            // Fetch related products
            const allProductsResponse = await fetch(
              "https://fakestoreapi.in/api/products"
            );
            const allProductsData = await allProductsResponse.json();

            // Filter related products by category
            const related = allProductsData.products.filter(
              (item) => item.category === data.product.category && item.id !== data.id
            );
            console.log("Related Products:", related);
            setRelatedProducts(related);
          } catch (error) {
            console.error("Error fetching product or related products:", error);
          } finally {
            setIsLoading(false);
          }
        };

        fetchProduct();
      }
    };
    fetchParams();
  }, [params]);

  if (isLoading || !product) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const breadcrumbs = [
    { label: <HomeIcon />, href: "/" },
    { label: 'Categories', href: "/products" },
    { label: "Details" },
  ];

  return (
    <div className="md:pb-8">
      <PageBanner backgroundImage={banner} breadcrumbs={breadcrumbs} />
      <div className="max-w-[1280px] mx-auto p-6 mb-12">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          <PorductImage product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Customer Feedback */}
        <div className="mt-12">
          <CustomerFeedback />
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))
            ) : (
              <h5 className="text-gray-500 text-xl">No related products found.</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDynamicPage;
