import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/momentem.png'
import IMG2 from '../../assets/ydanmovie.png'

//all the project list of data

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ToDoMomentem',
    github: 'https://github.com/yhupaul/momentum',
    demo: 'https://yhupaul.github.io/momentum/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Ydanmovie',
    github: 'https://github.com/yhupaul/ydanmovie',
    demo: 'https://yhupaul.github.io/YdanMovie/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Vancouver Bank',
    github: 'https://github.com/yhupaul/momentum',
    demo: 'https://yhupaul.github.io/momentum/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio