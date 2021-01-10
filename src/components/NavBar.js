import React from 'react'
import Logo from '../img/LB.png'

const NavBar = () => {

  return <section className='nav'>
    <img src={Logo} className='logo' />
    <ul>
      <li><a href='google.com'>Linkedin</a></li>
      <li><a href='google.com'>Github</a></li>
      <li><a href='google.com'>CV</a></li>
    </ul>
  </section>
}

export default NavBar