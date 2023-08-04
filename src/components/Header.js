import React from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../services/auth';

const Header = () => {
  // const authUrl = auth.authurl();
  const navigate = useNavigate();
  const handleCreate = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if(!code) {
      alert("Please Sign in to create new event");
      return;
    }
    else {
      localStorage.setItem('userToken', code);
      navigate("/addevent");
    }
  }
  return (
    <div className='header'>
      <div style={{ marginLeft: '10px' }}><h1>Allevent</h1></div>
      <div className='header-btn'>
        <div>
          <button onClick={handleCreate} className="create-event-button">Create Event</button>
        </div>
        <div>
        <NavLink to="" key="addevent">
        <button className="signin-button">Sign in</button>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
