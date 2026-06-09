import { events } from "./data/events";

function App() {
  const visibleEvents = events;
  const visibleCount = visibleEvents.length;

  return (
    <main>
      <p>Eventi trovati: {visibleCount}</p>

      {/*lista eventi*/}

      <ul>
        {visibleEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App
