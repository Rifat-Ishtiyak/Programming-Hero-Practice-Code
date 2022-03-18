import React from 'react';
import { Form } from 'react-bootstrap';

const Home = () => {
    return (
      <div className="container text-center my-5">
        <h1>Our All Products</h1>
        <div className='d-flex w-50 mx-auto my-4'>
          <Form.Control placeholder="enter text to search"/>
          <button className="btn btn-dark ms-2">search</button>
        </div>
      </div>
    );
};

export default Home;