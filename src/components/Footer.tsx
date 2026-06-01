import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <style>{`
        .main-footer {
          padding: 4rem 0;
          background: var(--bg-white);
          border-top: 1px solid var(--border-color);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.2rem;
        }

        .footer-logo-box {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 70px;
        }

        .footer-logo-box img {
          max-height: 70px;
          width: auto;
          object-fit: contain;
          opacity: 0.9;
          transition: 0.2s ease;
        }

        .footer-logo-box img:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        .footer-divider {
          width: 40px;
          height: 2px;
          background: var(--wink-accent);
          border-radius: 999px;
          opacity: 0.4;
        }

        .footer-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
          color: var(--text-secondary);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--wink-accent);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer-contact a {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: 0.2s ease;
        }

        .footer-contact a:hover {
          color: var(--wink-accent);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>

      <div className="container">
        <div className="footer-grid">

          {/* WINK */}
          <div className="footer-col">
            <div className="footer-logo-box">
              <img src="/WinkBlue.png" alt="WINK" />
            </div>
            <div className="footer-divider" />
            <span className="footer-label">B2B Matchmaking & Meetings Agency</span>
            <div className="footer-contact">
              <a href="mailto:winkevents@wink-consulting.com">winkevents@wink-consulting.com</a>
              <a href="tel:+212669270075">+212 6 69 27 00 75</a>
            </div>
          </div>

          {/* GL EVENTS */}
          <div className="footer-col">
            <div className="footer-logo-box">
              <img src="/GLevents.jpeg" alt="GL Events" />
            </div>
            <div className="footer-divider" />
            <span className="footer-label">Event Organiser</span>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#program">Program</a>
              <a href="#packages">Packages</a>
              <a href="#apply">Apply</a>
            </div>
          </div>

          {/* NATURAL WORLD EXPO SAUDI */}
          <div className="footer-col">
            <div className="footer-logo-box">
              <img src="/saudievent.png" alt="Natural World Expo Saudi" />
            </div>
            <div className="footer-divider" />
            <span className="footer-label">Natural World Expo Saudi</span>
            <div className="footer-contact">
              <a href="https://www.google.com/maps/search/?api=1&query=Riyadh+Front+Exhibition+%26+Conference+Center" target="_blank" rel="noopener noreferrer">
                Riyadh Front Exhibition & Conference Center
              </a>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>14–16 December 2026</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 WINK — B2B Matchmaking & Meetings Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}