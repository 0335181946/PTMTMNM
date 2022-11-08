import React from 'react'

const ProductDetails = () => {
    return (
        <div className='pd_container'>
            <div className='pd_row'>
                <div className='pd_col'>
                    a
                </div>
                <div className='pd_col'>
                    <div className='pd_groups'>

                        <div className='pd_group'>
                            <h3 className='pd_title'>Product one</h3>
                        </div>

                        <div className='pd_group'>
                            <span className='pd_category'>NIKE</span>
                            <span className='pd_subcategory'>SAN CO NHAN TAO</span>
                        </div>

                        <div className='pd_group'>
                            <p className='pd_desc'>Đầu tháng 02/2020 vừa qua Nike đã cho ra mắt đã cho ra mắt giới mộ điệu Nike React Gato kế thừa người tiền nhiệm Nike Lunar Gato II trong phân khúc những dòng giày dành riêng cho thị trường futsal của Nike. Theo giới chuyên giày Nike React Gato là sự kế thừa cực kỳ xứng đáng nếu không muốn nói là vượt mặt cả người đàn anh Lunar Gato II trước đây.</p>
                        </div>

                        <div className='pd_group'>
                            <div className='pd_otherAction'>
                                <div className='pd_size'>
                                    <h4 className='pd_sizeTitle'>Size:</h4>
                                    <div className='pd_sizeDiv'>

                                        <input type="radio" id="40" name="size" value="40" />
                                        <label htmlFor="40">40</label>

                                        <input type="radio" id="41" name="size" value="41" />
                                        <label htmlFor="41">41</label>

                                        <input type="radio" id="42" name="size" value="42" />
                                        <label htmlFor="42">42</label>

                                        <input type="radio" id="43" name="size" value="43" />
                                        <label htmlFor="43">43</label>
                                    </div>
                                </div>
                                {/* <div className='pd_color'>
                                <h4 className='pd_sizeTitle'>Color:</h4>
                                    <div className='pd_sizeDiv'>
                                        <label htmlFor="40">40</label>
                                        <input type="radio" id="40" name="size" value="40" />

                                        <label htmlFor="41">41</label>
                                        <input type="radio" id="41" name="size" value="41" />

                                        <label htmlFor="42">42</label>
                                        <input type="radio" id="42" name="size" value="42" />

                                        <label htmlFor="43">43</label>
                                        <input type="radio" id="43" name="size" value="43" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        
                        <div className='pd_group'>
                            <div className='pd_buttons'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails