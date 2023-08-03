import React, { useState } from 'react';
import './Card.css';

const Card = ({ event }) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsrmtZlb0Bn_ARxNWoLw0Ke9eTybjTcKS_Q&usqp=CAU';

  const image_url = imageError ? fallbackImage : event.banner_image || fallbackImage;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image_url} alt={event.event_name} onError={handleImageError} />
      </div>
      <div className="event-details">
        {/* 
        <div className="event-info">
          <p>
            <strong>End Date:</strong> {event.end_time}
          </p>
        </div> */}

        <div className='info-section'>
          <div className='date-info'>
            <strong><p>{event.start_time}</p></strong>
            <p>{event.category}</p>
          </div>
          <div className='name-info'>
            <p>
              <strong>{event.event_name}</strong>
              <p>{event.location}</p>
            </p>
          </div>
        </div>

        <div className='description-info'>
        <p>{event.description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
