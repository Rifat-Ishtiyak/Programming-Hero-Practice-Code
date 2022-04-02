import React from "react";

const Cart = ({ cartItems, removeCartItem }) => {
  return (
    <div className="px-12 sticky top-0">
      <h1 className="text-center text-3xl font-bold">Cart Details</h1>
      <h2 className="text-center text-2xl my-4">Total Item : {cartItems.length}</h2>
      {cartItems.map((item) => {
        return (
          <div className="flex justify-between items-center ">
            <div className="w-[50px] h-[50px] p-1 bg-blue-700 rounded-full mb-5">
              <img
                className="w-full h-full rounded-full"
                src={item.picture}
                alt=""
              />
            </div>
            <p className=" my-5">{item.name}</p>
            <button onClick={()=>removeCartItem(item)} className="px-7 py-2 bg-blue-700 text-white mb-5">X</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
