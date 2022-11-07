import React from 'react'

const Subcategory = () => {
  return (
    <div className='filter_div'>
      <div className='filter_checkboxssss'>

        <div className='filter_checkbox'>
          <label htmlFor="co_nhantao" className='filter_label'>CO NHAN TAO</label>
          <input type="checkbox" className='filter_check' name='' id='co_nhantao' />
        </div>

        <div className='filter_checkbox'>
          <label htmlFor="san_trongnha" className='filter_label'>SAN TRONG NHA</label>
          <input type="checkbox" className='filter_check' name='' id='san_trongnha' />
        </div>

        <div className='filter_checkbox'>
          <label htmlFor="san11" className='filter_label'>SAN 11</label>
          <input type="checkbox" className='filter_check' name='' id='san11' />
        </div>

      </div>
    </div>
  )
}

export default Subcategory
