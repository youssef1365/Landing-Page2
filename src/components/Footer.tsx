import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">

      <style>
        {`
          .main-footer {
            padding: 4rem 0;
            background: var(--bg-white);
            border-top: 1px solid var(--border-color);
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: start;
          }

          @media (min-width: 900px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }

          .footer-col {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          /* LOGOS */
          .footer-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }

          .footer-logo img {
            height: 70px;
            width: auto;
            object-fit: contain;
            opacity: 0.9;
            transition: 0.2s ease;
          }

          .footer-logo img:hover {
            opacity: 1;
            transform: scale(1.05);
          }

          /* LINKS */
          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
          }

          .footer-links a {
            text-decoration: none;
            color: var(--text-secondary);
            font-size: 0.95rem;
            transition: 0.2s ease;
          }

          .footer-links a:hover {
            color: var(--color-primary);
          }

          /* CONTACT */
          .footer-contact {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }

          .footer-contact a {
            text-decoration: none;
            color: var(--text-main);
            font-weight: 600;
            font-size: 0.95rem;
          }

          .footer-contact a:hover {
            color: var(--color-primary);
          }

          .footer-title {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 800;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
          }
        `}
      </style>

      <div className="container footer-grid">

        {/* LEFT - WINK */}
        <div className="footer-col footer-logo">
          <img src="/winklogo.png" alt="WINK" />
        </div>

        {/* CENTER - GL EVENTS + LINKS */}
        <div className="footer-col footer-logo">
          <img src="/GLevents.jpeg" alt="GL Events" />

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#participants">Participants</a>
            <a href="#process">Process</a>
            <a href="#past-missions">Past Missions</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* RIGHT - EXPO + CONTACT */}
        <div className="footer-col footer-logo">
          <img src="/saudievent.png" alt="Natural World Expo Saudi" />

          <div className="footer-contact">
            <a href="mailto:winkevents@wink-consulting.com">
              winkevents@wink-consulting.com
            </a>
            <a href="tel:+212669270075">
              +212 6 69 27 00 75
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}