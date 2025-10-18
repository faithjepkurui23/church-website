import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import AvatarTopRight from "../components/AvatarTopRight";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-page">
      {/* Avatar in top-right corner */}
      <AvatarTopRight />

      <h1>Upcoming Events</h1>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading events...</p>
      ) : events.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>No upcoming events.</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={`${event.description || "Join us for worship"} | Date: ${event.date}`}
              image={event.image || "https://via.placeholder.com/400x200"}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
