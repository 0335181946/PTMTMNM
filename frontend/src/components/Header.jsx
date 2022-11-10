import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const logoutHandler = () =>{
    localStorage.removeItem('userInfo');
    toast.success('you have success log out!');
    navigate('/login');
  }

  return (
    <div className='header_container'>
      <div className="h_row">
        <div className="h_col">
          <div className='h_logo'>
            <Link to="/" className='logo'>TQT_FUTSAL.</Link>
          </div>
          <div className='h_menu'>
            <ul className='menu_item'>
              <li><Link to="/" className='menu_link'>HOME</Link></li>
              <li><Link to="/shop" className='menu_link'>SHOP</Link></li>
              <li><Link to="/blogs" className='menu_link'>BLOG</Link></li>
              {userInfo && (
                <li><Link to="/account" className='menu_link'>ACCOUNT</Link></li>
              )}

            </ul>
          </div>
        </div>

        <div className="h_col">
          <div className="h_anotherMenu">
            <ul className='menu_item_2'>
              {userInfo ? (
                <>
                  <li>
                    <span className='menu_link_2'>
                      <div className='menu_div'>
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <span onClick={logoutHandler}>LOGOUT</span>
                    </span>
                  </li>
                  <li><Link to="/wish" className='menu_link_2'>
                    <div className='menu_div'>
                      <i class="fas fa-heart"></i>
                      <span className='menu-badge'>0</span>
                    </div>
                    <span>Wishlist</span>
                  </Link>
                  </li>

                  <li><Link to="/cart" className='menu_link_2'>
                    <div className='menu_div'>
                      <i class="fas fa-shopping-bag"></i>
                      <span className='menu-badge'>0</span>
                    </div>
                    <span>Cart</span>
                  </Link>
                  </li>
                </>

              ) : (
                <li><Link to="/login" className='menu_link_2'>
                  <div className='menu_div'>
                    <i class="fas fa-user-circle"></i>
                  </div>
                  <span>LOGIN</span>
                </Link>
                </li>
              )}

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
