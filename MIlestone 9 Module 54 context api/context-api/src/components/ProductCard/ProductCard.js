import React from "react";

const ProductCard = ({ tShirt }) => {
  const { name, picture, price } = tShirt;
  return (
    <div className="bg-slate-100 shadow-md">
      <div className="rounded-lg">
        <div className="w-full h-[250px] ">
          <img src={picture} className="w-full h-full" alt="" />
        </div>
        <div className="p-4 text-center space-y-2">
          <h1 className="text-2xl font-medium">{name}</h1>
          <p className="text-xl">Price : ${price}</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
