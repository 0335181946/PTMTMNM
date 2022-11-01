import './App.css';
import Header from './component/Home/Header';
import Home from "./component/Home/Home"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
