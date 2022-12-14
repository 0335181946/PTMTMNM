import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import News from "../components/News"
import {mobile} from "../reponsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "30vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
    
const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    margin: 0px 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 7px;
`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: teal;
        color: white;
    }

`



const Productt = () => {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://product.hstatic.net/200000278317/product/giay-da-banh-adidas-predator-edge-3-tf-gv8536-cam-do-1_a37e651d69884a08876484ba16ffc54d_master.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>NIKE PHANTOM</Title>
                    <Desc> Ph???n Upper ???????c c???u th??nh t??? c??c h???t n???i Generative Texture ph??? 90% th??n gi??y. C??c h???t n???i GT ???? ???????c thay ?????i h??nh d??ng th??nh c??c h??nh m??i t??n v???i m???t ????? d??y h??n, t??ng ????? b??m b??ng v?? ki???m so??t b??ng t???t h??n. ??? phi??n b???n Academy, ph???n upper c???a GT2 ???????c l??m t??? da t???ng h???p gi??p ng?????i ch??i c?? ???????c c???m gi??c b??ng t???t m???i khi chuy???n hay s??t.</Desc>
                    <Price>400.000 vnd</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color: </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <i class="fa-solid fa-minus"></i>   
                            <Amount>1</Amount>
                            <i class="fa-solid fa-plus"></i>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <News/>
            <Footer/>
           
        </Container>
  )
}

export default Productt
