import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  function go() {
    navigate("/about")
  }
  return (
    <div className="text-center">
      <h2 className="text-6xl text-green-600">-----This is Home Page-----</h2>
      <button onClick={go}>click me</button>
    </div>
  );
};

export default Home;
