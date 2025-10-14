import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <section className="home-hero">
        <div className="hero-content">
          <h1>Welcome to Our Church</h1>
          <p>“A place of love, faith, and community.”</p>
          <button>Join Us This Sunday</button>
        </div>
      </section>

      <section className="home-cards">
        <Card 
          title="Sermons" 
          description="Listen to our inspiring weekly sermons." 
          image="https://via.placeholder.com/400x200"
        />
        <Card 
          title="Upcoming Events" 
          description="Join us for worship, outreach, and fellowship." 
          image="https://via.placeholder.com/400x200"
        />
        <Card 
          title="About Us" 
          description="Get to know our vision and mission as a church." 
          image="https://via.placeholder.com/400x200"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
