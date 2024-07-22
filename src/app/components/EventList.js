import EventCard from "./EventCard"

export default function EventList() {

    const EVENTS = [
      {
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
      },
      {
        "id": "G5vHZbGLezp8m",
        "name": "Jazz Emu: Knight Fever",
        "venue": "The Lowry",
        "date": "2025-02-17",
        "time": "20:00:00",
        "location": "Salford Quays"
      },
      {
        "id": "G5vHZbGnMo9SS",
        "name": "Jazz Emu: Knight Fever",
        "venue": "Cardiff Glee Club",
        "date": "2025-03-04",
        "time": "20:00:00",
        "location": "Cardiff"
      },
      {
        "id": "17GOvOG6GwIivI0",
        "name": "Alabaster dePlume",
        "venue": "Llandaff Cathedral",
        "date": "2024-10-02",
        "time": "19:00:00",
        "location": "Cardiff"
      },
      {
        "id": "G5vHZbFSmtVqG",
        "name": "Kamasi Washington",
        "venue": "Albert Hall",
        "date": "2024-10-15",
        "time": "19:00:00",
        "location": "Manchester"
      },
      {
        "id": "LvZ18_-280gDENsIHpMPz",
        "name": "Kamasi Washington",
        "venue": "The Great Hall - Cardiff University Students' Union",
        "date": "2024-10-17",
        "time": "19:00:00",
        "location": "Cardiff"
      },
      {
        "id": "1kuOvO0ZGA53Pd0",
        "name": "Ezra Collective",
        "venue": "O2 Apollo Manchester",
        "date": "2024-11-10",
        "time": "19:00:00",
        "location": "Manchester"
      },
      {
        "id": "G5vHZb69kSND7",
        "name": "Jamie Cullum",
        "venue": "Bridgewater Hall",
        "date": "2024-11-11",
        "time": "19:00:00",
        "location": "Manchester"
      },
      {
        "id": "17GOvOG6G8qzv7l",
        "name": "Julian Lage",
        "venue": "Manchester New Century Hall",
        "date": "2024-11-19",
        "time": "19:30:00",
        "location": "Manchester"
      }
    ];

    return <section>
        <h2>EVENTS - 100 RESULTS</h2>
        <ul>
            {EVENTS.map(event => {
                return <EventCard key={event.id} {...event} />
            })}
        </ul>
    </section>
}