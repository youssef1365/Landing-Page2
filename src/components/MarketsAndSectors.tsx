import React from 'react';

export default function MarketsAndSectors({ buyerProfiles, sectors }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .markets-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          @media (min-width: 768px) {
            .markets-grid {
              grid-template-columns: repeat(2, 1fr);
              align-items: start;
            }
          }

          .section-block h2 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 0.75rem;
            color: var(--text-main);
          }

          .section-subtitle {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.6;
          }

          /* BUYERS */
          .buyer-grid {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .buyer-item {
            padding: 1rem 1.25rem;

            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1rem;

            font-size: 0.95rem;
            color: var(--text-secondary);

            transition: all 0.2s ease;
          }

          .buyer-item:hover {
            transform: translateX(4px);
            border-color: var(--color-primary);
            color: var(--text-main);
          }

          /* SECTORS */
          .sectors-flex {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .sector-tag {
            padding: 0.55rem 0.9rem;

            font-size: 0.85rem;
            font-weight: 600;

            border-radius: 999px;

            background: var(--bg-white);
            border: 1px solid var(--border-color);

            color: var(--text-secondary);

            transition: all 0.2s ease;
          }

          .sector-tag:hover {
            background: var(--bg-main);
            border-color: var(--color-primary);
            color: var(--text-main);
            transform: translateY(-2px);
          }
        `}
      </style>

      <div className="markets-grid">

        {/* BUYERS */}
        <div className="section-block">
          <h2>Who You Will Meet</h2>
          <p className="section-subtitle">
            Qualified buyers actively sourcing products
          </p>

          <div className="buyer-grid">
            {buyerProfiles.map((profile, index) => (
              <div key={index} className="buyer-item">
                {profile}
              </div>
            ))}
          </div>
        </div>

        {/* SECTORS */}
        <div className="section-block">
          <h2>Sectors Covered</h2>
          <p className="section-subtitle">
            Dynamic and high-demand industry segments
          </p>

          <div className="sectors-flex">
            {sectors.map((sector, index) => (
              <span key={index} className="sector-tag">
                {sector}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}