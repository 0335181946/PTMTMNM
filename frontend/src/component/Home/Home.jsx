import React from 'react';
import Header from './Header';
import "./Home.css";
// import MetaData from "../../more/Metadata";

const Home = () => { 
  return (
    <>
    {/* <MetaData title="Home" /> */}
    {/* <Header/> */}
    <div className='banner'>
        <div className='slide'>
                <img className='slide_img' src="https://s1.vnecdn.net/vnexpress/restruct/c/v137/ldpr/1005482/images/graphics/worldcup2022-thumb.png" alt="" />
                <img className='slide_img' src="https://vcdn1-thethao.vnecdn.net/2022/04/02/fpru7i8xwaqg1zv-jpeg-164887627-6979-7297-1648876277.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=EkJDfsGuYJ4l-IvCFRw8uA" alt="" />
        </div>
        <div className='home_content'>
                    <div>
                        <h2>buy 2 get</h2>
                        <span>1 free</span>
                    </div>
                    <div>
                        <h2>fashionable</h2>
                    </div>
                    <div>
                        <h2>connection</h2>
                    </div>
                    <div>
                        <h2>get free shipping on all order over 99$</h2>
                    </div>
                    <div>
                        <a href="#container">
                            <button>SHOP NOW</button>
                        </a>
                    </div>
        </div>
    </div>

    <h2 className='homeHeading'>Freatired Products</h2>
    <div className='container'>
asdasda
    </div>

    </>
    
  );
};

export default Home