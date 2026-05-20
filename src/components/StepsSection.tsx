import React from 'react';

export default function StepsSection({ steps }) {
  return (
    <section className="steps-section">

      <style>
        {`
          .steps-section {
            padding: 6rem 0;
            background: linear-gradient(to bottom, var(--bg-main), var(--bg-white));
          }

          .steps-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .steps-header h2 {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--text-main);
          }

          .steps-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 768px) {
            .steps-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          /* CARD */
          .step-card {
            padding: 2rem;
            border-radius: 1.5rem;
            background: var(--bg-white);
            border: 1px solid var(--border-color);
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);

            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            transition: all 0.2s ease;
          }

          .step-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
          }

          /* NUMBER (FIXED - NO ABSOLUTE) */
          .step-number {
            width: 38px;
            height: 38px;
            border-radius: 999px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: 800;
            font-size: 0.9rem;
            color: white;

            background: linear-gradient(135deg, #98D76D, #3E9B56);
            box-shadow: 0 10px 20px rgba(62, 155, 86, 0.25);
          }

          .step-card h3 {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--text-main);
            margin-top: 0.25rem;
          }

          .step-card p {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        `}
      </style>

      <div className="container">

        <div className="steps-header">
          <h2>How It Works</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">

              <div className="step-number">
                {index + 1}
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}