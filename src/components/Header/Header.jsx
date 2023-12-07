import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({children}) => {
  return (
    <header className="header">
        <NavLink to={'/'}>
          <div className='logo'>
            <span>Neto Social</span>
          </div>
        </NavLink>
        {children}
    </header>
  )
}
