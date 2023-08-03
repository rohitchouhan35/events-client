import React from 'react';
import './Card.css';

const Card = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.banner_image} alt={event.event_name} />
      </div>
      <div className="event-details">
        <h3>{event.event_name}</h3>
        <div className="event-info">
          <p>
            <strong>City:</strong> {event.location}
          </p>
          <p>
            <strong>Start Date:</strong> {event.start_time}
          </p>
          <p>
            <strong>End Date:</strong> {event.end_time}
          </p>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <p>
            <strong>Category:</strong> {event.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
