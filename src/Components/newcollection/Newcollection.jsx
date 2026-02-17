import React from 'react'
import new_collection from '../Assets/new_collections'
import './Newcollection.css'

const Newcollection = () => {
  return (
    <div className='newcollection'> 
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item, i) => (
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

export default Newcollection
