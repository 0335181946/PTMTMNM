import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShopProduct from './ShopProduct'

const ShopProducts = () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resultProduct = await axios.get('/api/products/all');
            setProducts(resultProduct.data);
        }

        fetchData();
    }, []);

  return (
    <div className='shopP_container'>
        <div className='shopP_row'>
            <ShopProduct/>
            <ShopProduct/>
            <ShopProduct/>
            <ShopProduct/>
            <ShopProduct/>
         
        </div>
    </div>
  )
}

export default ShopProducts