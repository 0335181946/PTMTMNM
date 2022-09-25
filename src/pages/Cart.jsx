import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``


const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type ===  "filled" && "none"};
    background-color: ${props => props.type ===  "filled" ? "black": "transparent"};
    color: ${props => props.type ===  "filled" && "white"};
`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product=styled.div``

const ProductName=styled.div``
const ProductId=styled.div``


const Summary = styled.div`
    flex: 1;
    background-color: red;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>GIO HANG CUA BAN</Title>
            <Top>
                <TopButton>TIEP TUC MUA SAM</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Yeu thich (0)</TopText>
                </TopTexts>
                <TopButton type="filled">THANH TOAN NGAY</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://product.hstatic.net/200000278317/product/giay-da-banh-puma-ultra-ultimate-cage-tf-106893-01-xanh-ma-non-1_a856c9f8be9c4f26a8775095b528262f_master.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> PUMA ULTRA ULTIMATE CAGE TF </ProductName>
                                <ProductId><b>ID:</b> 1234566</ProductId>
                                <ProductColor/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            PRICE
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
