import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import './Sermons.css';

function Sermons() {
  return (
    <>
      <Header />
      <section className="sermons-section">
        <h1>Latest Sermons</h1>
        <div className="sermons-grid">
          <Card 
            title="Faith Over Fear" 
            description="A sermon about trusting God in difficult times."
            image="https://via.placeholder.com/400x200"
          />
          <Card 
            title="Power of Prayer" 
            description="Discover how prayer changes everything."
            image="https://via.placeholder.com/400x200"
          />
          <Card 
            title="Love One Another" 
            description="Living in love as a body of Christ."
            image="https://via.placeholder.com/400x200"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sermons;
