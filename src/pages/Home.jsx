import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import News from '../components/News'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <News/>
    </div>
  )
}

export default Home