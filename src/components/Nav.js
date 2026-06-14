import React from 'react'
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#" className="login">Login</a>
        </div>
      </div>
    </header>
  )
}

export default Nav