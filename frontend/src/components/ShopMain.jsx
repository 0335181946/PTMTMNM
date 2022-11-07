import React from 'react'
import ShopFilter from './ShopFilter'
import ShopProducts from './ShopProducts'

const ShopMain = () => {
    return (
        <div className='shop_container'>
            <div className='shop_row'>
                <h2 className='shop_title'>SHOP</h2>
            </div>
            <div className='shop_row'>
                <div className='shop_col'>
                    <h4 className='shop_filter'>filters</h4>
                    <div className='shop_filterGroup'>
                        <ShopFilter />
                    </div>
                </div>
                <div className='shop_col'>
                <ShopProducts/>
                </div>
            </div>
        </div>
    )
}

export default ShopMain
