import React from 'react'
import './header.css'
import RTA from './RTA'
import ME from '../../assets/main.jpg'
import HeaderSocials from './HeaderSocials'
import About from '../about/About'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Dan You</h1>
        {/* <h5 className='text-light'>Fullstack Developer</h5>
        <RTA /> */}
        <HeaderSocials />
        <About /> 

        {/* <div className='me'>
          <img src={ME} alt='me' />
        </div> */}

        {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header