import React, { useEffect, useState } from 'react';

function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/sermons') // 👈 must match your backend URL
      .then(response => response.json())
      .then(data => {
        setSermons(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sermons:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading sermons...</p>;

  return (
    <div>
      <h2>Sermons</h2>
      <ul>
        {sermons.map(sermon => (
          <li key={sermon.id}>
            {sermon.title} - {sermon.preacher} ({sermon.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sermons;
