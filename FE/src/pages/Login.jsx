import React from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive";
import { useState} from "react";
import {login} from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";

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
    &:disabled{
        color:green;
        cursor: not-allowed;
    }
`
const Link = styled.div`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
`
const Error = styled.span`
    color: red;  
`

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error} =  useSelector((state) => state.user);   

    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch, {username, password})
    }

  return (
    <Container>
        <Wrapper>
            <Title>DANG NHAP TAI KHOAN</Title>
            <Form>
                <Input 
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input 
                    placeholder="password" 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disable={isFetching}>DANG NHAP</Button>
               {error && <Error> Tai khoan hoac mat khau khong dung .....</Error>}
                <Link>BAN QUEN MAT KHAU ?</Link>
                <Link>TAO TAI KHOAN MOI</Link>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Login
