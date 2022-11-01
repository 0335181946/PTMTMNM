import React from 'react';
import './Slide.css'
import dataSlide from './dataSlide'

const Slide = () => {
  return (
    <div className='container-slider'>
        {dataSlide.map((obj, index) =>{
            return (
                <div>
                    <img src={process.end.PUBLIC_URL + `/Imgs/img${index+1}.jpg`}/>
                </div>
            )
        })}
    </div>
  )
}

export default Slide