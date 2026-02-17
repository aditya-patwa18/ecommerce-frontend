import React, { useContext } from 'react';
import './Cartitems.css';
import { Shopcontext } from '../../Context/Shopcontext';
import cross_icon from '../Assets/cart_cross_icon.png';

const Cartitems = () => {
  const { totalamount,all_product, cartitems, removetocart } = useContext(Shopcontext);

  return (
    <div className='cartname'>
      <div className="cart-container">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product.map((e) => {
          const quantity = cartitems[e.id] || 0;
          if (quantity > 0) {
            // Convert price strings like "$50.00" to numbers
            const priceNum = parseFloat(e.new_price.replace('$', '')) || 0;

            return (
              <div className="cart-item-format" key={e.id}>
                <img src={e.image} alt="" className='carticon-producticon' />
                <p>{e.title}</p>
                <p>${priceNum.toFixed(2)}</p>
                <button className='quantity'>{quantity}</button>
                <p>${(priceNum * quantity).toFixed(2)}</p>
                <img
                  src={cross_icon}
                  onClick={() => removetocart(e.id)}
                  alt="Remove"
                  className='cart-remove-icon'
                />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitem-down">
            <div className="grand-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="card-total-items">
                        <p>SubTotal</p>
                        <p>${totalamount()}</p>
                    </div>
                    <hr />
                      <div className="card-total-items">
                        <p>Shipping Charges</p>
                        <p>Free</p>
                      </div>
                    <hr />
                    <div className="card-total-items">
                        <h3>
                            Total
                        </h3>
                        <h3>${totalamount()}</h3>
                    </div>
                </div>
                <button>Proceed To Pay</button>           
            </div>
            <div className="promocodes">
                <p>If You Have A Gift Card Enter It Here</p>
                <div className="promobox">
                    <input type="text" placeholder='Enter Your Gift Card' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
