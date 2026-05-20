import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" style={{ padding: '3.5rem 1rem' }}>
      <div className="hero-container">
        <span className="badge-hero">Saudi Natural Products Market Entry Program</span>
        <h1>Access Saudi Arabia Through Qualified Buyer Meetings</h1>
        <p className="hero-lead">
          Meet qualified buyers from Saudi Arabia through structured, high-impact B2B meetings
          designed to help international brands enter one of the GCC’s fastest-growing natural products markets.
        </p>
        <p className="hero-subtext" style={{ marginBottom: '1.5rem' }}>
          WINK Consulting, in partnership with GL Events, helps international brands maximize
          exhibition participation through strategic buyer access and targeted business development.
        </p>
        <a href="#apply" className="btn btn-primary">Apply Now</a>

        {/* Two-Column Meta Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginTop: '2.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>Date</span>
            <strong style={{ fontSize: '1.125rem', color: 'var(--color-orange)' }}>14–16 December 2026</strong>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>Where</span>
            <strong style={{ fontSize: '1.125rem', color: '#ffffff' }}>Riyadh Front Exhibition & Conference Center</strong>
          </div>
        </div>
      </div>
    </section>
  );
}