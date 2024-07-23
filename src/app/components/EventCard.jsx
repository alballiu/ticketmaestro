export default function EventCard(props) {
    return (
        <div key={props.key} className="event-card">
            <div className="event-date">
                {props.month}
                <span>{props.day}</span>
            </div>
            <ul className="event-details">
                <li className="event-name">{props.name}</li>
                <li className="event-location">{props.location}</li>
                <li className="event-venue">{props.venue}</li>
                {props.onPartnerSite && <li className="event-partner-site">On Partner Site</li>}
            </ul>
            <a href={props.url} class="event-link">
                Find tickets
            </a>
        </div>
    )
}