import React from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)),url("https://cdn.corrieredellosport.it/images/2021/03/18/183355735-137670c2-38bb-427d-88fb-ea62e84448e6.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    opacity:0.9;
    ${mobile({width: "70%"})}
`

const Title = styled.h1`
    /* color: white; */
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    background-color: teal;
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>TAO TAI KHOAN MOI</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>Bằng cách tạo tài khoản, tôi đồng ý với việc xử lý dữ liệu cá nhân của mình theo chính sách bảo mật va dieu khoan cua cua hang</Agreement>
                <Button>Xac nhan dang ky</Button>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Register
