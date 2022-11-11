import React from 'react'
import Category from './filterPart/Category'
import Subcategory from './filterPart/Subcategory'
import Price from './filterPart/Price'

const ShopFilter = ({filterResult, category, subCategory, changeChecked, selectedPrice, changePrice}) => {
    return (
        <>
            <div className='filter_group'>
                <span className='filter_groupTitle'>category</span>
                <Category filterResult={filterResult} category={category}/>
            </div>
            <div className='filter_group'>
                <span className='filter_groupTitle'>subCategory</span>
                <Subcategory subCategory={subCategory} changeChecked={changeChecked}/>
            </div>
            <div className='filter_group'>
                <span className='filter_groupTitle'>Price</span>
                <Price value={selectedPrice} changePrice={changePrice}/>
            </div>

        </>
    )
}

export default ShopFilter
