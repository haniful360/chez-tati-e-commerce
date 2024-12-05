import Image from "next/image";
import Link from "next/link";
import CartIcon from "../svg/CartIcon";

const ProductCard = ({ product }) => {
  console.log(product);
  const { title, price, image, isOutOfStock, discount } = product;

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-2 relative group">
    {/* Badge */}
    {discount && (
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
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
      alt=''
      width={344}
      height={344}
      className="w-full h-[344px] object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out"
    />
    
    <button className="absolute z-10 top-4 right-6 w-[45px] h-[45px] bg-[#FDEEE9] text-white p-2 rounded-full shadow transition ease-in duration-100 hover:bg-[#EA5326] hover:text-white">
      <svg
        width="28"
        height="28"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.88974 16.8662C9.39622 16.4286 8.83843 15.9733 8.24851 15.489H8.24086C6.16349 13.7904 3.80914 11.8683 2.76931 9.56523C2.42769 8.83201 2.24664 8.03427 2.23829 7.22541C2.23601 6.11556 2.68114 5.05163 3.47309 4.27407C4.26505 3.49652 5.33697 3.07098 6.44659 3.09363C7.34994 3.09506 8.23384 3.35614 8.99299 3.84577C9.32657 4.06228 9.62839 4.32418 9.88974 4.62392C10.1526 4.32536 10.4545 4.06361 10.7873 3.84577C11.5461 3.35604 12.4298 3.09495 13.3329 3.09363C14.4425 3.07098 15.5144 3.49652 16.3064 4.27407C17.0983 5.05163 17.5435 6.11556 17.5412 7.22541C17.5334 8.03556 17.3523 8.83466 17.0102 9.56905C15.9703 11.8721 13.6168 13.7934 11.5394 15.489L11.5317 15.4951C10.9411 15.9764 10.384 16.4316 9.89051 16.8724L9.88974 16.8662ZM6.44659 4.62392C5.73387 4.615 5.04643 4.88778 4.53373 5.38295C4.03974 5.86817 3.76366 6.53299 3.76852 7.22541C3.77725 7.81496 3.91077 8.39597 4.16034 8.93016C4.65119 9.92385 5.3135 10.8232 6.11682 11.5867C6.87507 12.3519 7.74734 13.0925 8.50177 13.7154C8.71066 13.8875 8.92337 14.0612 9.13608 14.2349L9.26998 14.3443C9.47427 14.5111 9.68545 14.684 9.88974 14.8539L9.89969 14.8447L9.90428 14.8409H9.90887L9.91576 14.8355H9.91958H9.92341L9.93718 14.8241L9.96855 14.7988L9.97391 14.7942L9.98233 14.7881H9.98692L9.9938 14.782L10.5019 14.365L10.635 14.2556C10.85 14.0803 11.0627 13.9067 11.2716 13.7345C12.026 13.1117 12.8991 12.3718 13.6573 11.6028C14.4607 10.8396 15.1231 9.94054 15.6138 8.94699C15.8679 8.40817 16.0033 7.82108 16.0109 7.22541C16.0141 6.53513 15.7381 5.87286 15.2458 5.38907C14.734 4.89166 14.0465 4.61664 13.3329 4.62392C12.4621 4.61652 11.6296 4.98153 11.0451 5.62703L9.88974 6.95838L8.73437 5.62703C8.14985 4.98153 7.31739 4.61652 6.44659 4.62392Z"
          fill="#000000"
        />
      </svg>
    </button>
  
    {/* Details */}
    <h4 className="font-bold text-base mt-4 text-[#EA5326]">{title}</h4>
    <p className=" mb-2 text-[#232323] text-base">${price}</p>
    <div className="flex items-center justify-between">
      <Link href="/wishlist">
        <button className="text-gray-500 hover:text-red-500">❤️</button>
      </Link>
      <button className="w-[45px] h-[45px] bg-[#DFE1E3] text-white flex items-center justify-center px-3 py-2 rounded-full">
        <CartIcon />
      </button>
    </div>
  </div>
  
  );
};

export default ProductCard;
