import React, { useEffect, useState } from "react";
import { storeData } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    storeData(product.id);
  };

  // console.log("after add : ", cartItems);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
            isProduct
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cartItems={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Shop;
