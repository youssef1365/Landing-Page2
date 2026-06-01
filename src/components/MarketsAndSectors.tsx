import React from 'react';

export default function MarketsAndSectors({ buyerProfiles, sectors }) {
  return (
    <section className="container my-section">
      <style>{`
        .markets-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: 2rem;
          padding: 3.5rem;
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.07);
          position: relative;
          overflow: hidden;
        }

        .markets-card::before {
          content: "";
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(62,155,86,0.07), transparent 70%);
          pointer-events: none;
        }

        .markets-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .markets-grid {
            grid-template-columns: 1fr 1px 1fr;
            gap: 0;
          }
        }

        .divider-col {
          display: none;
        }

        @media (min-width: 768px) {
          .divider-col {
            display: block;
            background: var(--border-color);
            margin: 0 3rem;
          }
        }

        .section-block {
          display: flex;
          flex-direction: column;
        }

        .block-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-primary);
          margin-bottom: 0.6rem;
        }

        .block-label::before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
        }

        .section-block h2 {
          font-size: 1.6rem;
          font-weight: 900;
          margin-bottom: 0.4rem;
          color: var(--text-main);
          line-height: 1.2;
        }

        .section-subtitle {
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .tag-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tag {
          padding: 0.55rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 999px;
          border: 1.5px solid var(--border-color);
          background: var(--bg-main);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          cursor: default;
          line-height: 1;
        }

        .tag:hover {
          transform: translateY(-2px);
          color: var(--text-main);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
        }

        .tag.buyer:hover {
          border-color: var(--green, #3E9B56);
          background: #f0fdf4;
        }

        .tag.sector:hover {
          border-color: var(--color-primary);
          background: #eff6ff;
        }
      `}</style>

      <div className="markets-card">
        <div className="markets-grid">

          <div className="section-block">
            <span className="block-label">Who you'll meet</span>
            <h2>Qualified Buyers</h2>
            <p className="section-subtitle">
              Decision-makers actively sourcing products in Saudi Arabia.
            </p>
            <div className="tag-grid">
              {buyerProfiles.map((profile, index) => (
                <span key={index} className="tag buyer">{profile}</span>
              ))}
            </div>
          </div>

          <div className="divider-col" />

          <div className="section-block">
            <span className="block-label">Where you fit in</span>
            <h2>Sectors Covered</h2>
            <p className="section-subtitle">
              High-growth categories with strong demand.
            </p>
            <div className="tag-grid">
              {sectors.map((sector, index) => (
                <span key={index} className="tag sector">{sector}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}