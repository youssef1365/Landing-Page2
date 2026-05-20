import React from 'react';

export default function EventSection({ event }) {
  return (
    <section className="container my-section">
      <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: '1.5rem', padding: '3rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-orange)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
          Event Overview
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--color-charcoal)' }}>
          {event.name}
        </h2>
        <p style={{ color: '#334155', fontSize: '1.125rem', marginBottom: '1rem', lineHeight: '1.6' }}>
          {event.description}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
          {event.subDescription}
        </p>
      </div>
    </section>
  );
}