import React from 'react'
import { BrandSlider, Features, Hero, PopularProduct, Service } from '../components'


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



