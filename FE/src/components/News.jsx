import React from 'react';  
import styled from 'styled-components';
import {mobile} from "../reponsive";
import "./app1.css"

const Container = styled.div`
    height: 40vh;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 40px;
    ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 0.75;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
`



const News = () => {
  return (
    <Container>
        <div className='news'>
            <div className='news_1'>
                    <h1>FUNDIIN</h1>
                    <p>Chúng tôi tự hào khi luôn hướng tới việc đem đến trải nghiệm mua sắm tốt nhất cho người tiêu dùng tại Việt Nam.</p>

                    <InputContainer>
                    <Input placeholder="Your email"/>
                    <Button>
                        <i className="far fa-paper-plane"></i>
                    </Button>
                </InputContainer>
            </div>
            <div className='news_2'>
                <p>Phá bỏ giới hạn thanh toán</p>
                <ul>
                    <li>Không lãi suất</li>
                    <li>Không chênh lệch giá</li>
                    <li>Không mất phí hồ sơ</li>
                    <li>Không cần thẻ tín dụng</li>
                    <li>Khách hàng chỉ cần thanh toán trước ⅓ giá trị đơn hàng, ngay lập tức sẽ sở hữu sản phẩm yêu thích.</li>

                    
                </ul>
            </div>
            <div className='news_2'>
                <p>Phá bỏ giới hạn thanh toán</p>
                <ul>
                    <li>Không lãi suất</li>
                </ul>
            </div>
            <img src="https://fundiin.vn/images/about.png" alt="" />
        </div>
    </Container>
  )
}

export default News
