import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Productt from "./pages/Productt";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Success from "./pages/Success";
import { useContext } from "react";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//Navigate su dung chuyen huong trang web

const App = () => {
  const {user} = useContext(Context);
  // const user =  useSelector((state) => state.user.currentUser);
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/products/:categories" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Productt/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/login" element={ <Login/>}/>    
          <Route path="/register" element={ <Register/>}/>  
        </Routes>
      </Router>
  );
};

export default App;