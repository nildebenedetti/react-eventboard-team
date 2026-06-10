import EventCard from "./EventCard.jsx";

function EventList() {
    return <>
        <div>
            <p value={filter} onChange={changeHandler}>FIltra per Categoria:</p>
            <select class="form-select" aria-label="Default select example">
                <option value="tutti">Tutti</option>
                <option value="conferenze">Conferenze</option>
                <option value="workshop">Workshop</option>
                <option value="meetup">Meetup</option>
            </select>
        </div>
        <p>Eventi trovati: {visibleCount}</p>

        {/*lista eventi*/}
        {/* e la card da far girare con la lista eventi*/}
        <EventCard />

        <ul>
            {visibleEvents.map((event) => (
                <li key={event.id}>{event.title}</li>
            ))}
        </ul>
    </>
}

export default EventList;