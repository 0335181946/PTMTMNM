import React from 'react'
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className='i_container'>
            <div className='i_row'>
                <div className='i_col'>
                    <h2 className='i_title'>WORLD CUP 2022</h2>
                    <p className='i_subtitle'>lịch thi đấu vòng chung kết World Cup 2022 từ ngày 20/11 đến 18/12/2022 đầy đủ và chính xác.</p>
                    <Link to="/shop" className='i_button'>SHOP NOW</Link>
                </div>

                <div className='i_colArrow'>
                    <a href="#blog"><i class="fas fa-arrow-down"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Intro
