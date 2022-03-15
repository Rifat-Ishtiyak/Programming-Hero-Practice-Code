import { useState } from 'react';
import './App.css';

function App() {
  const products = [
    {name: 'Xiaomi MI Note 4', price: 12500},
    {name: 'Asus TUF FX504', price: 85000},
    {name: 'Casio FX-504', price: 450}
  ];

  return (
    <div>
      <div className='parent-container'>
        {
          products.map((product) => <Product name={product.name} price={product.price}></Product>)
        }
      </div>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

const Product = (props)=> {
  return(
    <div className='container'>
      <p>
        Product Name : {props.name} <br />
        Product Price : {props.price} <br />
      </p>
    </div>
  );
}

//!------- use of sate by using Counter--------

const Counter = ()=> {
  let [value, valueState] =useState(0);

  const increaseCount = ()=> valueState(value+1);
  const decreaseCount = ()=> valueState(value-1);

  return(
    <div className="container counter">
      <h2>Count : {value}</h2>
      <button onClick={increaseCount}>increase</button>| |
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

//!------- use of sate by using Counter--------

export default App;
