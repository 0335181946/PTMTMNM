import React from 'react'
import NewProduct from './NewProduct'

const NewProducts = () => {
    return (
        <div className='productS_container'>
            <div className='productS_row'>
                <h2 className='productS_title'>NEW PRODUCTS</h2>
            </div>
            <div className='productS_row'>
                <div className='productS_groups'>
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                    <NewProduct />
                </div>
            </div>
        </div>
    )
}

export default NewProducts
