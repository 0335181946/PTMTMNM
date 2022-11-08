import React from 'react';

const ChangePassword = () => {
  return (
    <div className='sign_container changeP_container'>
      <div className='sign_row'>
        <div className='sign_form'>

          <form>
            <h2 className='sign_title'>THAY DOI MAT KHAU</h2>

            <div className='sign_form1'>
              <label htmlFor="o_password" className='sign_label'>Old Password</label>
              <input type="password" id="o_password" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="password" className='sign_label'>new Password</label>
              <input type="password" id="password" className='sign_input' />
            </div>
            <div className='sign_form1'>
              <label htmlFor="r_password" className='sign_label'>confirm Password</label>
              <input type="password" id="r_password" className='sign_input' />
            </div>
            <div className='sign_btn'>
              <button className='sign_btn_login'>UPDATE PASSWORD</button>
            </div>

         

          </form>

        </div>
      </div>
    </div>
  )
}

export default ChangePassword