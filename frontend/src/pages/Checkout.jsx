import React from 'react'

const Checkout = ({setOpen}) => {
  return (
    <div className='check_container'>
      <form >
        <h5 className='check_title'>YOU WILL PAY AFTER DELIVERRY</h5>
        <div className='close_form' onClick={() => setOpen(false)}>X</div>
        <div className='form_group'>
          <label htmlFor="name">Name</label>
          <input required type="text" id='name' />
        </div>

        <div className='form_group'>
          <label htmlFor="email">Email</label>
          <input required type="text" id='email' />
        </div>

        <div className='form_group'>
          <label htmlFor="address">Address</label>
          <input required type="text" id='address' />
        </div>

        <div className='form_group'>
          <label htmlFor="phone">Phone</label>
          <input required type="text" id='phone' />
        </div>

        <div className='check_btn'>
          <button type='submit'>ORDER <i class="fas fa-truck-moving"></i></button>
        </div>

      </form>
    </div>
  )
}

export default Checkout