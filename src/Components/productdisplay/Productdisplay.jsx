import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { Shopcontext } from '../../Context/Shopcontext'

const Productdisplay = (props) => {

  const { product } = props;
  const { addtocart } = useContext(Shopcontext);

  return (
    <div className='productdisplay'>

      <div className="product-display-left">
        <div className="img-list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>

        <div className="productdisplay-img">
          <img className='product-display-main-img' src={product.img} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">

        <h1>{product.name}</h1>

        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="display-right-prices">
          <div className="old-prices">₹{product.old_price}</div>
          <div className="newprice">₹{product.new_price}</div>
        </div>

        <div className="right-description">
          Clothing is designed to provide comfort, protection, and style, combining high-quality fabrics with contemporary designs.
        </div>

        <div className="product-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => addtocart(product.id)}>
          ADD TO CART
        </button>

        <p className='product-display-right-category'>
          <span>Category:</span> {product.category}
        </p>

      </div>

    </div>
  )
}

export default Productdisplay;
