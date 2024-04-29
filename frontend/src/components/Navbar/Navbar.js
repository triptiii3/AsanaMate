import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
      <div>  <div className='home-header'>
          <Link to='/'><h1 className='home-heading'>AsanaMate AI</h1></Link>
          <div className="navbar-links">
              <Link to='/'>
                  <button
                      className="btn "
                      id="home-btn"
                  >
                      Home
                  </button>

              </Link><Link to='/about'>
                  <button
                      className="btn "
                      id="about-btn"
                  >
                      About
                  </button>

              </Link>
              <Link to='/tutorials'>
                  <button
                      className="btn "
                      id="tutorials-btn"
                  >
                      Tutorials
                  </button>

              </Link>
              <Link to='/start'>
                  <button
                      className="btn explore-btn"
                  >Explore</button>
              </Link>
          </div>

      </div></div>
  )
}

export default Navbar