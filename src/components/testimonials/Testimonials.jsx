import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/doctor.png'
import AVTR2 from '../../assets/teacher.png'
import AVTR3 from '../../assets/guy.png'
import AVTR4 from '../../assets/scientist.png'

const data = [
  {
    id: 1,
    clientName: 'Doctor',
    image: AVTR1,
    testimonial: 'I love this app'
  },
  {
    id: 2,
    clientName: 'Teacher',
    image: AVTR2,
    testimonial: 'I love this app'
  },
  {
    id: 1,
    clientName: 'Guy',
    image: AVTR3,
    testimonial: 'I love this app'
  },
  {
    id: 1,
    clientName: 'Scientist',
    image: AVTR4,
    testimonial: 'I love this app'
  }
]

const Testimonials = () => {
  return (
    <section id='testmonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {
          data.map(({id, clientName, image, testimonial}) => {
            return (
              <article key={id} className='testimonial'>
            <div className='client__avatar'>
              <img src={image} alt={clientName} />
            </div>
              <h5 className='client__name'>{clientName}</h5>
              <small className='client__review'>
                {testimonial}
              </small>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials