import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import Newcollection from '../Components/newcollection/Newcollection'
import Newslater from '../Components/newlater/Newslater'
import Footer from '../Components/footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <Newcollection></Newcollection>
      <Newslater></Newslater>
      <Footer></Footer>
    </div>
  )
}

export default Shop
