import React from 'react';

export default function MarketsAndSectors({ buyerProfiles, sectors }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .markets-card {
            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;
            padding: 3rem;

            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
          }

          .markets-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          @media (min-width: 768px) {
            .markets-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          .section-block h2 {
            font-size: 1.8rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
            color: var(--text-main);
          }

          .section-subtitle {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.6;
          }

          /* TAG SYSTEM (shared style) */
          .tag-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .tag {
            padding: 0.6rem 0.9rem;

            font-size: 0.85rem;
            font-weight: 700;

            border-radius: 999px;

            border: 1px solid var(--border-color);
            background: var(--bg-main);

            color: var(--text-secondary);

            transition: all 0.2s ease;
            cursor: default;
          }

          .tag:hover {
            transform: translateY(-2px);
            border-color: var(--color-primary);
            color: var(--text-main);
            background: #f8fafc;
          }

          /* Optional subtle differentiation */
          .tag.buyer {
            background: linear-gradient(to right, #f0fdf4, #ffffff);
          }

          .tag.sector {
            background: linear-gradient(to right, #eff6ff, #ffffff);
          }
        `}
      </style>

      <div className="markets-card">

        <div className="markets-grid">

          {/* BUYERS */}
          <div className="section-block">
            <h2>Qualified Buyers</h2>
            <p className="section-subtitle">
              Decision-makers actively sourcing products in Saudi Arabia.
            </p>

            <div className="tag-grid">
              {buyerProfiles.map((profile, index) => (
                <span key={index} className="tag buyer">
                  {profile}
                </span>
              ))}
            </div>
          </div>

          {/* SECTORS */}
          <div className="section-block">
            <h2>Sectors Covered</h2>
            <p className="section-subtitle">
              High-growth categories with strong demand.
            </p>

            <div className="tag-grid">
              {sectors.map((sector, index) => (
                <span key={index} className="tag sector">
                  {sector}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}