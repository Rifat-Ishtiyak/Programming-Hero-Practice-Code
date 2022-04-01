import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainShop from "./components/MainShop/MainShop";
import NoPage from "./components/NoPage/NoPage";
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainShop></MainShop>}></Route>
        <Route path="/home" element={<MainShop></MainShop>}></Route>
        <Route path="/order-review" element={<OrderReview></OrderReview>}></Route>
        <Route path="*" element={<NoPage></NoPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
