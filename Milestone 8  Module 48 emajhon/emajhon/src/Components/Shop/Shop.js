import React, { useEffect, useState } from "react";
import { getData, storeData } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //!-----data load from json------
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //!-----data load from local-storage------
  useEffect(() => {
    const localCart = getData();
    const savedCart = [];
    for (const id in localCart) {
      if (localCart) {
        const addedProduct = products.find((product) => product.id === id);
        if (addedProduct) {
          const quantity = localCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
      }
    }
    console.log(savedCart);
    setCartItems(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];

    const exists = cartItems.find(
      (product) => product.id === selectedProduct.id
    );

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cartItems, selectedProduct];
    } else {
      const rest = cartItems.filter(
        (product) => product.id !== selectedProduct.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCartItems(newCart);
    storeData(selectedProduct.id);
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
