import React from 'react'

import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Personajes de los simpson</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
