import React from 'react';

export default function MarketsAndSectors({ buyerProfiles, sectors }) {
  return (
    <section className="container grid-2 my-section">
      <div>
        <h2>Who You Will Meet</h2>
        <p className="section-subtitle">Qualified buyers actively sourcing products</p>
        <div className="buyer-grid">
          {buyerProfiles.map((profile, index) => (
            <div key={index} className="buyer-item">• {profile}</div>
          ))}
        </div>
      </div>

      <div>
        <h2>Sectors Covered</h2>
        <p className="section-subtitle">Dynamic and high-demand industry segments</p>
        <div className="sectors-flex">
          {sectors.map((sector, index) => (
            <span key={index} className="sector-tag">{sector}</span>
          ))}
        </div>
      </div>
    </section>
  );
}