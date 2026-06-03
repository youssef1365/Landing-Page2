import React, { useState, useRef, useEffect } from 'react';
import PackageCard from './PackageCard.jsx';

export default function PackagesSection({ packages }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const VISIBLE = 3;
  const maxIndex = packages.length - VISIBLE;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const prev = () => setActive((i) => Math.max(i - 1, 0));
  const next = () => setActive((i) => Math.min(i + 1, maxIndex));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isMobile || touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section className="packages-section">
      <style>{`
        .packages-section {
          padding: 6rem 0;
          background: var(--bg-main);
          overflow: hidden;
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

        .slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .slider-overflow {
          overflow: hidden;
          width: 100%;
        }

        .slider-track {
          display: flex;
          gap: 2rem;
          transition: transform 0.4s ease;
          width: 100%;
        }

        .slider-card-wrap {
          min-width: calc(33.333% - 1.4rem);
          flex-shrink: 0;
        }

        .slider-arrow {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: var(--bg-white);
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 2;
        }

        .slider-arrow:hover {
          background: var(--wink-accent);
          color: white;
          transform: scale(1.08);
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--border-color);
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, width 0.2s ease;
          padding: 0;
        }

        .slider-dot.active {
          background: var(--wink-accent);
          width: 24px;
        }

        @media (max-width: 767px) {
          .slider-arrow { display: none; }
          .slider-dots  { display: none; }

          .slider-overflow {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 1rem;
          }

          .slider-overflow::-webkit-scrollbar {
            display: none;
          }

          .slider-track {
            gap: 1rem;
            width: max-content;
            transform: none !important;
            transition: none !important;
          }

          .slider-card-wrap {
            min-width: 80vw !important;
            scroll-snap-align: start;
          }
        }
      `}</style>

      <div className="container">
        <div className="packages-header">
          <h2>Choose Your Participation Package</h2>
          <p>Select the package that best fits your market entry strategy and business goals.</p>
        </div>

        <div className="slider-wrapper">
          <button className="slider-arrow" onClick={prev}>&#8592;</button>

          <div
            className="slider-overflow"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="slider-track"
              style={
                isMobile
                  ? undefined
                  : { transform: `translateX(calc(-${active} * (100% / ${Math.min(packages.length, 3)} + 2rem / ${Math.min(packages.length, 3)})))` }
              }
            >
              {packages.map((pkg) => (
                <div key={pkg.id} className="slider-card-wrap">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          </div>

          <button className="slider-arrow" onClick={next}>&#8594;</button>
        </div>

        <div className="slider-dots">
          {packages.slice(0, maxIndex + 1).map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}