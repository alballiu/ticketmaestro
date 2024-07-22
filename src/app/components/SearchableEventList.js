
import EventList from './EventList';

async function fetchEvents({ query }) {
  const data = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.TICKETMASTER_API_KEY}&countryCode=GB&keyword=${query}&dmaId=605&endDate=2024-08-30`,
  );
  return data.json();
}

export default async function SearchableEventList({ query }) {
  const data = await fetchEvents({ query });

  return (
    <section>
      
      <EventList events={data._embedded.events} totalElements={data.page.totalElements} />
    </section> 
  );
}
