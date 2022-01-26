import React from "react";
import ProductCard from "./ProductCard";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ title, id, image, price, description, category }) => (
          <ProductCard
            key={id}
            title={title}
            image={image}
            category={category}
            price={price}
            description={description}
          />
        ))}
      {/* Banner */}
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ title, id, image, price, description, category }) => (
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
      {products
        .slice(5, products.length)
        .map(({ title, id, image, price, description, category }) => (
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
