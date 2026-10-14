import { useState } from 'react';
import { Link } from 'react-router-dom';

const carouselImages = [
  {
    src: '/Content/Volunteer/meals-that-matter-prep.jpg',
    alt: 'Meals That Matter Ingredients & Prep Station'
  },
  {
    src: '/Content/Volunteer/meals-that-matter-team.jpg',
    alt: 'Street Medicine at Pitt Volunteers in Pitt Nutrition Aprons'
  },
  {
    src: '/Content/Volunteer/meals-that-matter-containers.jpg',
    alt: 'Prepared, Packed, and Labeled Meals Ready for Rounds'
  }
];

function MealsThatMatter() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Breadcrumbs Navigation */}
      <div className="breadcrumbs-bar">
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><Link to="/">Home</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li><Link to="/volunteer">Get Involved</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li className="breadcrumbs-current">Meals That Matter</li>
          </ul>
        </div>
      </div>

      {/* Hero Header */}
      <header className="meals-hero">
        <div className="container">
          <div className="meals-hero-meta">
            <span className="meals-badge">Volunteer Opportunity</span>
            <span className="meals-recurring-pill">Every Wednesday</span>
          </div>
          <h1 className="meals-hero-title">Meals That Matter</h1>
          <p className="meals-hero-subtitle">
            Weekly meal prep powering Street Medicine at Pitt's outreach rounds. Join us every Wednesday to make fresh,
            nutritious meals and hydration kits that bring nourishment, comfort, and connection to unhoused individuals across Pittsburgh.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="meals-main-content">
        <div className="container">
          <div className="meals-layout-grid">

            {/* Primary Left Column */}
            <div className="meals-primary-column">

              {/* Featured Photo Card Carousel */}
              <div className="meals-photo-banner-card">
                <div className="carousel-container" id="detail-meals-carousel">
                  <div className="carousel-track">
                    {carouselImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`carousel-image ${index === activeSlide ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                  <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button className="carousel-btn next" onClick={nextSlide} aria-label="Next image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="meals-photo-caption">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Wednesday prep sessions: from fresh raw ingredients to packed, nutritious meals ready for distribution.</span>
                </div>
              </div>

              {/* About the Initiative */}
              <section className="meals-content-block">
                <h2>Why Food is Medicine on the Streets</h2>
                <p>
                  Food insecurity is one of the most critical daily realities for individuals experiencing homelessness in Pittsburgh.
                  Without consistent access to wholesome, balanced meals, chronic health conditions such as diabetes, hypertension, and
                  wound infections worsen rapidly. Moreover, hunger makes it difficult to adhere to medications that require food intake.
                </p>
                <p>
                  <strong>Meals That Matter</strong> was created to meet this fundamental human need. Every Wednesday, our volunteer team
                  gathers to prepare healthy, ready-to-eat meals and snack kits that our clinicians and outreach students take directly into
                  encampments, under bridges, and along city streets during rounds.
                </p>
                <p>
                  Handing someone a fresh, high-quality meal often serves as the initial spark of trust that leads to blood pressure checks,
                  vital wound dressings, harm reduction resources, and ongoing healthcare connections.
                </p>
              </section>

              {/* What We Make Each Week */}
              <section className="meals-content-block">
                <h2>What We Prepare Each Wednesday</h2>
                <p>
                  Our menus are thoughtfully designed to be nutritious, filling, durable, and easy to consume on the go.
                  We assemble full meal packs containing:
                </p>
                <div className="menu-items-grid">
                  <div className="menu-item-card">
                    <span className="menu-item-icon">🥪</span>
                    <h4>Fresh Sandwiches</h4>
                    <p>Prepared fresh with turkey and cheese, peanut butter and jelly, and dedicated allergen-friendly / vegetarian options.</p>
                  </div>
                  <div className="menu-item-card">
                    <span className="menu-item-icon">🍎</span>
                    <h4>Fruit &amp; Fresh Produce</h4>
                    <p>Apples, bananas, and oranges providing essential vitamins, hydration, and natural energy.</p>
                  </div>
                  <div className="menu-item-card">
                    <span className="menu-item-icon">🥜</span>
                    <h4>High-Protein Snacks</h4>
                    <p>Nutrient-dense granola bars, trail mix, peanut butter crackers, cheese sticks, and protein pouches.</p>
                  </div>
                  <div className="menu-item-card">
                    <span className="menu-item-icon">💧</span>
                    <h4>Hydration &amp; Electrolytes</h4>
                    <p>Bottled water, electrolyte hydration packets, and seasonal items (hot cocoa/tea in winter; cooling drinks in summer).</p>
                  </div>
                </div>
              </section>

              {/* What to Expect */}
              <section className="meals-content-block">
                <h2>What to Expect as a Volunteer</h2>
                <p>
                  Whether you have volunteered with us before or are joining for the very first time, Meals That Matter is an energetic,
                  welcoming, and collaborative environment. Here is how our Wednesday prep sessions flow:
                </p>
                <ol className="process-steps">
                  <li className="process-step-item">
                    <div className="step-number">1</div>
                    <div className="step-details">
                      <h4>Sign In &amp; Hygiene Prep (5:00 PM)</h4>
                      <p>Check in with our session coordinator, wash hands thoroughly, and suit up with provided gloves, aprons, and hairnets.</p>
                    </div>
                  </li>
                  <li className="process-step-item">
                    <div className="step-number">2</div>
                    <div className="step-details">
                      <h4>Station Assembly Line (5:15 PM – 6:30 PM)</h4>
                      <p>Work alongside fellow students and community allies at bread, condiment, protein assembly, bagging, and labeling stations.</p>
                    </div>
                  </li>
                  <li className="process-step-item">
                    <div className="step-number">3</div>
                    <div className="step-details">
                      <h4>Pack Rucksacks &amp; Clean Up (6:30 PM – 7:00 PM)</h4>
                      <p>Pack the finished meal bundles into weather-proof street rounds rucksacks and clean/sanitize the prep workspace for the evening.</p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Volunteer Guidelines */}
              <section className="meals-content-block">
                <h2>Volunteer Guidelines &amp; Food Safety</h2>
                <p>To ensure high standards of health, sanitation, and safety for all participants and community members:</p>
                <ul className="guidelines-list">
                  <li><strong>Closed-Toe Shoes:</strong> Required for all kitchen and assembly workspace access.</li>
                  <li><strong>Clean, Comfortable Clothing:</strong> Wear casual clothes suitable for culinary prep work.</li>
                  <li><strong>Hair Restraints:</strong> Long hair must be tied back; hairnets and clean disposable gloves are provided on-site.</li>
                  <li><strong>Food Safety Standards:</strong> All food preparation follows strict temperature control and cross-contamination guidelines.</li>
                  <li><strong>Health Check:</strong> If you are experiencing symptoms of illness (cold, cough, fever), please rest and join us the following week!</li>
                </ul>
              </section>

            </div>

            {/* Sidebar Right Column */}
            <aside className="meals-sidebar-column">

              {/* Quick Facts Card */}
              <div className="quick-facts-card">
                <h3>Session Quick Facts</h3>
                <ul className="facts-list">
                  <li className="fact-item">
                    <div className="fact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="fact-info">
                      <span className="fact-label">Frequency &amp; Day</span>
                      <span className="fact-value">Every Wednesday (Weekly)</span>
                    </div>
                  </li>
                  <li className="fact-item">
                    <div className="fact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="fact-info">
                      <span className="fact-label">Prep Window</span>
                      <span className="fact-value">5:00 PM – 7:00 PM</span>
                      <span className="fact-subtext">Flexible arrival shifts welcome</span>
                    </div>
                  </li>
                  <li className="fact-item">
                    <div className="fact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="fact-info">
                      <span className="fact-label">Location</span>
                      <span className="fact-value">William Pitt Union</span>
                      <span className="fact-subtext">Pittsburgh, PA 15260 (Room confirmed via email)</span>
                    </div>
                  </li>
                  <li className="fact-item">
                    <div className="fact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="fact-info">
                      <span className="fact-label">Eligibility</span>
                      <span className="fact-value">Open to Everyone</span>
                      <span className="fact-subtext">Pitt students, trainees, &amp; community volunteers</span>
                    </div>
                  </li>
                  <li className="fact-item">
                    <div className="fact-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>
                    <div className="fact-info">
                      <span className="fact-label">Weekly Impact</span>
                      <span className="fact-value">50-100+ Meals Prepped</span>
                      <span className="fact-subtext">Distributed on Pittsburgh street rounds</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Sign Up / RSVP Card */}
              <div className="signup-card">
                <h3>Ready to Help Make Meals?</h3>
                <p>
                  Join our crew this Wednesday! RSVP so we can ensure adequate kitchen supplies, ingredients, and room access for the session.
                </p>
                <a
                  href="mailto:streetmedicineatpitt@gmail.com?subject=Volunteer%20RSVP%20-%20Meals%20That%20Matter&body=Hi%20Street%20Medicine%20at%20Pitt%20team%2C%0A%0AI%20would%20like%20to%20volunteer%20for%20Meals%20That%20Matter%20on%20Wednesday!%0A%0AName%3A%20%0AEmail%3A%20%0APhone%20(optional)%3A%20%0APreferred%20Wednesday%20Date(s)%3A%20%0AAny%20dietary%20or%20food%20safety%20certifications%20(optional)%3A%20"
                  className="btn-signup-rsvp"
                >
                  Sign Up via Email RSVP &rarr;
                </a>
                <p className="signup-note">
                  Or email us anytime directly at <br />
                  <strong>streetmedicineatpitt@gmail.com</strong>
                </p>
              </div>

              {/* Related Opportunities */}
              <div className="related-opportunities-card">
                <h4>Explore More Opportunities</h4>
                <ul className="related-links-list">
                  <li>
                    <Link to="/orientation">
                      <span>Street Outreach Rounds</span>
                      <span>&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/volunteer">
                      <span>Resource Sorting &amp; Inventory</span>
                      <span>&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/donate">
                      <span>Donate Food &amp; Supplies</span>
                      <span>&rarr;</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/events">
                      <span>Upcoming Events Calendar</span>
                      <span>&rarr;</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </main>
    </>
  );
}

export default MealsThatMatter;

