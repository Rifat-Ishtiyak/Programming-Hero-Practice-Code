import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <div className="product-details">
        <img src={img} alt="" />
        <p className="product-name">{name}</p>
        <p className="product-price">Price : ${price}</p>
        <div className="bottom-details">
          <p className="product-seller">
            <small>Manufacturer : {seller}</small>
          </p>
          <p className="product-rating">
            <small>Rating : {ratings} star</small>
          </p>
        </div>
      </div>
      <button className="add-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
