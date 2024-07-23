import EventCard from './EventCard.jsx'

export default function EventList() {
    let events = [
        {
            key: 1,
            name: 'Live from the Lawn - Jazz Afternoon Tea',
            month: 'Aug',
            day: '26',
            time: '7:00pm',
            location: 'Manchester',
            venue: 'Down Hall Hotel & Spa',
            onPartnerSite: true,
            url: '#'
        },
        {
            key: 2,
            name: 'Filipe Catto Plays Gal Costa',
            month: 'Dec',
            day: '11',
            time: '6:00pm',
            location: 'London',
            venue: 'Jazz Cafe',
            onPartnerSite: false,
            url: '#'
        },
        {
            key: 3,
            name: 'Filipe Catto Plays Gal Costa - Restaurant Tables',
            month: 'Dec',
            day: '1',
            time: '2:00pm',
            location: 'Manchester',
            venue: 'Jazz Cafe',
            onPartnerSite: false,
            url: '#'
        }
    ]
    return (
        <div className="event-list">
            {events.map(event => <EventCard key={event.key} {...event} />)}
        </div>
    )
}