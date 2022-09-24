import styled from 'styled-components'
import React from 'react';
import { useState } from 'react';
import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100px;
    display: flex;
    transition: all 0.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    height: 100vh;
    width: 100vw;   
    display: flex;
    align-items: center; 
`;
const ImgContent = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContent = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
    color: white;
`;
const Desc = styled.p`
    margin: 50px 0px; 
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    
    const   [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction===" left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }
    };

  return (
    <Container className='total3'>
        <Arrow direction="left" className='content_1' onClick={() => handleClick("left")}>
            <i class="fa-solid fa-caret-left"></i>
        </Arrow>

        <Wrapper className='content_2' slideIndex={slideIndex}>
            {sliderItems.map((item) => (

            <Slide bg={item.bg} key={item.id}>
                <ImgContent className='img1'>
                    <Image src={item.img}/>
                </ImgContent>
                <InfoContent>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>Them vao gio</Button>
                </InfoContent>
            </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right" className='content_3' onClick={() => handleClick("right")}>
            <i class="fa-solid fa-caret-right"></i>
        </Arrow>
    </Container>
  )
}

export default Slider
