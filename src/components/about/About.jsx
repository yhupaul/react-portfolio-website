import React from 'react'
import './about.css'
import ME from '../../assets/YDan.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiFillGithub} from'react-icons/ai'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>

      

      <div className="container about__container">
        {/* <div className="about__me"> */}
          
        <p>
          Recent graduate with a Web Development Diploma with mentoring experience. Highly poised and dedicated with talent in design principles and programming language.  Excellent eye for visual aesthetics.
          </p>
          {/* <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div> */}
        {/* </div> */}
        {/* <p>
          Recent graduate with a Web Development Diploma with mentoring experience. Highly poised and dedicated with talent in design principles and programming language.  Excellent eye for visual aesthetics.
          </p> */}

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiFillGithub className='about__icon'/>
              <h5><Link to="https://github.com/yhupaul">github.com/yhupaul</Link></h5>
              <small></small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>EveryWhere in the World</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>

         

          {/* <a href='#contct' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default About