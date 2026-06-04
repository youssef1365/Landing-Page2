import React from 'react';
import '../global.css';

const heroStyles = `
  .hero {
    position: relative;
    padding: 8rem 0 6rem;
    min-height: 750px;
    overflow: hidden;
    background-image: url("/img.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        105deg,
        rgba(10, 40, 20, 0.82) 0%,
        rgba(10, 40, 20, 0.55) 50%,
        rgba(10, 40, 20, 0.2) 100%
      );
      pointer-events: none;
      z-index: 1;
    }

    .hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5) 0%,
        transparent 45%
      );
      pointer-events: none;
      z-index: 1;
    }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 920px;
    margin-left: 6%;
    margin-right: auto;
    text-align: left;
    padding: 0 1.5rem;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0.6rem 1rem;
    border-radius: 999px;
    background: var(--green-light);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .hero-title {
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
    color: #ffffff;
  }

  .hero-text {
    max-width: 720px;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
  }

  .hero-subtext {
    max-width: 680px;
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
  }

  .btn-primary {
    display: inline-block;
    padding: 0.85rem 2rem;
    border-radius: 999px;
    background: var(--green-light);
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .hero-content {
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export default function Hero() {
  return (
    <>
      <style>{heroStyles}</style>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            Saudi Natural Products Market Entry Program
          </span>

          <h1 className="hero-title section-title">
            Access Saudi Arabia Through Qualified Buyer Meetings
          </h1>

          <p className="hero-text">
            Meet qualified buyers from Saudi Arabia through structured,
            high-impact B2B meetings designed to help international brands enter
            one of the GCC's fastest-growing natural products markets.
          </p>

          <p className="hero-subtext">
            WINK Consulting, in partnership with GL Events, helps international
            brands maximize exhibition participation through strategic buyer
            access and targeted business development.
          </p>

          <a href="#apply" className="btn-primary">
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}