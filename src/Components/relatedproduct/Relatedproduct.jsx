import React from 'react';
import './Relatedproduct.css';
import data from '../Assets/data';
import Product from '../product/Item';

const Relatedproduct = () => {
  return (
    <div className='related-product'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-product-item">
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={`$${item.new_price}`}
            old_price={`$${item.old_price}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Relatedproduct;
