import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

function App() {
  AOS.init();

  const [count, setCount] = useState(0);

  const setCartCount = () => {
    if (count >= 0 && count < 5) {
      setCount(count + 1);
    } else {
      alert("maximum item limit reached");
    }
  };
  return (
    <div>
      <Header count={count}></Header>
      <Home></Home>
      <Products setCount={setCartCount}></Products>
    </div>
  );
}

export default App;
