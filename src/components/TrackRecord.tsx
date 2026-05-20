import React from 'react';

export default function TrackRecord({ trackRecord }) {
  return (
    <section className="container my-section">
      <div className="track-layout">
        <div className="why-join-content">
          <div>
            <h2>Why Brands Choose WINK</h2>
            <p className="section-subtitle">More than exhibition participation — generate real business opportunities.</p>
          </div>
          <div className="grid-2 gap-small">
            <div>
              <h4>Targeted meetings</h4>
              <p className="body-sm">Every discussion is aligned with your expansion goals.</p>
            </div>
            <div>
              <h4>Qualified decision-makers</h4>
              <p className="body-sm">Meet buyers actively sourcing products.</p>
            </div>
          </div>
        </div>

        <div className="track-record-card">
          <h3 className="track-title">WINK Track Record</h3>
          <hr className="card-shadow-native" />
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