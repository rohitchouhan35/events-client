import React, { useState } from 'react';
import './Card.css';

const Card = ({ event }) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    'https://static.businessworld.in/article/article_extra_large_image/1566790917_Um2lHl_events.jpg';

  const image_url = imageError ? fallbackImage : event.banner_image || fallbackImage;

  const handleImageError = () => {
    setImageError(true);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditButtonClick = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className='card'>
    <div className="event-card">
      <div className="event-image">
        <img src={image_url} alt={event.event_name} onError={handleImageError} />
      </div>
      <div className="event-details">

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
          <button onClick={handleEditButtonClick}>View details</button>
        </div>
      </div>

    </div>
          {showEditModal && (
            <div className="card-modal scroll">
              <div className="card-modal-content">
                <span className="card-close" onClick={handleCloseModal}>
                  &times;
                </span>
                <h2>{event.event_name}</h2>
                <div className='card-modal-row'>
                  <p>{event.description}</p>
                </div>
                <button className="btn">
                  Buy ticket
                </button>
              </div>
            </div>
          )}
    </div>
  );
};

export default Card;
