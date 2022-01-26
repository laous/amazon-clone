import React from "react";
import Currency from "react-currency-formatter";
import Image from "next/Image";

const ProductCard = ({ title, id, image, price, description, category }) => {
  return (
    <div className="relative flex flex-col m-5 z-30 p-10 bg-white">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height="200" width="200" objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 10} currency="MAD" />
      </div>
      <button className="button mt-auto">Add to cart</button>
    </div>
  );
};

export default ProductCard;
