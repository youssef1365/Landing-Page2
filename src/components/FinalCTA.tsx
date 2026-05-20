import React from 'react';

export default function FinalCTA({ event }) {
  return (
    <section className="final-cta">

      <style>
        {`
          .final-cta {
            padding: 7rem 0;
            background: linear-gradient(135deg, #0f172a, #1e1b4b);
            color: white;
            position: relative;
            overflow: hidden;
          }

          .final-cta::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
              circle at top,
              rgba(99, 102, 241, 0.25),
              transparent 60%
            );
          }

          .cta-wrapper {
            position: relative;
            z-index: 1;

            max-width: 800px;
            margin: 0 auto;
            text-align: center;

            padding: 0 1.5rem;
          }

          .cta-wrapper h2 {
            font-size: 2.4rem;
            font-weight: 900;
            line-height: 1.2;

            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }

          .cta-wrapper p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.7;

            max-width: 650px;
            margin: 0 auto 2.5rem;
          }

          .final-cta .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding: 1rem 2rem;

            border-radius: 999px;

            background: linear-gradient(
              135deg,
              #6366f1,
              #4f46e5
            );

            color: white;
            font-weight: 800;
            text-decoration: none;

            box-shadow: 0 15px 35px rgba(99, 102, 241, 0.3);

            transition: all 0.25s ease;
          }

          .final-cta .btn:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 20px 45px rgba(99, 102, 241, 0.4);
          }
        `}
      </style>

      <div className="cta-wrapper">

        <h2>
          Secure Your Place at {event.name} {event.year}
        </h2>

        <p>
          Limited company slots available. Apply now and our team will contact you within 48 hours.
        </p>

        <a href="#apply" className="btn btn-primary">
          Apply Now
        </a>

      </div>
    </section>
  );
}