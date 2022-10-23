import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Productt from "./pages/Productt";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Result from "./pages/Result";
import List from "./pages/List";

import Phukien from "./pages/phukien";
import Gioithieu from "./pages/gioithieu";
import Lienhe from "./pages/lienhe";

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
          <Route path="/list" element={ <List/>}/>
          <Route path="/result" element={ <Result/>}/>

          <Route path="/phukien" element={ <Phukien/>}/>
          <Route path="/gioithieu" element={ <Gioithieu/>}/>
          <Route path="/lienhe" element={ <Lienhe/>}/>
        </Routes>
      </Router>
  );
};

export default App;