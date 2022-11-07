import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
    return (
        <div className='cart_container'>
            <div className='wish_row'>
                <h2 className='wish_title'>GIO HANG CUA BAN</h2>
            </div>
            <div className='cart_row'>
                <div className='cart_col'>
                    <div className='wish_groups'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <div className='cart_col'>
                    right
                </div>

            </div>
        </div>
    )
}

export default CartItems