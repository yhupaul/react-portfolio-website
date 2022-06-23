import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='"#' className='footer__logo'>Dan</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookSquare size="1.5rem"/></a>
        <a href='https://instagram.com'><RiInstagramFill size="1.5rem"/></a>
        <a href='https://twitter.com'><FaTwitterSquare size="1.5rem"/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Dan's Portfolio. Everything is gonna be all right!!</small>
      </div>
    </footer>
  )
}

export default Footer