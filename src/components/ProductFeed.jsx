import React from "react";
import ProductCard from "./ProductCard";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map(({ title, id, image, price, description, category }) => (
        <ProductCard
          key={id}
          title={title}
          image={image}
          category={category}
          price={price}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
