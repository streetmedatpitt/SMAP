import { useState } from 'react';
import { Link } from 'react-router-dom';

// Test recipient configuration (configured to had78@pitt.edu for testing)
const PRIMARY_CONTACT_EMAIL = 'had78@pitt.edu';

const REASON_ROUTING = {
  'Volunteering': {
    cc: 'had78@pitt.edu',
    label: 'Volunteering'
  },
  'Community Partnership': {
    cc: 'had78@pitt.edu',
    label: 'Community Partnership'
  },
  'Supply Donation': {
    cc: 'had78@pitt.edu',
    label: 'Supply Donation'
  },
  'Press/Media': {
    cc: 'had78@pitt.edu',
    label: 'Press/Media'
  },
  'General': {
    cc: 'had78@pitt.edu',
    label: 'General Inquiry'
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: '',
    subscribe: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getMailtoUrl = () => {
    const reasonTag = formData.reason || 'General';
    const subject = encodeURIComponent(`[${reasonTag}] Inquiry from ${formData.firstName} ${formData.lastName}`);
    const ccEmail = REASON_ROUTING[formData.reason]?.cc || PRIMARY_CONTACT_EMAIL;
    const ccParam = ccEmail ? `&cc=${encodeURIComponent(ccEmail)}` : '';
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Reason for Contacting: ${reasonTag}\n` +
      `Subscribed to updates: ${formData.subscribe ? 'Yes' : 'No'}\n\n` +
      `Message / How can we help?:\n${formData.message}`
    );
    return `mailto:${PRIMARY_CONTACT_EMAIL}?subject=${subject}${ccParam}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If subscribed to email updates, submit to Mailchimp
    if (formData.subscribe) {
      const mailchimpUrl = 'https://streetmedatpitt.us9.list-manage.com/subscribe/post?u=ad34f48582402d8d5f518332c&id=51cdb5149f&f_id=006f05e1f0';
      const mcData = new FormData();
      mcData.append('FNAME', formData.firstName);
      mcData.append('LNAME', formData.lastName);
      mcData.append('EMAIL', formData.email);
      try {
        fetch(mailchimpUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: mcData
        });
      } catch (err) {
        // Mode no-cors ignores CORS response
      }
    }

    // If user provided a message, trigger mailto with CC routing
    if (formData.message && formData.message.trim().length > 0) {
      window.location.href = getMailtoUrl();
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      reason: '',
      message: '',
      subscribe: true
    });
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Hero Section with Background */}
      <section className="hero-section contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="contact-hero-text">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Have questions, want to partner, or interested in getting involved? Send us a message or join our email list below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            {!isSubmitted ? (
              <form
                id="email-signup-form"
                onSubmit={handleSubmit}
              >
                <h2>Send a Message or Join Our List</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="FNAME">First Name <span className="required-star">*</span></label>
                    <input 
                      type="text" 
                      name="FNAME" 
                      id="FNAME" 
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="LNAME">Last Name <span className="required-star">*</span></label>
                    <input 
                      type="text" 
                      name="LNAME" 
                      id="LNAME" 
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="EMAIL">Email Address <span className="required-star">*</span></label>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    id="EMAIL" 
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="REASON">Reason for Contacting</label>
                  <select 
                    id="REASON" 
                    name="REASON"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="">Select a reason...</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Community Partnership">Community Partnership</option>
                    <option value="Supply Donation">Supply Donation</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="MESSAGE">Message / How can we help?</label>
                  <textarea 
                    id="MESSAGE" 
                    name="MESSAGE" 
                    rows={4}
                    placeholder="Message / How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="form-consent-group">
                  <label className="consent-checkbox-label" htmlFor="SUBSCRIBE">
                    <input 
                      type="checkbox" 
                      name="SUBSCRIBE" 
                      id="SUBSCRIBE" 
                      checked={formData.subscribe}
                      onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                    />
                    <span>Keep me updated with news, events, and volunteer rounds</span>
                  </label>
                  <p className="consent-notice">
                    By submitting, you agree to receive updates from Street Medicine at Pitt. Unsubscribe at any time.
                  </p>
                </div>

                {/* Hidden field for bot protection */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_ad34f48582402d8d5f518332c_51cdb5149f" tabIndex="-1" readOnly />
                </div>

                <button type="submit" className="btn btn-primary">
                  {formData.message.trim().length > 0 ? 'Send Message' : 'Submit'}
                </button>
              </form>
            ) : (
              <div className="contact-success-box">
                <div className="contact-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>Thank You for Reaching Out!</h3>
                <p>
                  {formData.message.trim().length > 0
                    ? `Your message has been prepared for ${PRIMARY_CONTACT_EMAIL}. Our team will review your inquiry and follow up soon!`
                    : 'Thank you for connecting with Street Medicine at Pitt!'}
                </p>
                {formData.subscribe && (
                  <p style={{ fontSize: '14px', color: '#166534', marginTop: '-6px', marginBottom: '14px' }}>
                    ✓ You have also been added to our email updates list.
                  </p>
                )}
                <div className="contact-success-summary">
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  {formData.reason && <p><strong>Reason:</strong> {formData.reason}</p>}
                  {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
                  <p><strong>To:</strong> {PRIMARY_CONTACT_EMAIL} (CC: {REASON_ROUTING[formData.reason]?.cc || PRIMARY_CONTACT_EMAIL})</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                  <a 
                    href={getMailtoUrl()}
                    className="btn btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Open in Email App
                  </a>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Additional Contact Information */}
          <div className="contact-info">
            <h2>Other Ways to Connect</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <h3>Email Us</h3>
                <p>For general inquiries, partnership opportunities, or questions about our programs.</p>
                <a href="mailto:info@streetmedatpitt.org" className="contact-link">
                  info@streetmedatpitt.org
                </a>
              </div>
              <div className="contact-card">
                <h3>Get Involved</h3>
                <p>Interested in volunteering? Learn more about our weekly street rounds.</p>
                <Link to="/volunteer" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;