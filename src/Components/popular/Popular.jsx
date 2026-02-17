import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR AMONG WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div className="product-card" key={item.id || i}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">
              <span className="new">${item.new_price}</span>
              <span className="old">${item.old_price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular
