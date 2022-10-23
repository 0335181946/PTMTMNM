import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from "../reponsive";
import axios from 'axios';

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
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false); 
        try{
            const res = await axios.post("http://localhost:5000/api/auth/register",{
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login");
        }catch(err){
            setError(true); 
        }
    };

  return (
    <Container>
        <Wrapper>
            <Title>ĐĂNG KÝ TÀI KHOẢN</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <Input placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                <Input type={"password"} placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <Input type={"password"} placeholder="confirm password" />
                <Agreement>Tôi sẽ chịu trách nhiệm về các thông tin đã đăng ký và quy định của cửa hàng</Agreement>
                <Button type='submit'>Xac nhan dang ky</Button>
                   {error && <span style={{color:"red", marginTop:"10px"}}>Email hoac Username da ton tai !</span>}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
