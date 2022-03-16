import { useEffect, useState } from 'react';
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

      <LoadUser></LoadUser>
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


//!------------ data fetch using API-----------

const LoadUser =()=> {
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  },[])

  console.log('asc');
  console.log(users);
  return(
    <div>
      <center>
        <h2>User Count : {users.length}</h2>
        {
          users.map(user => <ShowUser name={user.name} email={user.email} phone={user.phone}></ShowUser>)
        }
      </center>
    </div>
  )
}


function ShowUser(props){
  return(
    <div className='container user'>
      <p>
        <b> Name : {props.name} </b> <br />
        Email : {props.email} <br />
        Phone : {props.phone} <br />
      </p>
    </div>
  );
}

export default App;
