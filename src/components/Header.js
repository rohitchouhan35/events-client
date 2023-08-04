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
        <NavLink to="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&access_type=online&client_id=224762843069-o6jpcp7unjcf4h519fjr8v6qk6b2jo1h.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state&scope=profile%20email&approval_prompt=auto" key="addevent">
        <button className="signin-button">Sign in</button>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
