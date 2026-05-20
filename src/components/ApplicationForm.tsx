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

            border-radius: 1.5rem;
            border: 1px solid var(--border-color);

            background: var(--bg-white);
            box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          }

          .form-title {
            text-align: center;
            font-size: 2rem;
            font-weight: 900;
            color: var(--text-main);
          }

          .form-subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1.4rem;
          }

          .grid-2 {
            display: grid;
            gap: 1.25rem;
          }

          .grid-3 {
            display: grid;
            gap: 1.25rem;
          }

          @media (min-width: 768px) {
            .grid-2 {
              grid-template-columns: repeat(2, 1fr);
            }

            .grid-3 {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 0.75rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--text-secondary);
            margin-bottom: 0.5rem;
          }

          .required {
            color: var(--color-primary-dark);
            margin-left: 4px;
          }

          input, select, textarea {
            padding: 0.9rem 1rem;
            border-radius: 0.8rem;

            border: 1px solid var(--border-color);
            background: var(--bg-white);

            font-size: 0.95rem;

            outline: none;
            transition: all 0.2s ease;
          }

          input:focus,
          select:focus,
          textarea:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(62, 155, 86, 0.15);
          }

          textarea {
            min-height: 120px;
            resize: vertical;
          }

          /* PACKAGES (clean radio list) */
          .package-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .package-option {
            display: flex;
            align-items: center;
            gap: 0.75rem;

            padding: 0.9rem 1rem;

            border: 1px solid var(--border-color);
            border-radius: 0.9rem;

            background: var(--bg-white);

            cursor: pointer;
            transition: all 0.2s ease;
          }

          .package-option:hover {
            border-color: var(--color-primary);
            background: rgba(62, 155, 86, 0.05);
          }

          .package-option input {
            accent-color: var(--color-primary);
          }

          hr {
            border: none;
            height: 1px;
            background: var(--border-color);
            margin: 1rem 0;
          }

          .submit-btn {
            padding: 1rem;
            border: none;
            border-radius: 1rem;

            font-weight: 900;
            font-size: 1rem;

            color: white;
            background: var(--color-primary);

            cursor: pointer;

            transition: all 0.2s ease;
          }

          .submit-btn:hover {
            background: var(--color-primary-dark);
            transform: translateY(-2px);
          }
        `}
      </style>

      <div className="form-wrapper">

        <h2 className="form-title">Apply to Join</h2>
        <p className="form-subtitle">
          Submit your brand details to begin the selection process.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>

          {/* COMPANY */}
          <div className="grid-2">
            <div className="form-group">
              <label>Company Name <span className="required">*</span></label>
              <input type="text" required />
            </div>

            <div className="form-group">
              <label>Website</label>
              <input type="url" />
            </div>
          </div>

          <div className="form-group">
            <label>Industry <span className="required">*</span></label>
            <select required>
              <option value="">Select Industry...</option>
              <option>Products / Services</option>
              <option>Cosmetics & Clean Beauty</option>
              <option>Wellness & Health Supplements</option>
              <option>Other Eco-Friendly Innovations</option>
            </select>
          </div>

          <div className="form-group">
            <label>Products / Services <span className="required">*</span></label>
            <textarea required />
          </div>

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
            <label>Select Your Package <span className="required">*</span></label>

            <div className="package-list">
              {packages.map((pkg) => (
                <label key={pkg.id} className="package-option">
                  <input
                    type="radio"
                    name="package"
                    value={pkg.id}
                    required
                  />
                  {pkg.name}
                </label>
              ))}
            </div>
          </div>

          <hr />

          <div className="form-group">

            <label>
              Contact Person <span className="required">*</span>
            </label>

            <div className="grid-3">

              <div className="form-group">
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>
                  Email <span className="required">*</span>
                </label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>
                  Phone <span className="required">*</span>
                </label>
                <input type="tel" required />
              </div>

            </div>
          </div>

          <button className="submit-btn" type="submit">
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
}