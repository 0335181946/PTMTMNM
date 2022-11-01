import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';




const Header = () => {
  return (
    <div className='header'>
        <div className='header_topbar'>

            <div className='logo'>
              <Link to="/">
                <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt574a320d1e013cac/63239aba2343d638c694003b/S12_ChibiKaisa_Base_Classic_Tier1_tft_patch_notes_12-18.jpg" alt="" />
              </Link>
            </div>
            <div className='searchBoxhome'>
                <div className='inputBox'>
                    <span>Welcome to our shop...You can find anything in here as your favourites..</span>
                </div>
            </div>
            <div className='email'>
                <i class="fas fa-envelope"></i>
                <span> Email: test123@gmail.com</span>
            </div>

        </div>
        <div className='header_navbar'>
            
            <div className='navigation'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Products</li></Link>
                <Link to="/"><li>Become A Selle</li></Link>
                <Link to="/"><li>user</li></Link>
                <Link to="/"><li>contact</li></Link>
            </div>
            <div className='option'>
                <div className='search'>
                    <i class="fas fa-search"></i>
                </div>
                <div className='favorite'>
                    <i class="fas fa-heart"></i>
                </div>
                <div className='cart_item'>
                   <i class="fas fa-cart-plus"></i>
                </div>
                <div className='user-accout'>
                  <i class="far fa-user"></i>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
