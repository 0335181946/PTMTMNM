import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {
  return (
    <div className='sign_container'>
      <div className='sign_row'>
        <div className='sign_form'>

          <form>
            <h2 className='sign_title'>DANG NHAP</h2>
            <div className='sign_form1'>
              <label htmlFor="email" className='sign_label'>Email</label>
              <input type="email" id="email" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>Password</label>
              <input type="password" id="password" className='sign_input' />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>Login</button>
            </div>

            <div className='signOther'>
              <Link to="/register">DANG KI TAI KHOAN</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Signin
