import React, { useState } from 'react';

const ProductDetails = () => {

    const [selectImg, setSelectedImg] = useState('');


    return (
        <div className='pd_container'>
            <div className='pd_row'>
                <div className='pd_col'>
                    <div className='pd_imageDiv'>
                        <div className='pd_top'>
                            <img src={selectImg || 'https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-1_34dbbc65ae334d3a841514dd26f86a41_master.jpg'} className='pd_imgMain' alt="" />
                        </div>
                        <div className='pd_bottom'>
                            <img src="https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-1_34dbbc65ae334d3a841514dd26f86a41_master.jpg" className='pd_imgBot' onClick={() => setSelectedImg('https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-1_34dbbc65ae334d3a841514dd26f86a41_master.jpg')} alt="" />
                            <img src="https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-2_0198a731f25f4375b3d387d7ed3e6b4f_master.jpg" className='pd_imgBot' onClick={() => setSelectedImg('https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-2_0198a731f25f4375b3d387d7ed3e6b4f_master.jpg')} alt="" />
                            <img src="https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-3_452aa51f74044c7e82ac0b80bdbcf373_master.jpg" className='pd_imgBot' onClick={() => setSelectedImg('https://product.hstatic.net/200000278317/product/giay-da-banh-nike-street-gato-dc8466-437-xanh-hoang-gia-3_452aa51f74044c7e82ac0b80bdbcf373_master.jpg')} alt="" />
                        </div>
                    </div>
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
                            <p className='pd_quantity'>SL: <span className='pd_quantityNumber'>1</span></p>
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
                            <p className='pd_price'>Price: 400</p>
                        </div>

                        <div className='pd_group'>
                            <div className='pd_buttons'>
                                <button className='pd_wish'> YEU THICH</button>
                                <button className='pd_cart'>THEM VAO GIO HANG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails