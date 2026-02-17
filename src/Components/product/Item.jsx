import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} className="item-image" /></Link>
      <p className="item-title">{props.name}</p>
      <div className='item-prices'>
        <div className='price-new'>{props.new_price}</div>
        <div className='price-old'>{props.old_price}</div>
      </div>
    </div>
  )
}

export default Product
