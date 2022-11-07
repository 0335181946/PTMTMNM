import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Cart = () => {
  return (
    <div className='wrapper'>
        <div className='header'>
            <Header/>
        </div>
        <div>
            cart
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default Cart
