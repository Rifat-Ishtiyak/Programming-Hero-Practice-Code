import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PageError from "./components/PageError/PageError";
import Users from "./components/Users/Users";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageError></PageError>}></Route>
      </Routes>
    </div>
  );
}

export default App;
