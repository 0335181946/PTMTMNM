import styled from "styled-components"
import {mobile} from "../reponsive";

const Container = styled.div`
    display: flex;
    background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 20px;
    ${mobile({marginLeft: "0px"})}
`
const Logo = styled.h1`
    color: white;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Desc = styled.p`
    margin: 20px 0px;
    color: white;
    width: 80%;
    line-height: 1.7;
    ${mobile({width: "100%"})}
`

const SocialContainer = styled.div`
    display: flex;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 10px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
    color: white;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: white;
`
const Payment = styled.img`
    width: 50%;
    background-color: white;
`

const Footer = () => {
  return (
    <Container>

        <Left>
            <Logo>TQTFUTSAL.</Logo>
            <Desc>
                Mùa giải mới đồng nghĩa với một phiên bản thửa riêng hoàn toàn mới dành cho Lionel Messi. Khi vừa qua, adidas đã cho ra mắt X Speedportal Messi “Balon Te Adoro”, phiên bản đặc biệt đầu tiên của X Speedportal kể từ khi được phát hành
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <i class="fa-brands fa-square-facebook"></i>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <i class="fa-brands fa-instagram"></i>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <i class="fa-brands fa-twitter"></i>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <i class="fa-brands fa-pinterest"></i>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>
                Useful Link
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Co nhan tao</ListItem>
                <ListItem>San san`</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Yeu thich</ListItem>
                <ListItem>Don hang</ListItem>
                <ListItem>Term</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem><i class="fa-solid fa-location-dot" style={{marginRight:'10px'}}></i>THF I: 27 Đường D52, P. 12, Q. Tân Bình, TP. HCM | Thanh Hùng Futsal Store II: 32A THẠCH THỊ THANH, P. TÂN ĐỊNH, Q. 1, TP. HCM </ContactItem>
            <ContactItem><i class="fa-solid fa-phone" style={{marginRight:"10px"}}></i>Hotline: 0901 710 780 - 028 38429720</ContactItem>
            <ContactItem><i class="far fa-envelope" style={{marginRight:"10px"}}></i>contact@thanhunggmail.com</ContactItem>
            <Payment src="https://www.greenpatchseeds.com.au/images/source/visa-mastercard-paypal.png"/>
        </Right>
    </Container>
  )
}

export default Footer
