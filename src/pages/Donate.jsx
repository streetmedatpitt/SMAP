import { useState, useEffect } from 'react';

const categoryOptions = [
  { value: 'Warm Clothing & Coats', label: 'Warm Clothing & Coats' },
  { value: 'New/Clean Socks & Undergarments', label: 'Clean Socks & Underwear' },
  { value: 'Blankets & Sleeping Bags', label: 'Blankets & Sleeping Bags' },
  { value: 'Hygiene & Toiletries', label: 'Hygiene & Toiletries' },
  { value: 'First Aid & Medical Supplies', label: 'First Aid & Medical Items' },
  { value: 'Other Supplies', label: 'Other / Miscellaneous' }
];

function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [categories, setCategories] = useState([]);
  const [itemDescription, setItemDescription] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('dropoff');
  const [pickupAddress, setPickupAddress] = useState('');
  const [donorAvailability, setDonorAvailability] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  // Summary state for success screen
  const [summaryData, setSummaryData] = useState(null);

  // Open & Close Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Close when clicking overlay backdrop
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCategoryToggle = (value) => {
    setCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const deliveryMethodText = deliveryMethod === 'pickup' ? 'Volunteer Pick-Up' : 'Donor Drop-Off';
    const categoriesText = categories.length > 0 ? categories.join(', ') : 'Not specified';
    const trimmedName = donorName.trim();
    const trimmedEmail = donorEmail.trim();
    const trimmedPhone = donorPhone.trim();
    const trimmedDesc = itemDescription.trim();
    const trimmedAvail = donorAvailability.trim();
    const trimmedAddress = pickupAddress.trim();

    // Construct email body
    const subject = encodeURIComponent(`In-Kind Donation: Clothes/Supplies - ${trimmedName}`);
    const bodyContent = 
`Hi Street Medicine at Pitt Resource Team,

I would like to coordinate a donation of clothes or supplies for street outreach!

--- DONOR DETAILS ---
Name: ${trimmedName}
Email: ${trimmedEmail}
Phone: ${trimmedPhone || 'Not provided'}

--- DONATION ITEMS ---
Categories: ${categoriesText}
Description / Quantities:
${trimmedDesc || 'See categories above'}

--- LOGISTICS ---
Preference: ${deliveryMethodText}
${deliveryMethod === 'pickup' && trimmedAddress ? `Pick-up Address / Neighborhood: ${trimmedAddress}
` : ''}General Availability:
${trimmedAvail || 'Flexible / To be confirmed via email'}

Thank you for your dedicated service to the Pittsburgh community!`;

    const mailtoUrl = `mailto:streetmedicineatpitt@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Launch email client
    window.location.href = mailtoUrl;

    // Show success screen in modal
    setSummaryData({
      name: trimmedName,
      email: trimmedEmail,
      categories: categoriesText,
      delivery: deliveryMethodText,
      availability: trimmedAvail || 'Flexible'
    });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setCategories([]);
    setItemDescription('');
    setDeliveryMethod('dropoff');
    setPickupAddress('');
    setDonorAvailability('');
    setDonorName('');
    setDonorEmail('');
    setDonorPhone('');
    setSummaryData(null);
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Hero Section with Background */}
      <section className="donate-hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: "url('/Content/Donate/Bridge.jpg')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Supplies and Support</h1>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="donation-section">
        <div className="container">
          <div className="donation-cards-wrapper">
            {/* Amazon Wishlist Card */}
            <div className="donation-card">
              <div className="donation-image-wrapper">
                <a 
                  href="https://www.amazon.com/hz/wishlist/ls/3RYJSQJZP3NMS?ref_=wl_share" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="donation-link"
                >
                  <img 
                    src="/Content/Donate/Amazon_logo.jpg" 
                    alt="Amazon Wishlist" 
                    className="donation-image" 
                  />
                  <div className="donation-overlay">
                    <span className="overlay-text">Shop Our Wishlist</span>
                  </div>
                </a>
              </div>
              <div className="donation-content">
                <h2>Amazon Wishlist</h2>
                <p>
                  Want to donate specific items we need most? Visit our{' '}
                  <a 
                    href="https://www.amazon.com/hz/wishlist/ls/3RYJSQJZP3NMS?ref_=wl_share" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-link"
                  >
                    Amazon Wishlist
                  </a>{' '}
                  and have supplies shipped straight to us. These items go directly into the hands of our outreach teams and community members.
                </p>
                <a 
                  href="https://www.amazon.com/hz/wishlist/ls/3RYJSQJZP3NMS?ref_=wl_share" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Wishlist
                </a>
              </div>
            </div>

            {/* Direct Donation Card */}
            <div className="donation-card">
              <div className="donation-image-wrapper">
                <a 
                  href="https://securelb.imodules.com/s/1729/18/form-giving.aspx?sid=1729&gid=2&pgid=785&cid=1615&dids=21470&appealcode=25STMED&sort=1&bledit=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="donation-link"
                >
                  <img 
                    src="/Content/Donate/Give_To_Pitt.jpg" 
                    alt="Direct Donation" 
                    className="donation-image" 
                  />
                  <div className="donation-overlay">
                    <span className="overlay-text">Make a Donation</span>
                  </div>
                </a>
              </div>
              <div className="donation-content">
                <h2>Direct Giving</h2>
                <p>
                  Prefer to{' '}
                  <a 
                    href="https://securelb.imodules.com/s/1729/18/form-giving.aspx?sid=1729&gid=2&pgid=785&cid=1615&dids=21470&appealcode=25STMED&sort=1&bledit=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-link"
                  >
                    give
                  </a>{' '}
                  directly? Your financial support allows us to purchase essential supplies, cover distribution costs, and respond quickly when needs arise.
                </p>
                <a 
                  href="https://securelb.imodules.com/s/1729/18/form-giving.aspx?sid=1729&gid=2&pgid=785&cid=1615&dids=21470&appealcode=25STMED&sort=1&bledit=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Donate Now
                </a>
              </div>
            </div>

            {/* Shadyside Hospital Foundation Card */}
            <div className="donation-card">
              <div className="donation-image-wrapper">
                <a 
                  href="https://shadysidehospitalfoundation.org/donate/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="donation-link"
                >
                  <img 
                    src="/Content/Donate/ShadysideHospitalFoundation.png" 
                    alt="Shadyside Hospital Foundation" 
                    className="donation-image" 
                  />
                  <div className="donation-overlay">
                    <span className="overlay-text">Support Our Partner</span>
                  </div>
                </a>
              </div>
              <div className="donation-content">
                <h2>Shadyside Hospital Foundation</h2>
                <p>
                  Support our partner organization through the{' '}
                  <a 
                    href="https://shadysidehospitalfoundation.org/donate/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-link"
                  >
                    Shadyside Hospital Foundation
                  </a>
                  . Your contribution helps strengthen community healthcare initiatives and outreach programs. Please specify the Cooper Fund when donating.
                </p>
                <a 
                  href="https://shadysidehospitalfoundation.org/donate/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Contribute
                </a>
              </div>
            </div>

            {/* In-Kind Donations Card (Clothes & Supplies) */}
            <div className="donation-card">
              <div 
                className="donation-image-wrapper btn-open-donation-modal" 
                role="button" 
                tabIndex={0} 
                title="Click to coordinate a donation"
                onClick={openModal}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal();
                  }
                }}
              >
                <div className="donation-photo-frame">
                  <img 
                    src="/Content/Donate/clothing_supplies.jpg" 
                    alt="Donate Clothes and Supplies" 
                    className="donation-photo" 
                  />
                </div>
                <div className="donation-overlay">
                  <span className="overlay-text">Donate Items</span>
                </div>
              </div>
              <div className="donation-content">
                <h2>Donate Clothes &amp; Supplies</h2>
                <p>
                  Have gently used coats, winter clothing, blankets, socks, hygiene kits, or medical supplies? Tell us what you have to donate, your general availability, and whether you prefer volunteer pick-up or drop-off.
                </p>
                <button 
                  type="button" 
                  className="btn btn-primary btn-open-donation-modal"
                  onClick={openModal}
                >
                  Coordinate Donation &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Kind Donation Modal Dialog */}
      <div 
        className={`donation-modal-overlay ${isModalOpen ? 'active' : ''}`}
        id="suppliesDonationModal" 
        aria-hidden={!isModalOpen} 
        role="dialog" 
        aria-labelledby="modalTitle"
        onClick={handleOverlayClick}
      >
        <div className="donation-modal-dialog">
          <div className="modal-header">
            <h3 id="modalTitle">Coordinate a Clothing &amp; Supply Donation</h3>
            <button 
              type="button" 
              className="modal-close-btn" 
              id="closeModalBtn" 
              aria-label="Close modal"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>

          {/* Form State */}
          {!isSubmitted ? (
            <div className="modal-body" id="modalBodyForm">
              <p className="modal-intro-text">
                Thank you for supporting our unhoused community members with essential physical supplies! Please let us know what you have to donate and how you would like to get it to our team.
              </p>

              <form id="suppliesDonationForm" onSubmit={handleSubmit}>
                {/* Category Checkboxes */}
                <div className="form-group">
                  <label className="form-label">
                    What items do you have to donate? <span className="required">*</span>
                  </label>
                  <span className="form-helper">Select all that apply:</span>
                  <div className="checkbox-options-grid">
                    {categoryOptions.map((opt) => (
                      <label key={opt.value} className="checkbox-tile">
                        <input 
                          type="checkbox" 
                          name="donationCategories" 
                          value={opt.value}
                          checked={categories.includes(opt.value)}
                          onChange={() => handleCategoryToggle(opt.value)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Item Description */}
                <div className="form-group">
                  <label htmlFor="itemDescription" className="form-label">
                    Description &amp; Estimated Quantity <span className="required">*</span>
                  </label>
                  <textarea 
                    id="itemDescription" 
                    className="form-textarea" 
                    placeholder="e.g., 2 bags of winter coats (sizes M and L), 4 packages of unopened thermal socks, travel-sized toiletries..." 
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Delivery Preference */}
                <div className="form-group">
                  <label className="form-label">Delivery Preference <span className="required">*</span></label>
                  <div className="delivery-radios-grid">
                    <label className="delivery-radio-card">
                      <input 
                        type="radio" 
                        name="deliveryMethod" 
                        id="deliveryDropoff" 
                        value="dropoff" 
                        checked={deliveryMethod === 'dropoff'}
                        onChange={() => setDeliveryMethod('dropoff')}
                      />
                      <div className="delivery-radio-content">
                        <h5>I can Drop Off</h5>
                        <p>I can bring items to an Oakland / Pitt campus location.</p>
                      </div>
                    </label>
                    <label className="delivery-radio-card">
                      <input 
                        type="radio" 
                        name="deliveryMethod" 
                        id="deliveryPickup" 
                        value="pickup" 
                        checked={deliveryMethod === 'pickup'}
                        onChange={() => setDeliveryMethod('pickup')}
                      />
                      <div className="delivery-radio-content">
                        <h5>Volunteer Pick-Up</h5>
                        <p>I would like a volunteer to pick up items (Pittsburgh area).</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Pickup Address (Conditional) */}
                {deliveryMethod === 'pickup' && (
                  <div className="form-group" id="addressFieldGroup">
                    <label htmlFor="pickupAddress" className="form-label">
                      Pick-Up Address / Neighborhood <span className="required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="pickupAddress" 
                      className="form-input" 
                      placeholder="e.g., 123 Forbes Ave, Oakland / Pittsburgh neighborhood"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      required={deliveryMethod === 'pickup'}
                    />
                  </div>
                )}

                {/* General Availability */}
                <div className="form-group">
                  <label htmlFor="donorAvailability" className="form-label">
                    Your General Availability <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="donorAvailability" 
                    className="form-input" 
                    placeholder="e.g., Weekday evenings after 5 PM, Tuesday & Thursday afternoons, or Weekends" 
                    value={donorAvailability}
                    onChange={(e) => setDonorAvailability(e.target.value)}
                    required
                  />
                </div>

                {/* Contact Details */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="donorName" className="form-label">
                      Your Name <span className="required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="donorName" 
                      className="form-input" 
                      placeholder="First & Last Name" 
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="donorEmail" className="form-label">
                      Your Email <span className="required">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="donorEmail" 
                      className="form-input" 
                      placeholder="email@example.com" 
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="donorPhone" className="form-label">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="donorPhone" 
                    className="form-input" 
                    placeholder="(412) 555-0123"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                  />
                </div>

                {/* Modal Actions */}
                <div className="modal-actions">
                  <button 
                    type="button" 
                    className="btn-secondary-outline" 
                    id="cancelModalBtn"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-submit-donation">
                    Submit Donation Details &rarr;
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="modal-body" id="modalBodySuccess">
              <div className="donation-success-box">
                <div className="success-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4>Thank You for Your Donation!</h4>
                <p>
                  Your donation information has been pre-filled into an email to our Resource Team at <strong>streetmedicineatpitt@gmail.com</strong>.
                </p>
                {summaryData && (
                  <div className="success-summary-card" id="successSummaryDetails">
                    <p><strong>Donor:</strong> {summaryData.name} ({summaryData.email})</p>
                    <p><strong>Items:</strong> {summaryData.categories}</p>
                    <p><strong>Preference:</strong> {summaryData.delivery}</p>
                    <p><strong>Availability:</strong> {summaryData.availability}</p>
                  </div>
                )}
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  If your email app didn&apos;t open automatically, you can email us directly with the details above at <a href="mailto:streetmedicineatpitt@gmail.com" style={{ color: '#003594', fontWeight: 600 }}>streetmedicineatpitt@gmail.com</a>.
                </p>
                <div className="modal-actions" style={{ justifyContent: 'center' }}>
                  <button 
                    type="button" 
                    className="btn-secondary-outline" 
                    id="resetDonationFormBtn"
                    onClick={handleReset}
                  >
                    Submit Another Donation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Donate;
