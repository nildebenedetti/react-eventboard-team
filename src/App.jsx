
import { useState } from "react"
import { events } from "./data/events";

function App() {
    const [filter, setFilter] = useState('Tutti');
    const changeHandler = (event) => {
        setFilter(event.target.value);
    };
    const visibleEvents = events;
  const visibleCount = visibleEvents.length;
    return ( <>
        <header>
            
        </header>
        <main>
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

      <ul>
        {visibleEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
        </main>
        <footer>
            
        </footer>
    </>     
    )};

   

}

export default App;
