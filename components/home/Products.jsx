import Image from "next/image";
import React from "react";
import products1 from "@/public/images/products3.png";
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
  {
    id: 4,
    name: "Skateboard Shoe",
    price: "$125",
    image: "/images/shoe2.jpg",
  },
  {
    id: 5,
    name: "Skateboard Shoe",
    price: "$125",
    image: "/images/shoe2.jpg",
  },
  {
    id: 6,
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
          <div className="flex justify-end flex-wrap gap-4">
            <button className="px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full hover:bg-gray-200 transition  sm:w-auto">
              New Arrival
            </button>
            <button className="px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full hover:bg-gray-200 transition  sm:w-auto">
              Discount
            </button>
            <button className="px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-full hover:bg-gray-200 transition  sm:w-auto">
              Popular
            </button>
            <button className="px-4 py-2 text-sm sm:text-base border border-red-500 text-white bg-red-500 rounded-full hover:bg-red-600 transition sm:w-auto">
              SHOES
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product,index) => (
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={`${index * 100}`}
              key={product.id}
              className="rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={products1}
                  alt={product.name}
                  width={500}
                  height={286}
                  className="w-full h-auto rounded-[20px]"
                />
                <button className="absolute top-4 right-4 bg-[#232323] text-white p-2 rounded-full shadow hover:bg-gray-700 transition">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.88974 16.8662C9.39622 16.4286 8.83843 15.9733 8.24851 15.489H8.24086C6.16349 13.7904 3.80914 11.8683 2.76931 9.56523C2.42769 8.83201 2.24664 8.03427 2.23829 7.22541C2.23601 6.11556 2.68114 5.05163 3.47309 4.27407C4.26505 3.49652 5.33697 3.07098 6.44659 3.09363C7.34994 3.09506 8.23384 3.35614 8.99299 3.84577C9.32657 4.06228 9.62839 4.32418 9.88974 4.62392C10.1526 4.32536 10.4545 4.06361 10.7873 3.84577C11.5461 3.35604 12.4298 3.09495 13.3329 3.09363C14.4425 3.07098 15.5144 3.49652 16.3064 4.27407C17.0983 5.05163 17.5435 6.11556 17.5412 7.22541C17.5334 8.03556 17.3523 8.83466 17.0102 9.56905C15.9703 11.8721 13.6168 13.7934 11.5394 15.489L11.5317 15.4951C10.9411 15.9764 10.384 16.4316 9.89051 16.8724L9.88974 16.8662ZM6.44659 4.62392C5.73387 4.615 5.04643 4.88778 4.53373 5.38295C4.03974 5.86817 3.76366 6.53299 3.76852 7.22541C3.77725 7.81496 3.91077 8.39597 4.16034 8.93016C4.65119 9.92385 5.3135 10.8232 6.11682 11.5867C6.87507 12.3519 7.74734 13.0925 8.50177 13.7154C8.71066 13.8875 8.92337 14.0612 9.13608 14.2349L9.26998 14.3443C9.47427 14.5111 9.68545 14.684 9.88974 14.8539L9.89969 14.8447L9.90428 14.8409H9.90887L9.91576 14.8355H9.91958H9.92341L9.93718 14.8241L9.96855 14.7988L9.97391 14.7942L9.98233 14.7881H9.98692L9.9938 14.782L10.5019 14.365L10.635 14.2556C10.85 14.0803 11.0627 13.9067 11.2716 13.7345C12.026 13.1117 12.8991 12.3718 13.6573 11.6028C14.4607 10.8396 15.1231 9.94054 15.6138 8.94699C15.8679 8.40817 16.0033 7.82108 16.0109 7.22541C16.0141 6.53513 15.7381 5.87286 15.2458 5.38907C14.734 4.89166 14.0465 4.61664 13.3329 4.62392C12.4621 4.61652 11.6296 4.98153 11.0451 5.62703L9.88974 6.95838L8.73437 5.62703C8.14985 4.98153 7.31739 4.61652 6.44659 4.62392Z"
                      fill="#F8FAFC"
                    />
                  </svg>
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
