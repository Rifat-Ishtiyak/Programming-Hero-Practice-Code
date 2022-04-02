import React, { useState } from "react";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import ProductCard from "../ProductCard/ProductCard";

const MainShop = () => {
  const [tShirts] = useTShirts();
  const [cartItems, setCartItem] = useState([]);

  const addToCart = (item) => {
    const newCartItem = [...cartItems, item];
    setCartItem(newCartItem);
  };

  const removeCartItem = (item) => {
    const restItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
    setCartItem(restItems);
  };

  return (
    <div className="px-4 md:px-6 lg:px-16 lg:py-8">
      <div className="grid grid-cols-2">
        <div className="grid gap-y-14 gap-x-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tShirts.map((tShirt) => (
            <ProductCard
              key={tShirt._id}
              tShirt={tShirt}
              addToCart={addToCart}
            ></ProductCard>
          ))}
        </div>
        <div>
          <Cart
            key={cartItems._id}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default MainShop;
