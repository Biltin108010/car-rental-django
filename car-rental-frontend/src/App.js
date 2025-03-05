import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bookings/')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
