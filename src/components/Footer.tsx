import React from 'react';
import BrandLogos from './BrandLogos.jsx';

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

          .footer-inner {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }

          .footer-logos {
            display: flex;
            justify-content: center;
          }

          .footer-links-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .footer-links-row {
              grid-template-columns: 2fr 1fr;
              text-align: left;
              align-items: start;
            }
          }

          .footer-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .footer-links {
              justify-content: flex-start;
            }
          }

          .footer-links a {
            text-decoration: none;
            font-size: 0.95rem;
            color: var(--text-secondary);
            font-weight: 500;
            transition: 0.2s ease;
          }

          .footer-links a:hover {
            color: var(--color-primary);
          }

          .footer-contacts {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            font-size: 0.9rem;
          }

          .footer-contacts a {
            color: var(--text-main);
            text-decoration: none;
            font-weight: 600;
          }

          .footer-contacts a:hover {
            color: var(--color-primary);
          }
        `}
      </style>

      <div className="container footer-inner">

        {/* LOGOS */}
        <div className="footer-logos">
          <BrandLogos />
        </div>

        {/* LINKS + CONTACT */}
        <div className="footer-links-row">

          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#program">Program</a>
            <a href="#packages">Packages</a>
            <a href="#apply">Apply</a>
            <a href="#track-record">Track Record</a>
          </div>

          <div className="footer-contacts">
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