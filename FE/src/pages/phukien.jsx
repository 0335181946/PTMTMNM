import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import News from '../components/News'
import {mobile} from "../reponsive"
import { useLocation } from "react-router-dom";
import  {useState } from "react";
import { Link } from 'react-router-dom';
import "./app2.css";

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  margin-left: 20px;
  ${mobile({margin:"0px 20px", display: "flex", flexDirection: "column"})}
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
    ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cate = location.pathname.split("/")[2];
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>
                THUONG HIEU: 
                <Link to="/products/nike" className='brand'>NIKE</Link>
                <Link to="/products/adidas" className='brand'>ADIDAS</Link>
                <Link to="/products/puma" className='brand'>PUMA</Link>
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter product: </FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>white</Option>
                        <Option>red</Option>
                        <Option>green</Option>
                        <Option>yellow</Option>
                        <Option>blue</Option>
                    </Select>
                    <Select  name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>37</Option>
                        <Option>38</Option>
                        <Option>39</Option>
                        <Option>40</Option>
                        <Option>41</Option>
                        <Option>42</Option>
                        <Option>43</Option>
                        <Option>44</Option>
                        <Option>45</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort product: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cate={cate} filters={filters} sort={sort}/>
            <News/>
            <Footer/>
        </Container>
  )
}

export default ProductList;
