import React from 'react'
import Category from './filterPart/Category'
import Search from './filterPart/Search'
import Subcategory from './filterPart/Subcategory'
import Price from './filterPart/Price'

const ShopFilter = () => {
    return (
        <>
            <div className='filter_group'>
                <span className='filter_groupTitle'>Search by name</span>
                <Search />
            </div>
            <div className='filter_group'>
                <span className='filter_groupTitle'>category</span>
                <Category />
            </div>
            <div className='filter_group'>
                <span className='filter_groupTitle'>subCategory</span>
                <Subcategory />
            </div>
            <div className='filter_group'>
                <span className='filter_groupTitle'>Price</span>
                <Price />
            </div>

        </>
    )
}

export default ShopFilter
