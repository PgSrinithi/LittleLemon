import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

const Nav = () => {
  return (
    <header className="site-header">
      <div className="site-nav">
        <div className="logo">
          <img src={Logo} alt="Little Lemon logo" />
        </div>

        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#" className="login" aria-label="On Click">Login</a>
        </div>
      </div>
    </header>
  )
}

export default Nav