import React from 'react';
import '../global.css';

export default function Hero() {
  return (
    <>
      <style>
      {`
        .hero {
          padding: 8rem 0 6rem;
          background: linear-gradient(to bottom, var(--bg-main), #eef2ff);
          height: 750px;
        }

        .hero-content {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          padding: 0 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;

          margin-bottom: 1.5rem;
          padding: 0.6rem 1rem;

          border-radius: 999px;
          background: var(--bg-white);
          border: 1px solid var(--border-color);

          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.02em;

          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
        }

        .hero-title {
          margin-bottom: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .hero-text {
          max-width: 720px;
          margin: 0 auto 1.25rem;
          font-size: 1.3rem;
          line-height: 1.7;
          color: var(--text-main);
          opacity: 0.85;
        }

        .hero-subtext {
          max-width: 680px;
          margin: 0 auto 2.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          opacity: 0.9;
        }

        /* BUTTON spacing fix */
        .hero a.btn {
          margin-top: 0.5rem;
        }

        /* META SECTION */
        .hero-meta {
          margin-top: 4rem;
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-meta {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* CARDS */
        .hero-card {
          padding: 1.75rem;
          text-align: left;

          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;

          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);

          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
        }

        .hero-card span {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .hero-card strong {
          font-size: 1.05rem;
          line-height: 1.5;
          color: var(--text-main);
        }
      `}
      </style>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            Saudi Natural Products Market Entry Program
          </span>

          <h1 className="hero-title section-title">
            Access Saudi Arabia Through Qualified Buyer Meetings
          </h1>

          <p className="hero-text section-text">
            Meet qualified buyers from Saudi Arabia through structured,
            high-impact B2B meetings designed to help international brands enter
            one of the GCC’s fastest-growing natural products markets.
          </p>

          <p className="hero-subtext">
            WINK Consulting, in partnership with GL Events, helps international
            brands maximize exhibition participation through strategic buyer
            access and targeted business development.
          </p>

          <a href="#apply" className="btn btn-primary">
            Apply Now
          </a>


        </div>
      </section>
    </>
  );
}