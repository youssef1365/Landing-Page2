import React, { useState } from 'react';

export default function BrandLogos() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          height: 80px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          box-sizing: border-box;
        }

        .nav-left {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-center {
          flex: 2;
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .nav-right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1rem;
        }

        .nav-logo-main {
          height: 62px;
          width: auto;
        }

        .nav-logo-small {
          height: 46px;
          width: auto;
          opacity: 0.85;
        }

        .nav-link {
          text-decoration: none;
          color: #0f172a;
          font-weight: 600;
          font-size: 0.95rem;
          opacity: 0.8;
          transition: opacity 0.2s ease;
        }

        .nav-link:hover {
          opacity: 1;
        }

        .nav-cta {
          background: var(--accent);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.85rem;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .nav-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          width: 36px;
          height: 36px;
        }

        .nav-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #0f172a;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
          transform-origin: center;
        }

        .nav-bar-top-open  { transform: translateY(7px) rotate(45deg); }
        .nav-bar-mid-open  { opacity: 0; transform: scaleX(0); }
        .nav-bar-bot-open  { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile dropdown */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          z-index: 999;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 2rem;
          box-sizing: border-box;
        }

        .mobile-menu.open {
          max-height: 400px;
          padding: 1.25rem 2rem 1.5rem;
        }

        .mobile-link {
          text-decoration: none;
          color: #0f172a;
          font-weight: 600;
          font-size: 1.05rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .mobile-link:last-of-type {
          border-bottom: none;
        }

        .mobile-link:hover {
          opacity: 1;
        }

        .mobile-cta {
          display: inline-block;
          margin-top: 1rem;
          background: var(--accent);
          color: white;
          padding: 0.7rem 1.5rem;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          align-self: flex-start;
          transition: opacity 0.2s ease;
        }

        .mobile-cta:hover {
          opacity: 0.88;
        }

        @media (max-width: 767px) {
          .nav-center  { display: none; }
          .nav-cta     { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-left">
          <img src="/WinkBlue.png" alt="WINK" className="nav-logo-main" />
          <img src="/GLevents.jpeg" alt="GL Events" className="nav-logo-small" />
        </div>

        <div className="nav-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#program" className="nav-link">Program</a>
          <a href="#packages" className="nav-link">Packages</a>
          <a href="#apply" className="nav-link">Apply</a>
        </div>

        <div className="nav-right">
          <a href="#apply" className="nav-cta">Get Access</a>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`nav-bar ${menuOpen ? 'nav-bar-top-open' : ''}`} />
            <span className={`nav-bar ${menuOpen ? 'nav-bar-mid-open' : ''}`} />
            <span className={`nav-bar ${menuOpen ? 'nav-bar-bot-open' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {[
          { href: '#home',     label: 'Home' },
          { href: '#program',  label: 'Program' },
          { href: '#packages', label: 'Packages' },
          { href: '#apply',    label: 'Apply' },
        ].map(({ href, label }) => (

            key={href}
            href={href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href="#apply" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Access
        </a>
      </div>
    </>
  );
}