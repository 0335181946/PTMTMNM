import React, { useEffect } from 'react'
import "./quan.css";
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from '../components/News'


const ProductList = () => {
 
  
  return (
        <div className='container'>
            <Navbar/>
            <Announcement/>
                <div className='total_lh'>
                    <h1>LIEN HE</h1>
                    <div className='info'>
                        <div className='info_1'>
                            <div className='mxh'></div>
                            <div className='box_send'></div>
                        </div>
                        <div className='info_1'>
                            <img src="https://theme.hstatic.net/200000278317/1000929405/14/contact-img.jpg?v=130" alt="" />
                        </div>
                    </div>
                </div>
            <News/>
            <Footer/>    
        </div>
        
        
  )
}

export default ProductList;