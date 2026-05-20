import React from 'react';

export default function ApplicationForm({ packages }) {
  return (
    <section id="apply" className="form-section">

      <style>
        {`
          .form-section {
            padding: 6rem 0;
            background: var(--bg-white);
          }

          .form-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding: 3rem;

            background: var(--bg-white);
            border: 1px solid var(--border-color);
            border-radius: 1.5rem;

            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          }

          .form-title {
            text-align: center;
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-main);
            margin-bottom: 0.5rem;
          }

          .form-subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .grid-2 {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          @media (min-width: 768px) {
            .grid-2 {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .grid-3 {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          @media (min-width: 768px) {
            .grid-3 {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
          }

          input,
          select,
          textarea {
            padding: 0.85rem 1rem;
            border-radius: 0.75rem;

            border: 1px solid var(--border-color);
            background: var(--bg-white);

            font-size: 0.95rem;

            transition: all 0.2s ease;
            outline: none;
          }

          input:focus,
          select:focus,
          textarea:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          }

          textarea {
            min-height: 110px;
            resize: vertical;
          }

          /* PACKAGE RADIO */
          .radio-stack {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .radio-card {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            padding: 1rem;

            border-radius: 1rem;
            border: 1px solid var(--border-color);

            background: var(--bg-white);

            cursor: pointer;
            transition: all 0.2s ease;
          }

          .radio-card:hover {
            border-color: var(--color-primary);
            transform: translateY(-2px);
          }

          .divider {
            height: 1px;
            background: var(--border-color);
            border: none;
            margin: 1rem 0;
          }

          .submit-btn {
            width: 100%;
            padding: 1rem;

            border: none;
            border-radius: 1rem;

            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
            color: white;

            font-weight: 800;
            font-size: 1rem;

            cursor: pointer;

            transition: all 0.25s ease;
          }

          .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25);
          }
        `}
      </style>

      <div className="form-wrapper">

        <h2 className="form-title">Apply to Join</h2>
        <p className="form-subtitle">
          Submit your brand details to begin our review process.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>

          {/* COMPANY */}
          <div className="grid-2">
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input type="url" />
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="form-group">
            <label>Industry</label>
            <select required>
              <option value="">Select Industry...</option>
              <option value="food-beverage">Food & Beverage</option>
              <option value="cosmetics-beauty">Cosmetics & Clean Beauty</option>
              <option value="wellness-health">Wellness & Health Supplements</option>
              <option value="other">Other Eco-Friendly Innovations</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>Products / Services</label>
            <textarea required />
          </div>

          {/* TARGET */}
          <div className="grid-2">
            <div className="form-group">
              <label>Target Markets</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Ideal Buyers Wishlist</label>
              <input type="text" />
            </div>
          </div>

          {/* PACKAGES */}
          <div className="form-group">
            <label>Select Your Package</label>

            <div className="radio-stack">
              {packages.map((pkg) => (
                <label key={pkg.id} className="radio-card">
                  <input type="radio" name="package-choice" value={pkg.id} required />
                  <span>{pkg.name}</span>
                </label>
              ))}
            </div>
          </div>

          <hr className="divider" />

          {/* CONTACT */}
          <div className="grid-3">
            <div className="form-group">
              <label>Contact Person</label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" required />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
}