import React from 'react';

export default function FinalCTA({ event }) {
  return (
    <section className="final-cta">

      <style>
        {`
          .final-cta {
            padding: 7rem 0;
            background: linear-gradient(135deg, var(--green-dark), #0f172a);
            color: white;
            position: relative;
            overflow: hidden;
          }

          .final-cta::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at top,
                rgba(62, 155, 86, 0.35),
                transparent 60%),
              radial-gradient(circle at bottom,
                rgba(243, 178, 94, 0.15),
                transparent 70%);
            pointer-events: none;
          }

          .cta-wrapper {
            position: relative;
            z-index: 1;

            max-width: 850px;
            margin: 0 auto;
            text-align: center;

            padding: 0 1.5rem;
          }

          .cta-wrapper h2 {
            font-size: 2.6rem;
            font-weight: 900;
            line-height: 1.15;

            margin-bottom: 1rem;
            letter-spacing: -0.03em;
          }

          .cta-wrapper h2 span {
            color: var(--green);
          }

          .cta-wrapper p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.78);
            line-height: 1.7;

            max-width: 650px;
            margin: 0 auto 2.5rem;
          }

          .cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding: 1rem 2.2rem;

            border-radius: 999px;
            border: 1px solid rgba(152, 215, 109, 0.4);

            background: linear-gradient(
              135deg,
              var(--green),
              var(--green-dark)
            );

            color: white;
            font-weight: 800;
            text-decoration: none;

            box-shadow: 0 18px 40px rgba(62, 155, 86, 0.25);

            transition: all 0.25s ease;
          }

          .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 25px 55px rgba(62, 155, 86, 0.35);
            filter: brightness(1.05);
          }

          .cta-note {
            margin-top: 1.25rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
          }

          .cta-accent {
            color: var(--color-orange);
            font-weight: 700;
          }
        `}
      </style>

      <div className="cta-wrapper">

        <h2>
          Secure Your Place at <span>{event.name}</span> {event.year}
        </h2>

        <p>
          Limited company slots available. Applications are reviewed on a rolling basis.
          <span className="cta-accent"> Early submission is recommended.</span>
        </p>

        <a href="#apply" className="cta-btn">
          Apply Now
        </a>

        <div className="cta-note">
          Response time: within 48 hours
        </div>

      </div>
    </section>
  );
}