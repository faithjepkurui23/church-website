import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <>
      <Header />
      <section className="about-section">
        <h1>About Our Church</h1>
        <p>
          We are a community of believers committed to sharing God’s love and 
          transforming lives through the Gospel of Jesus Christ.
        </p>
        <p>
          Our vision is to build a strong spiritual foundation and reach out to 
          the world with hope, faith, and compassion.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default About;
