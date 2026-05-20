import React from 'react';

export default function ProgramSection({ program }) {
  return (
    <section className="program-section">

      <style>
        {`
          .program-section {
            padding: 6rem 0;
            background: linear-gradient(to bottom, var(--bg-white), var(--bg-main));
          }

          /* HEADER */
          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }

          .section-header h2 {
            font-size: 2.4rem;
            font-weight: 900;
            color: var(--text-main);
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }

          .section-header p {
            max-width: 720px;
            margin: 0 auto;
            color: var(--text-secondary);
            font-size: 1.05rem;
            line-height: 1.7;
          }

          /* GRID */
          .program-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          @media (min-width: 900px) {
            .program-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* CARD (more minimal, less heavy) */
          .program-card {
            padding: 2.5rem;
            border-radius: 1.5rem;

            background: var(--bg-white);
            border: 1px solid var(--border-color);

            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.04);

            transition: all 0.25s ease;
          }

          .program-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
          }

          .program-card h3 {
            display: flex;
            align-items: center;
            gap: 0.6rem;

            font-size: 1.2rem;
            font-weight: 800;
            color: var(--text-main);

            margin-bottom: 1.75rem;
          }

          .icon {
            font-size: 1.3rem;
          }

          .program-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .program-list li {
            position: relative;
            padding-left: 1.5rem;
            font-weight: 700;
            font-size: 1.05rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .program-list li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.55rem;

            width: 7px;
            height: 7px;
            border-radius: 50%;

            background: linear-gradient(135deg, #98D76D, #3E9B56);
          }
        `}
      </style>

      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <h2>{program.title}</h2>
          <p>{program.subtitle}</p>
        </div>

        {/* CONTENT */}
        <div className="program-grid">

          <div className="program-card">
            <h3>
              <span className="icon">🎯</span>
              You arrive with
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
              Buyer selection criteria
            </h3>

            <ul className="program-list">
              {program.criteria.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}