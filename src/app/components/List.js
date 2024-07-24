import EventCard from "./EventCard";

export default function List() {


    const events = [{
        "id": "17GOvOG615my7_w",
        "name": "Jazz Sabbath",
        "venue": "Band On The Wall.",
        "date": "2025-02-12",
        "time": "20:00:00",
        "location": "Manchester"
    },
    {
        "id": "17GOvOG6153YNR7",
        "name": "Jazz Sabbath",
        "venue": "Kendal Brewery Arts Centre",
        "date": "2025-02-13",
        "time": "20:00:00",
        "location": "Cumbria"
    }];

    return <ul>
        {events.map(event => <li key={event.id}><EventCard {...event} /></li> )}
    </ul>
}