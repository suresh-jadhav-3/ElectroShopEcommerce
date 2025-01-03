import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Feature'
import Service from '../components/Service'
import PopularProduct from '../components/PopularProduct'
import BrandSlider from '../components/TopBrand'

function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <Features />
      <Service />
      <PopularProduct addToCart={addToCart} />
      <BrandSlider />
      
    </>
  )
}

export default Home



