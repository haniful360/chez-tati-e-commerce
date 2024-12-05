import Image from "next/image";
import Link from "next/link";
import CartIcon from "../svg/CartIcon";
import HeartIcon from "../svg/HeartIcon";

const ProductCard = ({ product }) => {
  console.log(product);
  const { title, price, image, isOutOfStock, discount } = product;

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-2 relative group hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out">
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
        className="w-full h-[280px]  rounded-md"
      />

      <button className="absolute z-10 top-4 right-6 w-[45px] h-[45px] bg-[#FDEEE9] text-white p-2 rounded-full shadow transition ease-in duration-100 hover:bg-[#EA5326] hover:text-white">
        <HeartIcon />
      </button>

      {/* Details */}
      <h4 className="font-bold text-base mt-4 text-[#EA5326]">
        {title.slice(0, 50)}
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
        <button className="w-[45px] h-[45px] bg-[#DFE1E3] text-white flex items-center justify-center px-3 py-2 rounded-full">
          <CartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
