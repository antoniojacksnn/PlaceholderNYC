import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Event = require('./models/Event'); // Adjust the path based on where you're importing it

// Example: Creating a new event
const newEvent = new Event({
  name: 'TEST Community Meetup',
  location: 'TEST Central Park',
  date: new Date('2024-05-01')
});

newEvent.save()
  .then((event) => console.log(event))
  .catch((error) => console.error('Error saving event:', error));



import React from 'react';
import Map from './components/Map'; // Component for displaying the map
import EventList from './components/EventList'; // Component for listing events

function App() {
  return (
    <div>
      <Map />
      <EventList />
    </div>
  );
}

export default App;