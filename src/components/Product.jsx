import React from 'react'
import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1 1 400px;
    margin: 5px;
    /* max-width: 0px; */
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: silver;
    /* background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%); */
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 80%;
    z-index: 2;

`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
            background-color: #e9f5f5;
            transform: scale(1.1);
    }
`


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <i class="fas fa-shopping-cart"></i>
            </Icon>
            <Icon>
                <i class="fas fa-search"></i>
            </Icon>
            <Icon>
                <i class="far fa-heart"></i>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
