import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import News from '../components/News'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  margin-left: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dress</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter product: </FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>white</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort product: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                        
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <News/>
            <Footer/>
        </Container>
  )
}

export default ProductList
