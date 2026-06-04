import React from 'react';

const styles = `
  .package-card {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 1.5rem;
    background: var(--bg-white);
    border: 1px solid var(--border-color);
    transition: all 0.25s ease;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
    height: 100%;
    box-sizing: border-box;
    flex: 0 0 320px;
    width: 320px;
      min-width: 341px
  }

  .package-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
  }

  .package-card.popular {
    border: 2px solid var(--wink-accent);
    background: linear-gradient(to bottom, rgba(62,155,86,0.08), #ffffff);
  }

  .badge {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    background: var(--wink-accent);
    color: white;
    margin-bottom: 1rem;
    align-self: flex-start;
  }

  .badge-placeholder {
    height: 2.3rem;
    margin-bottom: 1rem;
  }

  .package-title {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: var(--text-main);
  }

  .pkg-cta {
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 1.5rem;
      padding: 0.75rem;
      border-radius: 999px;
      background: var(--wink-accent);
      color: white;
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
      box-sizing: border-box;
    }

    .pkg-cta:hover {
      opacity: 0.88;
      transform: translateY(-1px);
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
    flex: 1;
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
`;

export default function PackageCard({ pkg }) {
  return (
    <div className={`package-card ${pkg.isPopular ? 'popular' : ''}`}>
      <style>{styles}</style>

      {pkg.isPopular
        ? <span className="badge">Most Popular</span>
        : <div className="badge-placeholder" />
      }

      <h3 className="package-title">{pkg.name}</h3>
      <p className="package-tagline">{pkg.tagline}</p>
      <hr className="divider" />

      <ul className="features">
        {pkg.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      {pkg.note && <p className="note">{pkg.note}</p>}

      <a href="#apply" className="pkg-cta">Request Pricing</a>
    </div>
  );
}