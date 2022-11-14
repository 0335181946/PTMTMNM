import React from 'react'
import { Link } from 'react-router-dom'

const NewProduct = ({product}) => {
    return (
        <div className='product_group'>
            <Link to={`/products/${product._id}`}>
                <div className='product_body'>
                    <img className='product_img' src={product.image} alt={product.title} />
                </div>
                <div className='product_footer'>
                    <div className='product_divTop'>
                        <span className='product_category'>brand: {product.category}</span>
                        <span className='product_subcategory'>sân: {product.subcategory}</span>
                        <h3 className='product_title'>name: {product.title}</h3>
                        <div>
                            <span className='product_price'>Giá: {(product.price)} vnd</span>
                        </div>

                    </div>

                </div>
            </Link>

        </div>
    )
}

export default NewProduct