import React from 'react';

export default function EventSection({ event }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .event-card {
            background: var(--green);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;
            padding: clamp(1.5rem, 4vw, 3rem);
            display: grid;
            gap: 2.5rem;
            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          }

          .event-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 2rem;
            flex-wrap: wrap;
          }

          .event-header {
            flex: 1;
            min-width: 260px;
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
          }

          .event-badge {
            display: inline-flex;
            width: fit-content;
            font-size: 0.7rem;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: var(--color-primary-dark);
            background: var(--bg-main);
            padding: 0.35rem 0.7rem;
            border-radius: 999px;
            border: 1px solid var(--border-color);
          }

          .event-title {
            font-size: clamp(1.6rem, 3vw, 2.2rem);
            font-weight: 800;
            color: var(--text-main);
            line-height: 1.15;
          }

          .event-text {
            font-size: clamp(0.95rem, 1.2vw, 1.05rem);
            color: var(--bg-white);
            line-height: 1.7;
            max-width: 780px;
          }

          /* LOGO BLOCK (RESPONSIVE SAFE) */
          .event-logo {
            flex: 0 0 auto;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1.2rem 1.5rem;

            border-radius: 1.25rem;
            border: 1px solid var(--border-color);
            background: linear-gradient(to bottom, var(--bg-main), #ffffff);

            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);

            max-width: 220px;
            width: 100%;
          }

          .event-logo img {
            width: 100%;
            max-width: 140px;
            height: auto;
            object-fit: contain;
          }

          /* remove hover dependency for mobile safety */
          @media (hover: hover) {
            .event-logo:hover {
              transform: translateY(-4px);
              transition: transform 0.2s ease;
            }
          }

          /* META GRID */
          .event-meta {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          @media (min-width: 768px) {
            .event-meta {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .meta-box {
            padding: 1.5rem;
            border-radius: 1.2rem;
            border: 1px solid var(--border-color);
            background: linear-gradient(to bottom, var(--bg-main), #ffffff);
          }

          .meta-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            font-weight: 700;
          }

          .meta-value {
            font-weight: 700;
            color: var(--text-main);
            font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          }

          /* MOBILE FIX */
          @media (max-width: 640px) {
            .event-top {
              flex-direction: column;
            }

            .event-logo {
              max-width: 100%;
              justify-content: flex-start;
            }
          }
        `}
      </style>

      <div className="event-card">

        <div className="event-top">

          <div className="event-header">

            <span className="event-badge">
              Event Overview
            </span>

            <h2 className="event-title">
              {event.name}
            </h2>

            <p className="event-text">
              {event.description}
            </p>

            <p className="event-text">
              {event.subDescription}
            </p>

          </div>

          <div className="event-logo">
            <img src="/saudievent.png" alt="Event Logo" />
          </div>

        </div>

        <div className="event-meta">

          <div className="meta-box">
            <div className="meta-label">Date</div>
            <div className="meta-value">14–16 December 2026</div>
          </div>

          <div className="meta-box">
            <div className="meta-label">Location</div>
            <div className="meta-value">
              Riyadh Front Exhibition & Conference Center
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}