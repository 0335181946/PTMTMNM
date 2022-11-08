import Home from "./pages/Home.jsx"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Blog from "./pages/Blog.jsx";
import BlogItem from "./components/BlogItem.jsx";
import Product from "./pages/Product.jsx";

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
            <Route path="/account" element={<Account/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog:id" element={<BlogItem/>}/>
            <Route path="/product:id" element={<Product/>}/>
        </Routes>
    </Router>
   </>
  );
}

export default App;
