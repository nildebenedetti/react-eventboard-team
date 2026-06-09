import { useState } from "react"

function App() {
    const [filter, setFilter] = useState('Tutti');
    const changeHandler = (event) => {
        setFilter(event.target.value);
    };
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
        </main>
        <footer>
            
        </footer>
    </>     
    )};

   
}

export default App;
