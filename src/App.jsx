import { useState } from "react"
import { events } from "./data/events";
import EventCard from "./components/EventCard";
import EventList from "./components/EventList";


function App() {
    const [filter, setFilter] = useState('Tutti');
    const changeHandler = (event) => {
        setFilter(event.target.value);
    };
    const visibleEvents = events;
    const visibleCount = visibleEvents.length;
    return (<>
        <header>
            <h1 class="head-title">EVENT BOARD</h1><br/><h6 class="head-stitle">Il sito degli eventi c:</h6>
        </header>
        <main>
            <EventList />
        </main>
        <footer>

        </footer>
    </>
    )
};

export default App;
