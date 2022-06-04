import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='http://linkedin.com/in/danyou623/' target='_blank'><BsLinkedin /></a>
      <a href='http://github.com/yhupaul' target='_blank'><FaGithub /></a>
      <a href='http://dribbble.com' target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials