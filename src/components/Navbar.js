import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import gpctr_logo from '../img/gpctr_logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={gpctr_logo} alt="IDeA CTR" style={{ width: '180px'}} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About Us
        </Link>
        {/* <Link className="navbar-item" to="/products">
          Products
        </Link> */}
        <Link className="navbar-item" to="/cores/cores_bmic/">
          Cores
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>




    

  </nav>
)

export default Navbar
