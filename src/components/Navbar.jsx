// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons
import '../App.css'; 
import { useSelector } from 'react-redux';

function Navbar() {

  const cartItems = useSelector((state) => state.cart.items) 

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => navigate('/')}> <i className="fa-solid fa-hat-cowboy"></i> Wardrobe <span className='logospan'>Trends</span> </h1>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/home" onClick={closeMenu}> <i className="fa-solid fa-home"></i> Home</Link>
        <Link to="/" onClick={closeMenu}> <i className="fa-solid fa-store"></i>  Store</Link>
        <Link to="/contact" onClick={closeMenu}> <i className="fa-solid fa-phone"></i>  Contact</Link>
        <Link to="/signin" onClick={closeMenu}> <i className="fa-solid fa-user"></i>  Sign In</Link>
      </div>

     <Link 
      className='cart'
      to="/cart" > <i className="fa-solid fa-cart-shopping"> <span> {cartItems.length} </span> </i></Link> 
    </nav>
  );
}

export default Navbar;
