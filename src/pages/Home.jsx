import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import AvatarTopRight from "../components/AvatarTopRight";
import "./Home.css";

function Home() {
  const [sermons, setSermons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [greeting, setGreeting] = useState(null);

  // Fetch sermons dynamically
  useEffect(() => {
    fetch("http://localhost:5000/api/sermons")
      .then(res => res.json())
      .then(data => setSermons(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form input
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Join Us form
  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/events/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (res.ok) {
        // Save user in localStorage
        localStorage.setItem("churchUser", JSON.stringify(data.user));

        // Set the vibrant greeting below hero
        setGreeting(
          <div className="vibrant-greeting">
            Welcome <span className="user-name">{data.user.name}</span> to our church where we live in love and unity ✨💒
          </div>
        );

        setShowModal(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error creating profile.");
    }
  };

  return (
    <>
      {/* Avatar top-right only */}
      <AvatarTopRight />

      <section className="home-hero">
        <div className="hero-content">
          <h1>Welcome to Our Church</h1>
          <p>“A place of love, faith, and community.”</p>
          <button onClick={() => setShowModal(true)}>Join Us This Sunday</button>
        </div>
      </section>

      {/* Greeting below hero */}
      {greeting}

      <section className="home-cards">
        {sermons.map(s => (
          <Card
            key={s.id}
            title={s.title}
            description={`Preacher: ${s.preacher}`}
            image="https://via.placeholder.com/400x200"
          />
        ))}
      </section>

      {/* Modal Form */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Join Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
