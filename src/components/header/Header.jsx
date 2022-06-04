import React from 'react'
import './header.css'
import RTA from './RTA'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Dan You</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <RTA />
      </div>
    </header>
  )
}

export default Header