import React from 'react'
import { Link } from 'react-router-dom'

const NewProduct = ({product}) => {
    return (
        <div className='product_group'>
            <Link to="/product/:7346573458348">
                <div className='product_body'>
                    <img className='product_img' src={product.image} alt={product.title} />
                </div>
                <div className='product_footer'>
                    <div className='product_divTop'>
                        <span className='product_category'>{product.category}</span>
                        <h3 className='product_title'>{product.title}</h3>
                        <div>
                            <span className='product_price'>{(product.price).toFixed(2)} vnd</span>
                        </div>

                    </div>

                </div>
            </Link>

        </div>
    )
}

export default NewProduct