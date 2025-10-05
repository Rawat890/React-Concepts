import { Avatar, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/cryptocurrency.png'
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size={24}/>
        <Typography.Title level={2} className='logo'>
          <Link to={"/"}>CryptoVerse</Link>
        </Typography.Title>
      </div>
    </div>
  )
}

export default Navbar