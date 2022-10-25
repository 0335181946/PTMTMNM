import styled from 'styled-components'
import {mobile} from "../reponsive";
import { useState} from "react";
import {login} from "../redux/apiCalls";
import  { Context} from "../context/Context";
import {useDispatch, useSelector} from "react-redux";
import { useContext, useRef } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    width: 15%;
    padding: 20px;
    background-color: white;
    opacity:0.9;
    ${mobile({width: "70%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 5px;
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
    width: fit-content;
    border: none;
    padding: 13px 55px;
    color: white;
    cursor: pointer;

    margin-bottom: 15px;
    &:disabled{
        color:green;
        cursor: not-allowed;
    }
`
const Error = styled.span`
    color: red; 
`


const Login = () => {
    const [error, setError] = useState(false);
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        setError(false);
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({type:"LOGIN_SUCCESS", payload: res.data });
            window.location.replace("/");
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
            setError(true);
        }
    }; 

  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form onSubmit={handleSubmit}>
                <Input 
                    placeholder="username"
                    ref={userRef}
                />
                <Input 
                    placeholder="password" 
                    type="password"
                    ref={passwordRef}
                />
                {error && <span style={{color:"red", marginTop:"10px"}}>Tai khoan hoac mat khau khong dung .....!</span>}
                <div className='tool'>
                    <Button type="submit" disabled={isFetching} disable={error}> DANG NHAP</Button>
                    <div className='login_4'>
                        <Link to="/register" >REGISTER</Link>
                    </div>
                    <div className='login_5'>
                    <Link >BAN QUEN MAT KHAU ?</Link>
                    </div>
                </div>
                
                    
                
                
                
               
                
            </Form>

        </Wrapper>

         
    </Container>
  )
}

export default Login
