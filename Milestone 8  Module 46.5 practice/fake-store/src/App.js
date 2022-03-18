import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  AOS.init();
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Products></Products>
    </div>
  );
}

export default App;
