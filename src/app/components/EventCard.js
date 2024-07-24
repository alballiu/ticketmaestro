
import style from './event-card.module.css';

export default function EventCard(props) {

    return <section className={style.eventcard}>
        <div>
            <p>{props.month} {props.date}</p>
        </div>
        <div>
            <p>{props.day} - {props.time}</p>
            <p>{props.city}</p>
            <p>{props.venue}</p>
        </div>
    </section>
}