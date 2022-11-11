import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderDetail = ({item}) => {
  return (
    <div className='product_group'>
            <Link to={`/products/${item._id}`}>
                <div className='product_body'>
                    <img className='product_img' src={item.image} alt={item.title} />
                </div>
                <div className='product_footer'>
                    <div className='product_divTop'>
                        <span className='product_category'>{item.category}</span>
                        <h3 className='product_title'>{item.title}</h3>
                        <span className='product_size'>Size: {item.size}</span>
                        <span className='product_price'>${item.price}</span>
                    </div>
                </div>
            </Link>
           

        </div>
  )
}

export default MyOrderDetail