import React from 'react';

export default function PackageCard({ pkg }) {
  return (
    <div className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>

      <style>
        {`
          .package-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            padding: 2.5rem;
            border-radius: 1.5rem;

            background: var(--bg-white);
            border: 1px solid var(--border-color);

            transition: all 0.25s ease;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
          }

          .package-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
          }

          .package-card.popular {
            border: 1px solid var(--green);
            background: linear-gradient(to bottom, #3E9B56, #ffffff);
          }

          .badge {
            display: inline-block;
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 0.5rem 0.8rem;
            border-radius: 999px;
            background: var(--green-dark);
            color: white;
            margin-bottom: 1rem;
          }

          .package-title {
            font-size: 1.2rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            color: var(--text-main);
          }

          .package-tagline {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
          }

          .divider {
            height: 1px;
            background: var(--border-color);
            margin: 1.2rem 0;
            border: none;
          }

          .features {
            list-style: none;
            padding: 0;
            margin: 0;

            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }

          .features li {
            font-size: 0.95rem;
            color: var(--text-secondary);
            display: flex;
            gap: 0.6rem;
          }

          .features li::before {
            content: "✓";
            color: var(--color-primary);
            font-weight: 700;
          }

          .note {
            margin-top: 1.5rem;
            font-size: 0.8rem;
            color: var(--text-secondary);
            font-style: italic;
            padding-top: 1rem;
            border-top: 1px solid var(--border-color);
          }
        `}
      </style>

      {pkg.isPopular && <span className="badge">Most Popular</span>}

      <h3 className="package-title">{pkg.name}</h3>

      <p className="package-tagline">{pkg.tagline}</p>

      <hr className="divider" />

      <ul className="features">
        {pkg.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {pkg.note && <p className="note">{pkg.note}</p>}

    </div>
  );
}