import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return(
      <div className="container">
        <div className="row g-5">
            {
                product.map((product)=><Product product={product} key={product.id}></Product>)
            }
        </div>
      </div>
  );
};

export default Products;
