import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      {/* <About /> */}
      <Nav />
      <Portfolio />
      <Experience />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </HashRouter>   
    </div>
  )
}

export default App