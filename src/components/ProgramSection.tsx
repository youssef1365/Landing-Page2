import React from 'react';

export default function ProgramSection({ program }) {
  return (
    <section className="container my-section">
      <div className="section-header">
        <h2>{program.title}</h2>
        <p>{program.subtitle}</p>
      </div>

      <div className="grid-2">
        <div className="program-card agenda-card">
          <h3><span className="icon">🎯</span> You arrive with:</h3>
          <ul className="program-list">
            {program.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="program-card criteria-card">
          <h3><span className="icon">🔍</span> Every buyer is selected according to:</h3>
          <ul className="program-list">
            {program.criteria.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}