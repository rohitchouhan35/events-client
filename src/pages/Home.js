import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Grid from '../components/EventRow';
import eventService from '../services/eventData';

const Home = () => {
  const [eventList, setEventList] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    eventService
      .getEventList()
      .then((response) => {
        setEventList(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    filterEvents();
  }, [searchQuery, eventList]);

  const filterEvents = () => {
    const filtered =
      searchQuery.trim() !== ''
        ? eventList.filter((event) =>
            event.event_name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : eventList;
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <Header />
      <Body eventList={eventList} setFilteredEvents={setFilteredEvents} setSearchQuery={setSearchQuery} />
      {filteredEvents.length > 0 ? (
        <Grid eventList={filteredEvents} />
      ) : (
        <p style={{ textAlign: 'center', margin: '20px' }}>
          No events matched your search.
        </p>
      )}
    </div>
  );
};

export default Home;
