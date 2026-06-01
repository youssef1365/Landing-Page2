import React from 'react';
import '../global.css';

const heroStyles = `
  .hero {
    position: relative;
    padding: 8rem 0 6rem;
    background: var(--bg-main);
    min-height: 750px;
    overflow: hidden;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/saudi-nobg1.png");
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 520px;
    opacity: 0.82;
    pointer-events: none;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at right center,
      transparent 35%,
      rgba(255, 255, 255, 0.35)
    );
    pointer-events: none;
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
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 0.85rem;
  }

  .hero-title {
    margin-bottom: 1.5rem;
    font-weight: 800;
    line-height: 1.1;
  }

  .hero-text {
    max-width: 720px;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--text-main);
    opacity: 0.9;
  }

  .hero-subtext {
    max-width: 680px;
    margin-bottom: 2.5rem;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--text-main);
  }

  .btn-primary {
      display: inline-block;
      padding: 0.85rem 2rem;
      border-radius: 999px;
      background: var(--green-light);
      color: var(--bg-white);
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

    .hero::before {
      background-position: center top;
      background-size: 320px;
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

          <p className="hero-text section-text">
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