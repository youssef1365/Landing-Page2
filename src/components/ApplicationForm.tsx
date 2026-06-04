import React from 'react';

export default function ApplicationForm({ packages }) {
  return (
    <section id="apply" className="form-section">
      <style>{`
        .form-section {
          padding: 6rem 0;
          background: linear-gradient(to bottom, var(--bg-main), var(--bg-white));
        }

        .form-wrapper {
          max-width: 920px;
          margin: 0 auto;
          padding: 2rem 1.25rem;
          border-radius: 1.5rem;
          border: 1px solid var(--border-color);
          background: var(--bg-white);
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 768px) {
          .form-wrapper {
            padding: 3.5rem;
          }
        }

        .form-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--text-main);
        }

        @media (min-width: 768px) {
          .form-title {
            font-size: 2.2rem;
          }
        }

        .form-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin: 0.5rem auto 2.8rem;
          max-width: 650px;
          font-size: 0.95rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .grid-2,
        .grid-3 {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
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
          color: var(--accent);
          margin-left: 4px;
          font-weight: 900;
        }

        input, select, textarea {
          padding: 0.9rem 1rem;
          border-radius: 0.85rem;
          border: 1px solid var(--border-color);
          background: var(--bg-white);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: var(--wink-accent);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .package-list {
          display: grid;
          gap: 0.8rem;
        }

        .package-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          background: var(--bg-white);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 600;
          color: var(--text-main);
          text-transform: none;
          letter-spacing: 0;
          font-size: 0.95rem;
        }

        .package-option:hover {
          border-color: var(--wink-accent);
          background: rgba(74, 143, 168, 0.08);
          transform: translateY(-2px);
        }

        .package-option input {
          accent-color: var(--wink-accent);
          transform: scale(1.1);
          width: auto;
        }

        .contact-block {
          padding: 1.25rem;
          border-radius: 1.25rem;
          border: 1px solid var(--wink-accent);
          background: rgba(74, 143, 168, 0.06);
        }

        @media (min-width: 768px) {
          .contact-block {
            padding: 1.5rem;
          }
        }

        .contact-title {
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        hr {
          border: none;
          height: 1px;
          background: var(--border-color);
          margin: 0.5rem 0;
        }

        .submit-btn {
          padding: 1rem;
          border: none;
          border-radius: 1rem;
          font-weight: 900;
          font-size: 1rem;
          color: white;
          background: linear-gradient(135deg, var(--wink-accent), var(--green-dark));
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-sm);
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
      `}</style>

      <div className="form-wrapper">
        <h2 className="form-title">Application Form</h2>
        <p className="form-subtitle">
          Apply to join and access qualified buyer meetings in Saudi Arabia's
          fastest-growing natural products market.
        </p>

        <form action="app-form.php" method="POST">
          <div className="grid-2">
            <div className="form-group">
              <label>Company Name <span className="required">*</span></label>
              <input type="text" name="company_name" required />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input type="url" name="website" />
            </div>
          </div>

          <div className="form-group">
            <label>Industry <span className="required">*</span></label>
            <select name="industry" required>
              <option value="">Select Industry...</option>
              <option>Food & Beverage</option>
              <option>Cosmetics & Clean Beauty</option>
              <option>Wellness & Health Supplements</option>
              <option>Other Eco-Friendly Innovations</option>
            </select>
          </div>

          <div className="form-group">
            <label>Products / Services <span className="required">*</span></label>
            <textarea name="products_services" required />
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label>Target Markets</label>
              <input type="text" name="target_markets" />
            </div>
            <div className="form-group">
              <label>Ideal Buyers Wishlist</label>
              <input type="text" name="ideal_buyers" />
            </div>
          </div>

          <div className="form-group">
            <label>Select Your Package <span className="required">*</span></label>
            <div className="package-list">
              {packages.map((pkg) => (
                <label key={pkg.id} className="package-option">
                  <span>{pkg.name}</span>
                  <input type="radio" name="package" value={pkg.id} required />
                </label>
              ))}
            </div>
          </div>

          <hr />

          <div className="contact-block">
            <div className="contact-title">Contact Person</div>
            <div className="grid-3">
              <div className="form-group">
                <label>Full Name <span className="required">*</span></label>
                <input type="text" name="contact_name" required />
              </div>
              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" name="contact_email" required />
              </div>
              <div className="form-group">
                <label>Phone <span className="required">*</span></label>
                <input type="tel" name="contact_phone" required />
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