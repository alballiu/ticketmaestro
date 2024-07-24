import React from 'react';

import EventCard from './EventCard.jsx';

async function fetchEvents() {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=jazz&city=manchester`)
  const data = await response.json()

  return data._embedded.events
}

export default async function EventList() {
  const events = await fetchEvents()

  // console.log(events[0])

  const eventData = events.map(event => ({
    id: event.id,
    name: event.name,
    url: event.url,
    location: event.sales
  }))

  return (
    <div className="event-list">
      {eventData.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}
