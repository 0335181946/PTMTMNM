import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='sign_container'>
      <div className='sign_row'>
        <div className='sign_form'>

          <form>
            <h2 className='sign_title'>DANG KI TAI KHOAN</h2>
            <div className='sign_form1'>
              <label htmlFor="username" className='sign_label'>Username</label>
              <input type="text" id="username" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="email" className='sign_label'>Email</label>
              <input type="email" id="email" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>Password</label>
              <input type="password" id="password" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="r_password" className='sign_label'>Confirm password</label>
              <input type="password" id="r_password" className='sign_input' />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>REGISTER</button>
            </div>

            <div className='signOther'>
              <Link to="/login">DANG NHAP</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp
