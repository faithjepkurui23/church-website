import React from 'react';

import Card from '../components/Card';
import './Events.css';

function Events() {
  return (
      <div className="events-section">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          <Card 
            title="Sunday Service"
            description="Join us every Sunday at 10:00 AM."
            image="https://via.placeholder.com/400x200"
          />
          <Card 
            title="Youth Conference"
            description="An event to empower and connect youth in faith."
            image="https://via.placeholder.com/400x200"
          />
          <Card 
            title="Worship Night"
            description="A night of praise and worship."
            image="https://via.placeholder.com/400x200"
          />
        </div>

     
      </div>
  );
}

export default Events;
