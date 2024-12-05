import Loading from "@/components/loading";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";
import { Suspense } from "react";

export default async function ProductsPage() {

  const response = await fetch("https://fakestoreapi.in/api/products", {
    cache: "no-store",
  });
  const products = await response.json();

  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-[1320px] mx-auto min-h-screen mt-40 pb-10">
        <div className="flex justify-end">
          <p className="text-base my-4">
            <span className="font-semibold">{products.products.length} </span>
            Results Found
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <Sidebar />

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
