import Image from "next/image";
import Link from "next/link";
import CartIcon from "../svg/CartIcon";
import { useCart } from "@/context/CartContext";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const { title, price, image, isOutOfStock, discount } = product;
  const { cart, addToCart } = useCart();

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      // Show error alert
      Swal.fire({
        title: "Already in Cart",
        text: `${product.title} is already in your cart.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      // Add to cart and show success alert
      addToCart(product);
      Swal.fire({
        title: "Added to Cart!",
        text: `${product.title} has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-2 relative group hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out">
      {/* Product Link */}
      <Link href={`/products/${product.id}`}>
        <div>
          {/* Badge */}
          {discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-2 rounded-full">
              Sale {discount}%
            </span>
          )}
          {isOutOfStock && (
            <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}

          {/* Image */}
          <Image
            src={image}
            alt=""
            width={344}
            height={344}
            className="w-full h-[280px] rounded-md"
          />

          {/* Product Details */}
          <h4 className="font-bold text-base mt-4 text-[#EA5326]">
            {title?.slice(0, 50)}
          </h4>
          <p className=" text-[#232323] text-base">${price}</p>
          <div className="flex items-center justify-between pb-2 pr-2">
            <div className="flex gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Heart Icon */}
      <button className="absolute z-10 top-4 right-6 flex items-center justify-center w-[40px] h-[40px] bg-[#FDEEE9] text-black p-2 rounded-full shadow transition-all duration-[900ms] hover:bg-[#EA5326] hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart cursor-pointer"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      </button>

      {/* Cart Button */}
      <button
        onClick={() => handleAddToCart(product)}
        className="absolute z-10 bottom-4 right-6 w-[45px] h-[45px] bg-[#DFE1E3] text-black flex items-center justify-center px-3 py-2 rounded-full transition-all duration-[900ms] hover:bg-[#EA5326] hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
