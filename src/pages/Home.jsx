import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Catergories from '../components/Catergories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Catergories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
