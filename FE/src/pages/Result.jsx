import React, { useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from '../components/News'
import {mobile} from "../reponsive"
import { useLocation } from "react-router-dom";
import  {useState } from "react";
import { Link } from 'react-router-dom'

const Container = styled.div``
const Filter = styled.div`
  margin-left: 20px;
  ${mobile({margin:"0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
    ${mobile({marginRight: "0px"})}
`

const Select = styled.select`
  padding: 10px;
  ${mobile({margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cate = location.pathname.split("/")[2];
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState("newest");
  const [products,setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () =>{
      let result = await fetch('http://localhost:5000/api/products');
      result= await result.json();
      setProducts(result);
  }
 
  const [destination, setDestination] = useState(location.state.destination);

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const searchHandle = async (e) =>{
    const key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:5000/api/products/search/${key}`);
      result = await result.json()
      if(result){
        setProducts(result);
      }else{
          getProducts();
      }
    }
  }
  
  return (
        <Container>
            <Navbar/>
            <Announcement/>
            <div className='total'>
                <div className='content_1'>
                    <h1>Search</h1>
                    <div className="item">
                        <label>Tu khoa</label>   
                        <input placeholder={destination} type="" onChange={searchHandle}/>
                    </div>
                    <Filter className='item_1'>
                        <FilterText>Filter product: </FilterText>
                        <Select className='item_2' name="color" onChange={handleFilters}>
                            <Option disabled>Color</Option>
                            <Option>white</Option>
                            <Option>red</Option>
                            <Option>green</Option>
                            <Option>yellow</Option>
                            <Option>blue</Option>
                        </Select>
                        <Select className='item_2'  name="size" onChange={handleFilters}>
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
                        <Select className='item_2' onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                    <button className='item_3' >Search</button>
                </div>

                <div className='content_2'>
                    { products.length>0 ? products.map((item, index) =>
                          <div className='rs_search' key={item._id}>
                              <img src={item.img}/>
                              <div className='info'>
                                <h1>{item.title}</h1>
                                <p>THUONG HIEU:  {item.categories}</p>
                                <p>MO TA: {item.desc}</p>
                                <span>GIA: {item.price}$</span>
                                <Link className='link' to={`/product/${item._id}`}>    
                                  <button>XEM CHI TIET</button>
                                </Link>
                              </div>
                          </div>
                     ) : <h1 className='error'> KHONG TIM THAY SAN PHAM !</h1>
                    }
                </div>
            </div>
            <News/>
            <Footer/>
        </Container>
  )
}

export default ProductList;
