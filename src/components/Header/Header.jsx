import React from 'react'

import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Adivina el club</NavLink>
          </li>
          <li>
            <NavLink to='/guessplayer'>Adivina el jugador</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
