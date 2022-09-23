import React from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input/>
                                <i class="fas fa-search" style={{color:"gray", fontSize: 16}}></i>
                        </SearchContainer>
                    </Left>

                    <Center>
                        <Logo>QTFulsal</Logo>
                    </Center>

                    <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Badge>
                        </MenuItem>
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar