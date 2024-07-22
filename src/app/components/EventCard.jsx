import styles from './event-card.module.css';


// event name
// location: city, venue
// date: month, date, day, time

import {getDay, getDate, getMonth} from 'date-fns';


export default function EventCard({name, city, venue, date: dateString, time}) {

    const date = getDate(new Date(dateString));
    const dayIndex = getDay(new Date(dateString));
    const monthIndex = getMonth(new Date(dateString));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return <li className={styles['event-card']}>
            <section><p>{months[monthIndex]}</p><p>{date}</p></section>
            <section>
                <p>{daysInWeek[dayIndex]} - {time}</p>
                <p>{name}</p>
                <p>{city}</p>
                <p>{venue}</p>
            </section>
        </li>
}