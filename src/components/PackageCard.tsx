import React from 'react';

export default function PackageCard({ pkg }) {
  // Developer UI Notes applied programmatically based on configuration flag
  const cardStyle = pkg.isPopular ? styles.cardPopular : styles.cardStandard;
  const taglineStyle = pkg.isPopular ? styles.taglinePopular : styles.taglineStandard;
  const dividerStyle = pkg.isPopular ? styles.dividerPopular : styles.dividerStandard;
  const checkStyle = pkg.isPopular ? styles.checkPopular : styles.checkStandard;

  return (
    <div style={{ ...styles.cardBase, ...cardStyle }}>
      <div>
        {pkg.isPopular && <span style={styles.badgePopular}>Most Popular</span>}
        <h3 style={styles.packageName}>{pkg.name}</h3>
        <p style={{ ...styles.packageTagline, ...taglineStyle }}>{pkg.tagline}</p>

        <hr style={{ ...styles.cardDivider, ...dividerStyle }} />

        <ul style={styles.featureList}>
          {pkg.features.map((feature, idx) => (
            <li key={idx} style={styles.featureItem}>
              <span style={checkStyle}>✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      {pkg.note && (
        <p style={styles.packageNote}>
          {pkg.note}
        </p>
      )}
    </div>
  );
}

const styles = {
  cardBase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    borderRadius: '1rem',
    border: '1px solid',
    transition: 'all 0.3s ease',
  },
  cardStandard: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
    color: '#0f172a',
  },
  cardPopular: {
    backgroundColor: '#1e1b4b',
    borderColor: '#312e81',
    color: '#ffffff',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
  },
  badgePopular: {
    display: 'inline-block',
    backgroundColor: '#10b981',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    marginBottom: '1rem',
    width: 'max-content',
  },
  packageName: {
    fontSize: '1.15rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  packageTagline: {
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  },
  taglineStandard: { color: '#64748b' },
  taglinePopular: { color: '#c7d2fe' },
  cardDivider: {
    margin: '1rem 0',
    border: 0,
    height: '1px',
  },
  dividerStandard: { backgroundColor: '#f1f5f9' },
  dividerPopular: { backgroundColor: '#312e81' },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '0.875rem',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'flex-start',
  },
  checkStandard: { color: '#059669', fontWeight: 'bold' },
  checkPopular: { color: '#34d399', fontWeight: 'bold' },
  packageNote: {
    fontSize: '0.75rem',
    fontStyle: 'italic',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    marginTop: '1.5rem',
    backgroundColor: '#f8fafc',
    color: '#64748b',
  },
};