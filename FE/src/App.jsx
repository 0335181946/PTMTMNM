import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Productt from "./pages/Productt";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";


//Navigate la chuyen huong trang web

const App = () => {

  const user = true;
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/products/:categories" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Productt/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={user ? <Navigate to= "/" /> : <Login/>}/>    
          <Route path="/register" element={user ? <Navigate to= "/" /> : <Register/>}/>  
        </Routes>
      </Router>
  );
};

export default App;