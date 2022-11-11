import React, { useContext, useState } from 'react'
import Checkout from '../pages/Checkout';
import { Store } from '../Store';
import CartItem from './CartItem';
import { toast } from 'react-toastify';

const CartItems = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    const [open, setOpen] = useState(false);

    const removeItemHandler = (item) => {
        ctxDispatch({
            type: 'REMOVE_FROM_CART',
            payload: item,
        });
        toast.success('xoa khoi gio hang thanh cong');
    }

    const updateCartHandler = (item, quantity) => {
        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity },
        });
    }

    const subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    const cod = (0.01 * subTotal);
    const total = subTotal+ cod;

    return (
        <div className='cart_container'>
            <div className='wish_row'>
                <h2 className='wish_title'>GIO HANG CUA BAN</h2>
            </div>
            <div className='cart_row'>
                <div className='cart_col'>
                    {
                        cartItems.length === 0 ? (
                            <h3 className='cart_no_product'>no product at cart!</h3>
                        ) : (
                            <div className='wish_groups'>
                                {
                                    cartItems.map((item) => (
                                        <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                                    ))
                                }
                            </div>
                        )
                    }

                </div>
                <div className='cart_col'>
                    <div className='cart_bill'>
                        <h2 className='bill_title'>My bill</h2>
                            {
                                cartItems.length === 0 ? (
                                    <h3 className='cart_no_product'>EMPTY!</h3>
                                ) : (
                                    <div className=''>
                                        {
                                            cartItems.map((item) => (
                                                <div className='bill_group' key={item._id}>
                                                    <span>{item.title}</span>
                                                    <span>${item.price}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        <div className='bill_total'>
                            <div className='bill_group'>
                                <span>Subtotal</span>
                                <span>${subTotal}</span>
                            </div>
                            <div className='bill_group'>
                                <span>COD</span>
                                <span>${cod}</span>
                            </div>
                            <div className='bill_group'>
                                <span>TOTAL</span>
                                <span>${total}</span>
                            </div>
                        </div>
                        <div className='bill_btn'>
                            {cartItems.length > 0 && (<button onClick={() => setOpen(true)}>CHECK OUT</button>)}
                           
                        </div>

                    </div>
                </div>
            </div>
            {open && <Checkout setOpen={setOpen} cartItems={cartItems} subTotal={subTotal} cod={cod} total={total}/>}
        </div>
    )
}

export default CartItems