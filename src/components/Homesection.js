import React from 'react';
import './Homesection.css';

const Homesection = () => {
  const image_url = 'https://www.showtimeevent.com/images/main-slider/event-management-company.webp';

  return (
    <div className="homesection" style={{ backgroundImage: `url(${image_url})` }}>
      <div className="content">
        <div className="search-bar">
          <input type="text" placeholder="Search events" />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Homesection;
