import React from 'react';

export default function EventSection({ event }) {
  return (
    <section className="container my-section">
      <style>{`
        .event-card {
          background: var(--bg-main);
          border: 1px solid var(--accent);
          border-radius: 1.5rem;
          padding: clamp(1.5rem, 4vw, 3rem);
          display: grid;
          gap: 2.5rem;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
        }

        .event-top {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: start;
        }

        .event-header {
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
          color: var(--text-main);
          line-height: 1.7;
          max-width: 780px;
        }

        .event-right-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 220px;
          flex-shrink: 0;
        }

        .event-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.2rem 1.5rem;
          border-radius: 1.25rem;
          border: 1px solid var(--border-color);
          background: linear-gradient(to bottom, var(--bg-main), #ffffff);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
        }

        .event-logo img {
          width: 100%;
          max-width: 140px;
          height: auto;
          object-fit: contain;
        }

        .organizer-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: 1rem;
          border: 1px solid var(--accent);
          background: linear-gradient(to bottom, var(--bg-main), #ffffff);
        }

        .organizer-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .organizer-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.82rem;
          line-height: 1.3;
        }

        .organized-by-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          font-weight: 700;
          margin-bottom: -0.25rem;
        }

        .event-meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .meta-box {
          display: block;
          padding: 1.5rem;
          border-radius: 1.2rem;
          border: 1px solid var(--accent);
          background: linear-gradient(to bottom, var(--bg-main), #ffffff);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .meta-box:hover {
          background: var(--accent);
          border-color: var(--accent);
        }

        .meta-box:hover .meta-label,
        .meta-box:hover .meta-value {
          color: white;
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

        @media (max-width: 640px) {
          .event-top {
            grid-template-columns: 1fr;
          }

          .event-right-col {
            width: 100%;
          }

          .event-meta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="event-card">
        <div className="event-top">
          <div className="event-header">
            <span className="event-badge">Event Overview</span>
            <h2 className="event-title">{event.name}</h2>
            <p className="event-text">{event.description}</p>
            <p className="event-text">{event.subDescription}</p>
          </div>

          <div className="event-right-col">
            <div className="event-logo">
              <img src="/saudievent.png" alt="Event Logo" />
            </div>

            <div className="organized-by-label">Organized By</div>

            {event.organizers.map((org) => (
              <div className="organizer-card" key={org.name}>
                <img className="organizer-logo" src={org.logo} alt={org.name} />
                <span className="organizer-name">{org.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="event-meta">
          <a className="meta-box" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`} target="_blank" rel="noopener noreferrer">
            <div className="meta-label">Location</div>
            <div className="meta-value">{event.location}</div>
          </a>
          <a className="meta-box" href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.name)}&dates=${event.dateStart}/${event.dateEnd}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`} target="_blank" rel="noopener noreferrer">
            <div className="meta-label">Date</div>
            <div className="meta-value">{event.date}</div>
          </a>
        </div>
      </div>
    </section>
  );
}