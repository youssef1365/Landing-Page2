import React, { useState } from 'react';

export default function BrandLogos() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div style={styles.navbar}>
        <div style={styles.left}>
          <img src="/WinkBlue.png" alt="WINK" style={styles.logoImg} />
          <img src="/GLevents.jpeg" alt="GL Events" style={styles.logoImgSmall} />
        </div>

        {/* Desktop nav */}
        <div style={styles.center}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#program" style={styles.link}>Program</a>
          <a href="#packages" style={styles.link}>Packages</a>
          <a href="#apply" style={styles.link}>Apply</a>
        </div>

        <div style={styles.right}>
          <a href="#apply" style={styles.cta}>Get Access</a>
          {/* Hamburger button — mobile only */}
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ ...styles.bar, ...(menuOpen ? styles.barTop : {}) }} />
            <span style={{ ...styles.bar, ...(menuOpen ? styles.barMid : {}) }} />
            <span style={{ ...styles.bar, ...(menuOpen ? styles.barBot : {}) }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div style={{ ...styles.mobileMenu, ...(menuOpen ? styles.mobileMenuOpen : {}) }}>
        {['#home', '#program', '#packages', '#apply'].map((href, i) => (

            key={href}
            href={href}
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {['Home', 'Program', 'Packages', 'Apply'][i]}
          </a>
        ))}
        <a href="#apply" style={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Get Access
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    height: '80px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
    boxSizing: 'border-box',
  },

  left: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },

  center: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    // Hidden on mobile via <style> tag above
  },

  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
  },

  logoImg: {
    height: '62px',
    width: 'auto',
  },

  logoImgSmall: {
    height: '46px',
    width: 'auto',
    opacity: 0.85,
  },

  link: {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: 600,
    fontSize: '0.95rem',
    opacity: 0.8,
  },

  cta: {
    background: 'var(--accent)',
    color: 'white',
    padding: '0.6rem 1rem',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '0.85rem',
  },

  // ── Hamburger button ──
  hamburger: {
    display: 'none', // shown via media query in <style>
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    width: '36px',
    height: '36px',
    ['@media (max-width: 767px)']: { display: 'flex' },
  },

  bar: {
    display: 'block',
    width: '22px',
    height: '2px',
    background: '#0f172a',
    borderRadius: '2px',
    transition: 'transform 0.25s ease, opacity 0.25s ease',
    transformOrigin: 'center',
  },

  barTop: { transform: 'translateY(7px) rotate(45deg)' },
  barMid: { opacity: 0, transform: 'scaleX(0)' },
  barBot: { transform: 'translateY(-7px) rotate(-45deg)' },

  // ── Mobile dropdown ──
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100%',
    zIndex: 999,
    background: 'rgba(255,255,255,0.97)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(15,23,42,0.08)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 2rem',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.35s ease, padding 0.35s ease',
  },

  mobileMenuOpen: {
    maxHeight: '400px',
    padding: '1.25rem 2rem 1.5rem',
  },

  mobileLink: {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: 600,
    fontSize: '1.05rem',
    padding: '0.75rem 0',
    borderBottom: '1px solid rgba(15,23,42,0.06)',
    opacity: 0.85,
  },

  mobileCta: {
    display: 'inline-block',
    marginTop: '1rem',
    background: 'var(--accent)',
    color: 'white',
    padding: '0.7rem 1.5rem',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '0.95rem',
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
};