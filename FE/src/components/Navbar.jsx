import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import {mobile} from "../reponsive";
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";
import { SearchContext } from '../context/Search';
import "./app1.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";


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
    text-decoration: none;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};
    
`


const Navbar = () => {
    const {user, dispatch } = useContext(Context);
    const quantity = useSelector(state=>state.cart.quantity);
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");

    const handleLogout = () =>{
        dispatch({type: "LOGOUT"})
    };

    const dispatch2 = useContext(SearchContext);
    const handleSearch = () =>{
        dispatch({type:"NEW_SEARCH", payload: {destination}});
        navigate("/result", {state: {destination}});
    };

    return (
        <Container>
            <Wrapper>
                    <div className='left'>
                        <span>EN</span>
                        <SearchContainer>
                            <Input placeholder='Search' onChange={(e) => setDestination(e.target.value)} />
                            <button onClick={handleSearch}>
                                <i className="fas fa-search" style={{color:"gray", fontSize: 16}}></i>
                            </button>  
                        </SearchContainer>
                        <div className='nav1'>
                            <Link to="/list" className='list'>SAN PHAM</Link>
                        </div>
                        <div className='nav1'>
                            <Link to="/phukien" className='list'>PHU KIEN</Link>
                        </div>
                        <div className='nav1'>
                        <Link to="/gioithieu" className='list'>GIOI THIEU</Link>
                            
                        </div>
                        <div className='nav1'>
                        <Link to="/lienhe" className='list'>LIEN HE</Link>
                
                        </div>
                    </div>

                    <Center>
                        <Link to="/" className='logo'>
                            <Logo>TFTFulsal.</Logo>
                        </Link>
                    </Center>
                    <Right>
                        <div className='nav1' onClick={handleLogout}>{user && "LOGOUT"}</div> 
                        {user ? (
                           <Link to="/settings" className='avatar'>
                                <span>ID: {user.username} </span>
                                <img src={user.img} alt="" />
                           </Link >
                        ) : (
                            <>
                                <div className='nav1'>
                                    <Link to="/register" className='list'> REGISTER </Link>
                                </div>
                                <div className='nav1'>
                                    <Link to="/login" className='list'> SIGN IN </Link>
                                </div>
                            </>
                        )}
                        
                            
                        <Link to="/cart" className='cart_total'>
                            <div className='cart'>
                                <Badge badgeContent={quantity} color="primary">
                                    <i className="fa-solid fa-cart-shopping" style={{fontSize:"20px"}}></i>
                                </Badge>
                            </div>
                        </Link>
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar