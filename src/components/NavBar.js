import React from 'react'
import Logo from '../img/LB.png'


const NavBar = () => {

  return <section className='nav'>
    <img src={Logo} className='logo' />
    <ul>
      <li><a href='https://www.linkedin.com/in/lee-burgess/'>Linkedin</a></li>
      <li><a href='https://www.github.com/Budge23'>Github</a></li>
    </ul>
  </section>
}

export default NavBar