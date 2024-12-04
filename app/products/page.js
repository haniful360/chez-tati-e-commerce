import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import product3 from "@/public/images/product3.png";

export default function ProductsPage() {
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
    <div className="max-w-[1280px] mx-auto bg-gray-50 min-h-screen p-4 mt-40">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Products Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
