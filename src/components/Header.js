import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  useEffect(() => {
    if (code) {
      localStorage.setItem('userToken', code);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [code]);

  const handleCreate = () => {
    if (!isSignedIn) {
      alert("Please Sign in to create a new event");
      return;
    } else {
      navigate("/addevent");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('userToken');
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <div className='header'>
      <div style={{ marginLeft: '10px' }}>
        <h1>Allevent</h1>
      </div>
      <div className='header-btn'>
        <div>
          <button onClick={handleCreate} className="create-event-button">Create Event</button>
        </div>
        <div>
          {isSignedIn ? (
            <button onClick={handleSignOut} className="signin-button">Sign out</button>
          ) : (
            <NavLink to="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&access_type=online&client_id=224762843069-o6jpcp7unjcf4h519fjr8v6qk6b2jo1h.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state&scope=profile%20email&approval_prompt=auto" key="addevent">
              <button className="signin-button">Sign in</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
