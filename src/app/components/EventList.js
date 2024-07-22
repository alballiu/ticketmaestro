
import EventCard from "./EventCard";
import SearchBar from "./SearchBar";

async function fetchEvents({query}) {
  const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.TICKETMASTER_API_KEY}&countryCode=GB&keyword=${query}&dmaId=605&endDate=2024-08-30`);
  return data.json();
}

export const formatEventData = (data) => {
  return {id: data.id,name: data.name, venue: data._embedded.venues[0].name, date: data.dates?.start?.localDate, time: data?.dates?.start?.localTime, location:data._embedded.venues[0].city.name }
}


function EventList({events}) {
  return <ul>
  {events.map(event => {
      return <EventCard key={event.id} {...formatEventData(event)} />
  })}
  </ul>
}


export default async function SearchableEventList({query}) {
    const data = await fetchEvents({query});
    
    return <section>
        <SearchBar />
        <h2>EVENTS - {data.page.totalElements} RESULTS</h2>
        <EventList events={data._embedded.events} query={query} />
    </section>
}