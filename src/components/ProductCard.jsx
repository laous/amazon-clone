import React from "react";
import Currency from "react-currency-formatter";
import Image from "next/Image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/slices/basketSlice";

const ProductCard = ({ title, id, image, price, description, category }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const quantity = 1;
    const product = {
      title,
      id,
      image,
      price,
      description,
      category,
      quantity,
    };

    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 z-30 p-10 bg-white">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        loader={myLoader}
        src={image}
        height="200"
        width="200"
        objectFit="contain"
      />
      <h4 className="my-3 ">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      <button className="button mt-auto" onClick={() => addItemToBasket()}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
