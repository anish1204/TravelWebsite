import React from 'react'
import '../components/NavBar.css'
import WebsiteLogo from '../images/logo123.jpg'

const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img className='WebLogo' src={WebsiteLogo} />
                <h2>Travel</h2> 
            </div>
            <div className='navbar-options'>
                <ul className='navbar-options-list'>
                    <li><a href='' className='nav-link'>Home</a></li>
                    <li><a href='' className='nav-link'>Packages</a></li>
                    <li><a href='' className='nav-link'>Shop</a></li>
                    <li><a href='' className='nav-link'>About</a></li>
                    <li><a href='' className='nav-link'>Pages</a></li>
                    <li><a href='' className='nav-link'>News</a></li>
                    <li><a href='' className='nav-link'>Contact</a></li>
                    <button>Book Now</button>
                </ul>
            </div>

        </nav>
    </div>
  )
}

export default NavBar