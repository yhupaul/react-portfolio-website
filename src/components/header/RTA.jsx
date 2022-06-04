import React from 'react'
import RESUME from '../../assets/Dan you (3).pdf'

const RTA = () => {
  return (
    <div className='rta'>
      <a href={RESUME} download className='btn'>Download RS</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default RTA