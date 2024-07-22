import EventCard from './EventCard';

export const formatEventData = (data) => {
  return {
    id: data.id,
    name: data.name,
    venue: data._embedded.venues[0].name,
    date: data.dates?.start?.localDate,
    time: data?.dates?.start?.localTime,
    location: data._embedded.venues[0].city.name,
  };
};

export default function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => {
        return <EventCard key={event.id} {...formatEventData(event)} />;
      })}
    </ul>
  );
}
