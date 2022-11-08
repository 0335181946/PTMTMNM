import React from 'react';
import {Link} from 'react-router-dom';

const MyOrders = () => {
    return (
        <div className='mo_container'>
            <div className='mo_row'>
                <h2 className='sign_title'>MY ORDERS</h2>
            </div>
            <div className='mo_row'>
                <div className='mo_groups'>
                    <div className='mo_group'>
                        <h4>Order ID: 12312123123</h4>
                        <Link to="/order" className='mo_link'> <i class="fas fa-eye"></i> </Link>
                    </div>

                    <div className='mo_group'>
                        <h4>Order ID: 12312123123</h4>
                        <Link to="/order" className='mo_link'> <i class="fas fa-eye"></i> </Link>
                    </div>

                    <div className='mo_group'>
                        <h4>Order ID: 12312123123</h4>
                        <Link to="/order" className='mo_link'> <i class="fas fa-eye"></i> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders