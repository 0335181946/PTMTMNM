import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40vh;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 0.75;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
`



const News = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Liệu Zoom Mercurial Vapor 15 Academy TF có thật sự vượt trội hơn so với người tiền nhiệm của mình? Cùng mình tìm hiểu nào</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <i class="far fa-paper-plane"></i>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default News
