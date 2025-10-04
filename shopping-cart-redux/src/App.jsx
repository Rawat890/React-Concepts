import React from 'react'
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <Router> 
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Router>
  )
}

export default App;