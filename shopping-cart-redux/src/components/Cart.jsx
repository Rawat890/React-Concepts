import React from 'react'

function Cart() {
  return (
    <div className="wrapper">
    <div className='cart-page-container'>
      <div className='cart-container'>
        <h2>Your cart</h2>
        <div className='cart-item'>
          <img src='image' alt='Image-title'/>
          <div className='cart-item-details'>
            <h3>Image title</h3>
            <p>Price: $400</p>
            <div>
              <input type='number' min='1'/>
              <button>Update</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className='card-total'>
          <p>Total: $400</p>
          <button className='back-button'>Back to shop</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart