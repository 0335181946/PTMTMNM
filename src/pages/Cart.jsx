import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import {mobile} from "../reponsive"

const Container = styled.div``


const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
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
    ${mobile({display: "none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div`
    flex: 3;
`
const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
`
const Image=styled.img`
    width: 250px;
`
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize=styled.span``
const PriceDetail=styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 20px;
    margin: 7px;
    ${mobile({margin: "10px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 24px;
    font-weight: 200;
    ${mobile({marginBottom: "10px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: fit-content;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "600"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 20px;
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
                                <ProductColor color="yellow"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <i class="fa-solid fa-minus"></i>
                                <ProductAmount>2</ProductAmount>
                                <i class="fa-solid fa-plus"></i>
                            </ProductAmountContainer>
                            <ProductPrice>
                                3 000 000vnd
                            </ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://product.hstatic.net/200000278317/product/giay-da-banh-adidas-x-speedportal-1-tf-gw8973-xanh-la-ma-1_9f396938bc7d46559fc6816911c8b4a6_master.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> ADIDAS X SPEEDPORTAL.1 TF</ProductName>
                                <ProductId><b>ID:</b> 1234566</ProductId>
                                <ProductColor color="green"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <i class="fa-solid fa-minus"></i>
                                <ProductAmount>1</ProductAmount>
                                <i class="fa-solid fa-plus"></i>
                            </ProductAmountContainer>
                            <ProductPrice>
                                3 000 000vnd
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice> 4000000vnd</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Thue VAT</SummaryItemText>
                        <SummaryItemPrice> 40000vnd</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Phi ship</SummaryItemText>
                        <SummaryItemPrice> 30000vnd</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice> 4700000vnd</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Thanh toan ngay</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
