import React, { useState } from 'react';
import './Eventform.css';
import eventService from '../services/eventData';
import { useNavigate } from 'react-router-dom';

const Eventform = () => {
  const [data, setData] = useState({
    event_name: '',
    start_time: '',
    end_time: '',
    location: '',
    description: '',
    category: '',
    banner_image: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...data,
      start_time: new Date(data.start_time).toLocaleDateString('en-GB'),
      end_time: new Date(data.end_time).toLocaleDateString('en-GB'),
    };

    console.log(formattedData);
    eventService.saveEvent(formattedData).then((response) => {
        navigate("/");
    })
    .catch((error) => {
        console.log("error " + error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="event-form">
      <div className="form-container">
        <h1>Fill up event details</h1>
        <form onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="event_name">Event Name:</label>
            <input
              type="text"
              id="event_name"
              name="event_name"
              placeholder="Event Name"
              value={data.event_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
          <label htmlFor="start_time">Start Date:</label>
            <input
              type="date"
              id="start_time"
              name="start_time"
              value={data.start_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="end_time">End Date:</label>
            <input
              type="date"
              id="end_time"
              name="end_time"
              value={data.end_time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={data.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={data.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              value={data.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="banner_image">Banner Image Link:</label>
            <input
              type="text"
              id="banner_image"
              name="banner_image"
              placeholder="Banner Image Link"
              value={data.banner_image}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default Eventform;
