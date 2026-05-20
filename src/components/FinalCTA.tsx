import React from 'react';

export default function FinalCTA({ event }) {
  return (
    <section className="final-cta">
      <div className="cta-wrapper">
        <h2>Secure Your Place at {event.name} {event.year}</h2>
        <p>Limited company slots available. Apply now and our team will contact you within 48 hours.</p>
        <a href="#apply" className="btn btn-primary">Apply Now</a>
      </div>
    </section>
  );
}