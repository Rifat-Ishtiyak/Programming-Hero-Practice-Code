import React from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import ProductCard from "../ProductCard/ProductCard";

const MainShop = () => {
  const [tShirts] = useTShirts();
  return (
    <div className="px-4 md:px-6 lg:px-16 lg:py-8">
      <div className="grid grid-cols-1">
        <div className="grid gap-y-14 gap-x-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                tShirts.map((tShirt) => (
                <ProductCard key={tShirt._id} tShirt={tShirt}></ProductCard>
                ))
            }
        </div>
        <div>
            <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
