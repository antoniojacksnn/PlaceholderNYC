import React, { useEffect, useState } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <ul>
      {events.map(event => (
        <li key={event._id}>{event.name} - {event.date}</li>
      ))}
    </ul>
  );
}

export default EventList;
