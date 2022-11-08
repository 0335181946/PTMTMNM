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
                    <div className='cart_bill'>
                        <h2 className='bill_title'>My bill</h2>
                        <div className='bill_groups'>
                            <div className='bill_group'>
                                <span>Product 1</span>
                                <span>$400</span>
                            </div>
                            <div className='bill_group'>
                                <span>Product 1</span>
                                <span>$400</span>
                            </div>

                        </div>
                        <div className='bill_total'>
                            <div className='bill_group'>
                                <span>Subtotal</span>
                                <span>$400</span>
                            </div>
                            <div className='bill_group'>
                                <span>TAX 20%</span>
                                <span>$4</span>
                            </div>
                            <div className='bill_group'>
                                <span>TOTAL</span>
                                <span>$404</span>
                            </div>
                        </div>
                        <div className='bill_btn'>
                            <button>CHECK OUT</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItems