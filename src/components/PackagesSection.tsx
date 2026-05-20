import React from 'react';
import PackageCard from './PackageCard.jsx';

export default function PackagesSection({ packages }) {
  return (
    <section className="packages-section">
      <style>
        {`
          .packages-section {
            padding: 6rem 0;
            background: var(--bg-main);
          }

          .packages-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .packages-header h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 0.75rem;
          }

          .packages-header p {
            color: var(--text-secondary);
            max-width: 650px;
            margin: 0 auto;
          }

          .packages-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .packages-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>

      <div className="container">

        <div className="packages-header">
          <h2>Choose Your Participation Package</h2>
          <p>Select the package that best fits your market entry strategy and business goals.</p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

      </div>
    </section>
  );
}