import React from 'react'
import { Link } from 'react-router-dom'

const HomeBlogItem = () => {
    return (
        <div className='hb_blog'>
            <Link to="/blog">
                <h3 className='hb_blogTitle'>title one</h3>
                <p className='hb_desc'>fklsghhdf glfg jmhnfjlh</p>
                <div className='hb_blogFooter'>
                    <span>admin</span>
                    <span>23.08.2022</span>
                </div>
            </Link>

        </div>
    )
}

export default HomeBlogItem
