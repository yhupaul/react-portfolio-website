import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/momentem.png'
import IMG2 from '../../assets/ydanmovie.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Momentem</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/yhupaul/momentum' className='btn' target='_blank'>Github</a>
          <a href='https://yhupaul.github.io/momentum/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Ydanmovie</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/yhupaul/YdanMovie' className='btn' target='_blank'>Github</a>
          <a href='https://yhupaul.github.io/ydanmovie/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio