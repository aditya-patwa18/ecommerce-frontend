import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/breadcrum/Breadcrum'
import Productdisplay from '../Components/productdisplay/Productdisplay'
import Description from '../Components/description/Description'
import Relatedproduct from '../Components/relatedproduct/Relatedproduct'

const Product = () => {
    const {all_product}= useContext(Shopcontext)
    const {productId}= useParams();
   const product = all_product.find((e) =>(e.id) === Number(productId));


  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <Productdisplay product={product}></Productdisplay>
      <Description></Description>
      <Relatedproduct></Relatedproduct>
    </div>
  )
}

export default Product
