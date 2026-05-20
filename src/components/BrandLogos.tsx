import React from 'react';

export default function BrandLogos() {
  return (
    <div style={styles.containerFlex}>
      <div style={styles.logo}>WINK Logo</div>
      <div style={styles.logoCenter}>GL Events Logo</div>
      <div style={styles.logo}>Natural World Expo Saudi Logo</div>
    </div>
  );
}

const styles = {
  containerFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '1.5rem',
  },
  logo: {
    fontWeight: 900,
    letterSpacing: '0.05em',
    color: '#1e293b',
    fontSize: '1rem',
    textTransform: 'uppercase',
  },
  logoCenter: {
    fontWeight: 900,
    letterSpacing: '0.05em',
    color: '#1e293b',
    fontSize: '1rem',
    textTransform: 'uppercase',
    textAlign: 'center',
  }
};