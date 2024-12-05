import Image from "next/image";
import React from "react";

const PorductDetails = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <div className="border rounded-md overflow-hidden">
        <Image
          width={100}
          height={100}
          src="/product-image.jpg"
          alt="Smart Freezer"
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Image
            width={100}
            height={100}
            src="/thumbnail1.jpg"
            alt="Thumbnail 1"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
          <Image
            width={100}
            height={100}
            src="/thumbnail2.jpg"
            alt="Thumbnail 2"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
          <Image
            width={100}
            height={100}
            src="/thumbnail3.jpg"
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover border rounded-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PorductDetails;
