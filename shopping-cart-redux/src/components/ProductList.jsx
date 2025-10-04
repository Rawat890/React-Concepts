import React, { useEffect } from 'react'
import NavBar from './NavBar'

function ProductList() {
  const fetchShopData = async()=>{
    const response =  await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
   fetchShopData()
  },[])
  
  return (
    <>
    <NavBar/>
    <div className='product-list'>
    <div className='product-card'>
      <img src='image' alt='Image-title'/>
      <h2>Product title</h2>
      <p>Price: $400</p>
      <button>Add to cart</button>
    </div>
    </div>
    </>
  )
}

export default ProductList