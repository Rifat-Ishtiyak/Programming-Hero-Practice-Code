import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartItems } = props;

  let totalPrice = 0;
  let totalShipping = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price;
    totalShipping += item.shipping;
  });

  const totalTax = (totalPrice * 0.1).toFixed(2);

  return (
    <div className="cart">
      <h2>Order Summary</h2>

      <div className="cart-details">
        <p>Selected Items : {cartItems.length}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping Charge : ${totalShipping}</p>
        <p>Tax : ${totalTax}</p>
        <h3>
          Grand Total : ${(totalPrice + totalShipping + +totalTax).toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Cart;
