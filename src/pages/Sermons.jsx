import React, { useEffect, useState } from 'react';
import Avatar from '../components/AvatarTopRight'; // your existing avatar component
import './Sermons.css';

function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/sermons')
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
    <div className="sermons-page">
      {/* Avatar positioned top-right */}
      <div className="sermons-avatar-wrapper">
        <Avatar />
      </div>

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

