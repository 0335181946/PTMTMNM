import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



const Price = () => {


  return (
    <div className='filter_buttons'>
        <Slider range mi={1} max={1000} defaultValue={[1,1000]} marks={{1: `$1`, 1000: `$1000`}} />
    </div>
  )
}

export default Price