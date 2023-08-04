import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div style={{ marginLeft: '10px' }}><h1>Allevent</h1></div>
      <div className='header-btn'>
      <div>
        <NavLink to="/addevent" key="addevent">
          <button className="create-event-button">Create Event</button>
        </NavLink>
        </div>
        <div>
        <button className="signin-button">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Header
