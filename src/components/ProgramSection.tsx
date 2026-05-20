import React from 'react';

export default function ProgramSection({ program }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .section-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .section-header h2 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            color: var(--text-main);
            line-height: 1.2;
          }

          .section-header p {
            max-width: 700px;
            margin: 0 auto;
            color: var(--text-secondary);
            font-size: 1.05rem;
            line-height: 1.6;
          }

          .program-card {
            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;
            padding: 2.5rem;

            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);

            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .program-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          }

          .program-card h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            font-size: 1.15rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: var(--text-main);
          }

          .icon {
            font-size: 1.2rem;
          }

          .program-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
            padding: 0;
            margin: 0;
          }

          .program-list li {
            position: relative;
            padding-left: 1.2rem;

            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .program-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--color-primary-dark);
            font-weight: 700;
          }

          @media (min-width: 768px) {
            .grid-2 {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2rem;
            }
          }
        `}
      </style>

      <div className="section-header">
        <h2>{program.title}</h2>
        <p>{program.subtitle}</p>
      </div>

      <div className="grid-2">

        <div className="program-card">
          <h3>
            <span className="icon">🎯</span>
            You arrive with:
          </h3>

          <ul className="program-list">
            {program.deliverables.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="program-card">
          <h3>
            <span className="icon">🔍</span>
            Every buyer is selected according to:
          </h3>

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