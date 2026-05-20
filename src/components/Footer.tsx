import React from 'react';
import BrandLogos from './BrandLogos.jsx';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container space-stack">
        <div className="footer-logos">
          <BrandLogos />
        </div>

        <div className="footer-links-row">
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Participants</a>
            <a href="#">Process</a>
            <a href="#">Past Missions</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-contacts">
            <p><a href="mailto:winkevents@wink-consulting.com">winkevents@wink-consulting.com</a></p>
            <p><a href="tel:+212669270075">+212 6 69 27 00 75</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}