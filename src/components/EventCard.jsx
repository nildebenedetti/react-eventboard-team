function EventCard(event) {
    const { title, date, category, status } = event;


  return <>
  <div className="card">
        <h2 className="card-title fw-bold">${title}</h2>
        <div className="card-body">
            <p className="date fw-3 py-3"><span>Date:</span>${date}</p>
            <p className="category fw-3 py-3"><span>Category</span>${category}</p>
        </div>
  </div>
  </>
}
export default EventCard;