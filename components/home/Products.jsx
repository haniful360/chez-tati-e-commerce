import Image from "next/image";
import React from "react";
import products1 from '@/public/images/products3.png'
import HeartIcon from "../svg/HeartIcon";

const products = [
  {
    id: 1,
    name: "Skateboard Shoe",
    price: "$125",
    image: "products1", // Replace with your image paths
  },
  {
    id: 2,
    name: "Skateboard Shoe",
    price: "$125",
    image: "/images/gadget1.jpg",
  },
  {
    id: 3,
    name: "Skateboard Shoe",
    price: "$125",
    image: "/images/shoe2.jpg",
  },

];

const Products = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Products
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
              New Arrival
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
              Discount
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition">
              Popular
            </button>
            <button className="px-4 py-2 border border-red-500 text-white bg-red-500 rounded-full hover:bg-red-600 transition">
              SHOES
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={products1}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                  <HeartIcon/>
                </button>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
