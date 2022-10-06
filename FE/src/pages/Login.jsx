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
    width: 25%;
    padding: 20px;
    background-color: white;
    opacity:0.9;
    ${mobile({width: "70%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 15px 0px;
    padding: 10px;
`

const Button = styled.button`
    background-color: teal;
    width: 40%;
    border: none;
    padding: 15px 20px;
    color: white;
    cursor: pointer;
    margin-bottom: 5px;
`

const Link = styled.div`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>DANG NHAP TAI KHOAN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>DANG NHAP</Button>
                <Link>BAN QUEN MAT KHAU ?</Link>
                <Link>TAO TAI KHOAN MOI</Link>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Login
