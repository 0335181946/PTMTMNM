import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Productt from "./pages/Productt";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Success from "./pages/Success";
import {useSelector} from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";

//Navigate su dung chuyen huong trang web

const App = () => {

  const user =  useSelector((state) => state.user.currentUser);
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/products/:categories" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Productt/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/login" element={ <Login/>}/>    
          <Route path="/register" element={user ? <Navigate to= "/" /> : <Register/>}/>  
        </Routes>
      </Router>
  );
};

export default App;