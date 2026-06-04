import React, { useRef } from 'react';
import PackageCard from './PackageCard.jsx';

export default function PackagesSection({ packages }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="packages-section">
      <style>{`
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

        /* MOBILE — vertical list */
        .packages-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        /* DESKTOP — slider with side arrows */
        @media (min-width: 768px) {
          .slider-outer {
            display: flex;
            align-items: stretch;
            gap: 1rem;
          }

          .packages-list {
            flex: 1;
            flex-direction: row;
            max-width: 100%;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 1rem 0.5rem 1.5rem;
            gap: 1.5rem;
            align-items: stretch;
          }

          .packages-list::-webkit-scrollbar {
            display: none;
          }

          .packages-list > * {
            flex: 0 0 320px;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
          }
        }

        /* ARROWS — desktop only */
        .slider-arrow {
          display: none;
        }

        @media (min-width: 768px) {
          .slider-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            width: 2.5rem;
            height: 2.5rem;
            align-self: center;
            border-radius: 999px;
            border: 1px solid var(--border-color);
            background: var(--bg-white);
            color: var(--text-main);
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;
          }

          .slider-arrow:hover {
            background: var(--wink-accent);
            color: white;
            transform: scale(1.08);
          }
        }
      `}</style>

      <div className="container">
        <div className="packages-header">
          <h2>Choose Your Participation Package</h2>
          <p>Select the package that best fits your market entry strategy and business goals.</p>
        </div>

        <div className="slider-outer">
          <button className="slider-arrow" onClick={() => scroll(-1)}>&#8592;</button>

          <div className="packages-list" ref={trackRef}>
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <button className="slider-arrow" onClick={() => scroll(1)}>&#8594;</button>
        </div>
      </div>
    </section>
  );
}