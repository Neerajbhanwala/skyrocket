import React from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <React.Fragment>
  
  
<nav id="hom" class="navbar nav-bg sticky-top navbar-expand-lg navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link to="/" class="navbar-brand"><i class="fas fa-rocket fa-3x ml-5" style={{color:"#cecdd1"}}></i></Link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

    </ul>
    <ul class="navbar-nav  my-2 my-lg-0">
      <li class="nav-item mr-4">
        <Link to="/" class="nav-link">HOME </Link>
      </li>
      <li class="nav-item mr-4">
        <Link to="/about" class="nav-link">ABOUT US</Link>
      </li>
              <li class="nav-item mr-4">
        <Link to="/services" class="nav-link">SERVICES</Link>
      </li>
              <li class="nav-item mr-5">
        <Link to="/contact" class="nav-link">CONTACT US</Link>
      </li>
    </ul>
  </div>
</nav>

    </React.Fragment>
  )
}

export default Header