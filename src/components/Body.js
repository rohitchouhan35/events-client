import React from 'react';
import './Body.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Homesection = ({ eventList, setFilteredEvents, setSearchQuery }) => {
  const image_url = 'https://www.showtimeevent.com/images/main-slider/event-management-company.webp';

  const cityList = [
    { id: 1, name: 'Ahmedabad' },
    { id: 2, name: 'Vadodara' },
    { id: 3, name: 'Surat' },
    { id: 4, name: 'Gandhinagar' },
    { id: 5, name: 'Delhi' },
  ];

  const categoryList = [
    { id: 1, name: 'Business' },
    { id: 2, name: 'Tech' },
    { id: 3, name: 'Parties' },
    { id: 4, name: 'Workshops' },
    { id: 5, name: 'Exhibitions' },
  ];

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    filterEvents();
  }, [selectedCity, selectedCategory, selectedDate, eventList]);

  const filterEvents = () => {
    const filtered = eventList.filter((event) => {
      const cityMatch = !selectedCity || event.location === selectedCity;
      const categoryMatch = !selectedCategory || event.category === selectedCategory;
  
      const eventDate =
        event.start_time && new Date(event.start_time.split('/').reverse().join('-'));
        
      const dateMatch =
        !selectedDate ||
        (!eventDate && false) ||
        (eventDate && eventDate >= selectedDate);
  
      return cityMatch && categoryMatch && dateMatch;
    });
  
    setFilteredEvents(filtered);
  };
  
  const clearFilters = () => {
    setSelectedCity('');
    setSelectedCategory('');
    setSelectedDate(null);
  };

  return (
    <div className="homesection" style={{ backgroundImage: `url(${image_url})` }}>
      <div className="content">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search events"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <button className="search-button">Search</button> */}
        </div>
        <div className="search-options">
          <label htmlFor="city">
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All City</option>
              {cityList.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="category">
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All events</option>
              {categoryList.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="date">
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="Select a date"
              />
            </label>
            <label>
            <button className="clear-filters-button" onClick={clearFilters}>
            Clear
            </button></label>

        </div>
      </div>
    </div>
  );
};

export default Homesection;