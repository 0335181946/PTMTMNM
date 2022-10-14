import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import {mobile} from "../reponsive";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../context/Context";
import "./app1.css";


const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 25px;
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;  
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2 , justifyContent: "center"})}
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};  
`


const Navbar = () => {
    const {user, dispatch} = useContext(Context);
    const quantity = useSelector(state=>state.cart.quantity);
    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    }
    return (
        <Container>
            <Wrapper>
                    <Left >
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder='Search'/>
                                <i className="fas fa-search" style={{color:"gray", fontSize: 16}}></i>
                        </SearchContainer>
                        <div className='nav1'>
                            SAN PHAM
                        </div>
                        <div className='nav1'>
                            PHU KIEN
                        </div>
                        <div className='nav1'>
                            GIOI THIEU
                        </div>
                        <div className='nav1'>
                            LIEN HE
                        </div>
                    </Left>

                    <Center>
                        <Logo>TFTFulsal</Logo>
                    </Center>
                    <Right>
                        <MenuItem onClick={handleLogout}>{user && "LOGOUT"}</MenuItem> 
                        {user ? (
                           <Link to="/settings" className='avatar'>
                                <span>ID: {user.username} </span>
                                <img src={user.img} alt="" />
                           </Link >
                        ) : (
                            <>
                                <Link to="/register">
                                    <MenuItem>REGISTER</MenuItem>
                                </Link>
                           
                                <Link to="/login">
                                    <MenuItem>SIGN IN</MenuItem>
                                </Link>
                            </>
                        )}
                        
                        
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <i className="fa-solid fa-cart-shopping" style={{fontSize:"20px"}}></i>
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar