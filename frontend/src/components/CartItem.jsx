import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({item, removeItemHandler, updateCartHandler}) => {
    return (
        <div className='product_group cart_pro'>
            <Link to={`/products/${item._id}`}>
                <div className='product_body'>
                    <img className='product_img' src={item.image} alt={item.title} />
                </div>
                <div className='product_footer'>
                    <div className='product_divTop'>
                        <span className='product_category'>brand: {item.category}</span>
                        <h3 className='product_title'>name: {item.title}</h3>
                        <span className='product_size'>Size: {item.size}</span>
                        <span className='product_price'>Giá: {(item.price)} vnd</span>
                    </div>
                </div>
            </Link>
            <div className='cart_otherDiv'>
                <div className='cart_quantityDiv'>
                    <button className='cart_minus' onClick={() => updateCartHandler(item, item.quantity -1)} disabled={item.quantity === 1}>-</button>
                    <span className='cart_quantity'>{item.quantity}</span>
                    <button className='cart_plus' onClick={() => updateCartHandler(item, item.quantity +1)}>+</button>
                </div>
                <button className='cart_button' onClick={() => removeItemHandler(item)}><span className='wish_span'>DELETE</span></button>
            </div>

        </div>
    )
}

export default CartItem