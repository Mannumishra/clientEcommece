import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import DealStart from '../DealStart/DealStart'
import Feauture from '../Feature/Feauture'
import HowToUse from '../HowTOUSe/HowToUse'
import Product from '../Product/Product'
import Newsletter from '../Newsletter/Newsletter'
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog'

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Product />
      {/* <DealStart /> */}
      <Feauture />
      <Product />
      <HowToUse />
      {/* <Product /> */}
      {/* <Testimonial /> */}
      <Blog />
      <Newsletter />
    </>
  )
}

export default Home