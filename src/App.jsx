import React from 'react'
import { HashRouter } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"
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
      {/* <Router>
        <Routes>
          <Route path='./react-portfolio-website' exact component={Header}/>
          <Route path='./react-portfolio-website' exact component={Nav}/>
          <Route path='./react-portfolio-website' exact component={About}/>
          <Route path='./react-portfolio-website' exact component={Experience}/>
          <Route path='./react-portfolio-website' exact component={Services}/>
          <Route path='./react-portfolio-website' exact component={Portfolio}/>
          <Route path='./react-portfolio-website' exact component={Testimonials}/>
          <Route path='./react-portfolio-website' exact component={Contact}/>
          <Route path='./react-portfolio-website' exact component={Footer}/>
        </Routes>
      </Router> */}
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </HashRouter>   
    </div>
  )
}

export default App