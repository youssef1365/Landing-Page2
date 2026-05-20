import React from 'react';

export default function StepsSection({ steps }) {
  return (
    <section className="dark-section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="grid-3">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}