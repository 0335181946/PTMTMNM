import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import {mobile} from "../reponsive";
import {useDispatch, useSelector} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {useEffect, useState} from "react";
import {userRequest} from "../requestMethods";
import {useNavigate} from "react-router";
import {increase,decrease, clearCart, removeProduct} from "../redux/cartRedux"
import "./app2.css";

require ("dotenv").config();
const KEY = process.env.REACT_APP_STRIPE;

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
    padding: 10px 20px;
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
    margin-bottom: 12px;
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
    background-color: ${(props) => props.color};
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
    margin-top: 25px;
    font-size: 20px;
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
    const cart = useSelector((state) => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState();
    
    const onToken = (token) => {
        setStripeToken(token);
      };

    

    console.log(stripeToken);

    useEffect(() => {
        const makeRequest = async () =>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });
                navigate("/success", { 
                    data: res.data
                }); 
            } catch {}
        }; 
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);

    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    }; 
    
    
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
                <TopButton className="clear_btn" onClick={() => dispatch(clearCart())}>CLEAR</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map((product) => ( 
                    <Product>
                        <ProductDetail>
                            <Image src={product.img} />
                            <Details>
                                <ProductName><b>Product:</b> {product.title} </ProductName>
                                <ProductId><b>ID:</b> {product._id}</ProductId>
                                <ProductColor color={product.color?.map} />
                                <ProductSize>
                                    <b>Size:</b> {product.size}
                                </ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                            <i className="fa-solid fa-minus" onClick={() =>handleQuantity("dec")}></i>       
                                <ProductAmount>{product.quantity}</ProductAmount>

                            <i className="fa-solid fa-plus" onClick={() =>handleQuantity("inc")}></i>
                            </ProductAmountContainer>
                            <TopButton className="remove" onClick={() =>{
                                dispatch(removeProduct(product._id))
                            }}><i class="fas fa-trash"></i></TopButton>
                            <ProductPrice>
                                Gia: {product.price * product.quantity}$
                            </ProductPrice>
                            
                        </PriceDetail>
                    </Product>
                    
                    ))}
                    <Hr/>
                </Info>
                
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Thue VAT</SummaryItemText>
                        <SummaryItemPrice> $</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Phi ship</SummaryItemText>
                        <SummaryItemPrice> $</SummaryItemPrice>
                    </SummaryItem>                      
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                            name="TQTFutsal"
                            image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g"
                            billingAddress
                            shippingAddress
                            description={`tong so tien thanh toan $${cart.total}`}
                            amount={cart.total * 100 }
                            token={onToken}
                            stripeKey={KEY}
                        >
                        <Button>Thanh toan ngay</Button>
                    </StripeCheckout>
                    <Button className="cod">THANH TOAN KHI NHAN HANG</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
