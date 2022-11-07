import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_row'>
        <div className='footer_col'>
          <Link to="/">Youtube</Link>
        </div>
        <div className='footer_col'>
          <Link to="/">Youtube</Link>
        </div>
        <div className='footer_col'>
          <Link to="/">Youtube</Link>
        </div>
        <div className='footer_col'>
          <Link to="/">Youtube</Link>
        </div>
      </div>

      <div className="footer_row">
          <div className='footer_copyRight'>
                <span>&copy; 2022 All Rights Reserved. Powerby TQT_Futsal.</span>
          </div>
      </div>

    </div>
  )
}

export default Footer
