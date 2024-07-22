import EventCard from "./EventCard"


async function fetchEvents() {
  const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.TICKETMASTER_API_KEY}&countryCode=GB&keyword=jazz&dmaId=605&endDate=2024-08-30`);
  return data.json();
}

export const formatEventData = (data) => {
  return {id: data.id,name: data.name, venue: data._embedded.venues[0].name, date: data.dates?.start?.localDate, time: data?.dates?.start?.localTime, location:data._embedded.venues[0].city.name }
}

export default async function EventList() {
    const data = await fetchEvents();

    return <section>
        <h2>EVENTS - {data.page.totalElements} RESULTS</h2>
        <ul>
            {data._embedded.events.map(event => {
                return <EventCard key={event.id} {...formatEventData(event)} />
            })}
        </ul>
    </section>
}