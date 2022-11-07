import Home from "./pages/Home.jsx"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
   <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/wish" element={<Wish/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </Router>
   </>
  );
}

export default App;
