import React from 'react';

export default function TrackRecord({ trackRecord }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .track-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          @media (min-width: 900px) {
            .track-layout {
              grid-template-columns: 1.2fr 0.8fr;
              align-items: start;
            }
          }

          /* LEFT SIDE */
          .why-join h2 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            color: var(--text-main);
          }

          .why-join p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .why-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .why-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .why-item {
            padding: 1.5rem;
            border-radius: 1.25rem;

            background: var(--bg-white);
            border: 1px solid var(--border-color);

            transition: all 0.2s ease;
          }

          .why-item:hover {
            transform: translateY(-4px);
            border-color: var(--color-primary);
          }

          .why-item h4 {
            font-size: 1rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: var(--text-main);
          }

          .why-item p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin: 0;
          }

          /* RIGHT SIDE (STATS) */
          .track-card {
            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;

            padding: 2.5rem;

            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          }

          .track-title {
            font-size: 1.2rem;
            font-weight: 800;
            margin-bottom: 1rem;
            color: var(--text-main);
          }

          .stats-stack {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            margin-top: 1.5rem;
          }

          .stat-item {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
          }

          .stat-item:last-child {
            border-bottom: none;
          }

          .stat-metric {
            font-size: 1.6rem;
            font-weight: 900;
            color: var(--color-primary);
            line-height: 1.2;
          }

          .stat-label {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-top: 0.25rem;
          }
        `}
      </style>

      <div className="track-layout">

        {/* LEFT SIDE */}
        <div className="why-join">

          <div>
            <h2>Why Brands Choose WINK</h2>
            <p>
              More than exhibition participation — generate real business opportunities.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-item">
              <h4>Targeted meetings</h4>
              <p>Every discussion is aligned with your expansion goals.</p>
            </div>

            <div className="why-item">
              <h4>Qualified decision-makers</h4>
              <p>Meet buyers actively sourcing products.</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="track-card">

          <h3 className="track-title">WINK Track Record</h3>

          <div className="stats-stack">
            {trackRecord.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-metric">{stat.metric}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}