import React from 'react';

export default function ApplicationForm({ packages }) {
  return (
    <section id="apply" className="form-section">
      <div className="form-wrapper">
        {/* Main Section Title */}
        <h2 className="text-center">Apply to Join</h2>
        <p className="text-center section-subtitle">Submit your brand details to begin our review process.</p>

        <form style={styles.appForm} onSubmit={(e) => e.preventDefault()}>
          <div style={styles.formRow2}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name*</label>
              <input type="text" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Website</label>
              <input type="url" style={styles.input} />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Industry*</label>
            <select required style={styles.input}>
              <option value="">Select Industry...</option>
              <option value="food-beverage">Food & Beverage</option>
              <option value="cosmetics-beauty">Cosmetics & Clean Beauty</option>
              <option value="wellness-health">Wellness & Health Supplements</option>
              <option value="other">Other Eco-Friendly Innovations</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Products / Services*</label>
            <textarea required rows="3" style={styles.textarea}></textarea>
          </div>

          <div style={styles.formRow2}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Target Markets</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Ideal Buyers Wishlist</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Select Your Package*</label>
            <div style={styles.radioStack}>
              {packages.map((pkg) => (
                <label key={pkg.id} style={styles.radioLabelCard}>
                  <input type="radio" name="package-choice" value={pkg.id} required style={styles.radioInput} />
                  <span>{pkg.name}</span>
                </label>
              ))}
            </div>
          </div>

          <hr style={styles.formDivider} />

          <div style={styles.formRow3}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Person*</label>
              <input type="text" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email*</label>
              <input type="email" required style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone*</label>
              <input type="tel" required style={styles.input} />
            </div>
          </div>

          <button type="submit" style={styles.btnSubmit}>Submit Application</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  appForm: { display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' },
  formGroup: { display: 'flex', flexDirection: 'column' },
  label: { fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#475569', marginBottom: '0.5rem', letterSpacing: '0.05em' },
  input: { width: '100%', padding: '0.75rem 1rem', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', fontSize: '0.95rem', outline: 'none' },
  textarea: { width: '100%', padding: '0.75rem 1rem', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '0.75rem', fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit' },
  formRow2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' },
  formRow3: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' },
  radioStack: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  radioLabelCard: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', cursor: 'pointer', fontSize: '0.875rem' },
  radioInput: { width: '1rem', height: '1rem', cursor: 'pointer' },
  formDivider: { border: 0, height: '1px', backgroundColor: '#e2e8f0', margin: '1rem 0' },
  btnSubmit: { width: '100%', backgroundColor: '#0f172a', color: '#ffffff', padding: '1rem', fontSize: '1rem', fontWeight: 700, border: 'none', borderRadius: '0.75rem', cursor: 'pointer' }
};