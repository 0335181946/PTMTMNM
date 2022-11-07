import React from 'react'
import WishListItem from './WishListItem'

const WishList = () => {
    return (
        <div className='wish_container'>
            <div className='wish_row'>
                <h2 className='wish_title'>WISH LIST</h2>
            </div>
            <div className='wish_row'>
                <div className='wish_groups'>
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                    <WishListItem />
                </div>
            </div>
        </div>
    )
}

export default WishList