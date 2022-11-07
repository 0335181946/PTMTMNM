import React from 'react';
import {Link} from 'react-router-dom'
import HomeBlogItem from './HomeBlogItem';

const HomeBlog = () => {
    return (
        <div id='blog' className='hb_container'>
            <div className="hb_row">
                <div className="hb_col">
                    <div className='hb_div'>
                        <div className='hb_blogs'>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                            <HomeBlogItem/>
                        </div>   
                    </div>
                </div>

                <div className="hb_col">
                    <Link to="/blog" className="hb_more">VIEW MORE<i class="fas fa-arrow-alt-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
