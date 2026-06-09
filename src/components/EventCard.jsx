
function EventCard(event) {

    const { title, date, category, status } = event;
    const isOpen = status === 'aperto' || status === 'chiuso';

    return <>
        <div className="card">
            <h2 className="card-title fw-bold">${title}<span class={`badge ${isOpen ? 'bg-success' : 'bg-danger'}`}>{isOpen ? 'Aperto' : 'Chiuso'}</span></h2>
            <div className="card-body">
                <p className="date fw-3 py-3"><span>Date:</span>${date}</p>
                <p className="category fw-3 py-3"><span>Category:</span>${category}</p>
                <p className="category fw-3 py-3"><span>Status:</span>${status}</p>
            </div>
        </div>
    </>
}
export default EventCard;