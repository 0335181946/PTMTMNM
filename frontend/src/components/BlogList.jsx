import React from 'react';
import BlogListItem from './BlogListItem';

const BlogList = () => {
    return (
        <div id='blog' className='hb_container'>
            <div className='hb_row'>
                <h2 className='sign_title'>BLOG LIST</h2>
            </div>
            <div className="hb_row">
                <div className="hb_col">
                    <div className='hb_div'>
                        <div className='hb_blogs'>
                            <BlogListItem />
                            <BlogListItem />
                            <BlogListItem />
                            <BlogListItem />
                            <BlogListItem />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BlogList