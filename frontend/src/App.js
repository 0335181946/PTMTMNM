import Home from "./pages/Home.jsx"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
   <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
   </>
  );
}

export default App;
