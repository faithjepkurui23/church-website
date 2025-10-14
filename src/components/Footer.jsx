import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h4>Church Name</h4>
          <p>“Reaching souls, spreading love, and growing together in Christ.”</p>
        </div>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
          <a href="/sermons">Sermons</a>
        </div>

        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Church Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
