import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__fronend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              {/* this icon does not change with css file so i did it here */}
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>React</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>SCSS</h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* Backend details */}
        <h3>Backend Development</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill margin='6px' color='var(--color-primary)' />
              <div>
                <h4>PostgresSQL</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience