import React from 'react';
import Card from './Card';
import { useEffect, useState } from 'react';
import eventService from '../services/eventData';
import './Grid.css'; 

const Grid = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    eventService
      .getEventList()
      .then((response) => {
        setEventList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid-container">
      {eventList &&
        eventList?.map((event, key) => (
          <Card key={key} event={event} />
        ))}
    </div>
  );
};

export default Grid;
