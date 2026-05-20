import React from 'react';
import PackageCard from './PackageCard.jsx';

export default function PackagesSection({ packages }) {
  return (
    <section className="packages-section">
      <div className="container">
        <h2 className="section-title">Choose Your Participation Package</h2>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}