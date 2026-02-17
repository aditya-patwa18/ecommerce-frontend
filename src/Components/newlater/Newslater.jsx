import React from 'react'
import './Newslater.css'

const Newslater = () => {
  return (
    <div className='newslater'>
        <h1>Get Exclusive offer On Your Email</h1>
        <p>Subscribe To Our NewsLater To Get Exclusive News</p>
        <div>
            <input type="email" placeholder='Enter Email' />
            <button>Subscibe</button>
        </div>
      
    </div>
  )
}

export default Newslater
