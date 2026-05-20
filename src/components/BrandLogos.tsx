import React from 'react';

export default function BrandLogos() {
  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <img src="/winklogo.png" alt="WINK" style={styles.logoImg} />
      </div>

      <div style={styles.center}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#program" style={styles.link}>Program</a>
        <a href="#packages" style={styles.link}>Packages</a>
        <a href="#apply" style={styles.link}>Apply</a>
      </div>

      <div style={styles.right}>
        <img src="/GLevents.jpeg" alt="GL Events" style={styles.logoImgSmall} />
        <a href="#apply" style={styles.cta}>Get Access</a>
      </div>
    </div>
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
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },

  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
  },

  logoImg: {
    height: '82px',
    width: 'auto',
  },

  logoImgSmall: {
    height: '46px',
    width: 'auto',
    opacity: 0.85,
  },

  logo: {
    fontWeight: 100,
    letterSpacing: '0.08em',
    fontSize: '1rem',
    textTransform: 'uppercase',
  },

  logoSmall: {
    fontWeight: 800,
    fontSize: '0.85rem',
    opacity: 0.8,
    textTransform: 'uppercase',
  },

  link: {
    textDecoration: 'none',
    color: '#0f172a',
    fontWeight: 600,
    fontSize: '0.95rem',
    opacity: 0.8,
  },

  cta: {
    background: '#6366f1',
    color: 'white',
    padding: '0.6rem 1rem',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '0.85rem',
  },
};