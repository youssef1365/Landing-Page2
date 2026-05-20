import React from 'react';

export default function EventSection({ event }) {
  return (
    <section className="container my-section">

      <style>
        {`
          .event-card {
            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;

            padding: 3rem;

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
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
            flex: 1;
            min-width: 280px;
          }

          .event-badge {
            display: inline-flex;
            width: fit-content;

            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.1em;

            color: var(--color-primary-dark);
            background: var(--bg-main);

            padding: 0.4rem 0.75rem;
            border-radius: 999px;

            border: 1px solid var(--border-color);
          }

          .event-title {
            font-size: 2.1rem;
            font-weight: 800;
            color: var(--text-main);
            line-height: 1.15;
          }

          .event-text {
            font-size: 1.05rem;
            color: var(--text-secondary);
            line-height: 1.7;
            max-width: 800px;
          }

          /* BIG LOGO BLOCK */
          .event-logo {
            flex: 0 0 auto;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1.5rem 2rem;

            border-radius: 1.25rem;
            border: 1px solid var(--border-color);
            background: linear-gradient(to bottom, var(--bg-main), #ffffff);

            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);

            transition: transform 0.2s ease;
          }

          .event-logo:hover {
            transform: translateY(-4px);
          }

          .event-logo img {
            height: 90px;
            width: auto;
            object-fit: contain;
          }

          @media (min-width: 900px) {
            .event-logo img {
              height: 110px;
            }
          }

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
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
            font-weight: 700;
          }

          .meta-value {
            font-weight: 700;
            color: var(--text-main);
            font-size: 1.05rem;
          }
        `}
      </style>

      <div className="event-card">

        {/* TOP AREA */}
        <div className="event-top">

          <div className="event-header">
            <span className="event-badge">Event Overview</span>

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

          {/* BIG LOGO */}
          <div className="event-logo">
            <img src="/saudievent.png" alt="Event Logo" />
          </div>

        </div>

        {/* META */}
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