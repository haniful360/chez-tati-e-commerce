import Image from "next/image";
import React from "react";
import Magnifier from "react-magnifier";

const PorductImage = ({product}) => {
  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <div className="border rounded-md overflow-hidden p-2">
      <Magnifier src={product.product.image} width={500} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Image
            width={100}
            height={100}
            src={product.product.image}
            alt="Thumbnail 1"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
          <Image
            width={100}
            height={100}
            src={product.product.image}
            alt="Thumbnail 2"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
          <Image
            width={100}
            height={100}
            src={product.product.image}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PorductImage;
