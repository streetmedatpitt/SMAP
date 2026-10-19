import { Link } from 'react-router-dom';

function Highlights() {
  return (
    <div className="highlights-page">
      {/* Hero Header */}
      <header className="highlights-hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: "url('/Content/Home/bridge.jpg')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title" style={{ textAlign: 'center', margin: '0 auto' }}>Highlights</h1>
        </div>
      </header>

      {/* Breadcrumbs Bar */}
      <div className="highlights-breadcrumbs">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="separator">/</li>
            <li><Link to="/about">About Us</Link></li>
            <li className="separator">/</li>
            <li className="current">Highlights</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="highlights-page-content">
        <div className="container">
          <div className="highlights-section-title">
            <h2>Featured Spotlights</h2>
            <p>
              Highlighting exceptional projects, seasonal initiatives, and cross-discipline collaborations driving healthcare equity.
            </p>
          </div>

          {/* Spotlight 1: Arabella Johnson */}
          <article className="highlight-spotlight-card">
            <div className="spotlight-image-col">
              <img 
                src="/Content/Home/ArabellaProjectPresention.png" 
                alt="Arabella Johnson presenting menstrual health project" 
                loading="lazy"
                className="featured-image-lower"
                onError={(e) => { e.currentTarget.src = '/Content/About us/Arabella-Johnson.JPG'; }}
              />
            </div>
            <div className="spotlight-text-col">
              <span className="spotlight-badge">Director's Award • Health Equity</span>
              <h3>Arabella Johnson (MPH BCHS &apos;26)</h3>
              <p>
                Street Medicine at Pitt is immensely proud to recognize Arabella Johnson for receiving the prestigous <strong>Director&apos;s Award</strong> at the University of Pittsburgh School of Public Health&apos;s annual Public Health Practice Showcase.
              </p>
              <p>
                Her project, <em>&quot;Centering Community Voice: Addressing Menstrual Health Needs Among Women Experiencing Homelessness in Pittsburgh, PA,&quot;</em> gathered firsthand community narratives to accurately assess the physical, emotional, and hygiene challenges unhoused individuals face.
              </p>
              <div className="spotlight-meta-box">
                <strong>Community Impact:</strong> Utilizing participant feedback, Arabella developed and assembled personalized menstrual health kits that are directly distributed during street rounds and drop-in clinics.
              </div>
            </div>
          </article>

          {/* Spotlight 2: Winter Shelter Outreach */}
          <article className="highlight-spotlight-card reverse">
            <div className="spotlight-image-col">
              <img 
                src="/Content/Home/wintershelterPic1.png" 
                alt="Volunteers supporting winter shelter care" 
                loading="lazy"
                className="featured-image-lower"
                onError={(e) => { e.currentTarget.src = '/Content/Home/rounds.jpg'; }}
              />
            </div>
            <div className="spotlight-text-col">
              <span className="spotlight-badge badge-blue">Clinical Outreach • Winter 2025–2026</span>
              <h3>Winter Shelter Care &amp; Vaccination Clinics</h3>
              <p>
                Operating continuously from November through March, the emergency winter shelter provides unhoused community members with a warm dinner, a safe bed, and compassionate human connection.
              </p>
              <p>
                Our student volunteers, medical residents, and attending clinicians support shelter staff by providing on-site triage, wound care, medication delivery, and referrals for advanced healthcare services.
              </p>
              <div className="spotlight-meta-box">
                <strong>Clinician Shoutout:</strong> Special appreciation to <strong>Dr. Castelli</strong> and <strong>Dr. Klatt</strong> for organizing and staffing dedicated seasonal vaccination clinics while providing clinical coverage.
              </div>
            </div>
          </article>

          {/* Spotlight 3: Law School Partnership */}
          <article className="highlight-spotlight-card">
            <div className="spotlight-image-col">
              <img 
                src="/Content/Home/lawStudentsPic1.png" 
                alt="Law students collaborating with Street Medicine at Pitt" 
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/Content/Home/event.jpg'; }}
              />
            </div>
            <div className="spotlight-text-col">
              <span className="spotlight-badge">Interprofessional Alliance • Health &amp; Justice</span>
              <h3>Pitt Law School Partnership</h3>
              <p>
                Healthcare and legal rights are deeply intertwined for individuals navigating housing instability. Street Medicine at Pitt proudly collaborates with the University of Pittsburgh School of Law to expand legal advocacy, identification assistance, and structural support.
              </p>
              <p>
                This pioneering interprofessional initiative began in collaboration with <strong>Mary Crossley</strong> and is currently spearheaded by <strong>Professor Tamara Pierson Brown</strong>, providing law students with transformative real-world community service experiences.
              </p>
              <div className="spotlight-meta-box">
                <strong>Holistic Support:</strong> Connecting students directly with unhoused neighbors to navigate disability benefits, civil documentation, and housing advocacy.
              </div>
            </div>
          </article>

          {/* Community Partners Section */}
          <div className="highlights-section-title" style={{ marginTop: '70px' }}>
            <h2>Community Partners &amp; Generous Donors</h2>
            <p>
              Our weekly street outreach and educational initiatives are made possible through the unwavering support of dedicated community partners.
            </p>
          </div>

          <div className="shoutouts-grid">
            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h4>Cooper Fund of Shadyside Hospital Foundation</h4>
              <p>
                Continuous financial sponsorship enabling the purchase of specialized wound care dressings, diagnostic instruments, and emergency distribution supplies.
              </p>
            </div>

            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h4>Pitt Schools of Medicine &amp; Public Health</h4>
              <p>
                Faculty mentorship, clinical preceptors, course credit accreditation, and academic practice partnerships that prepare student clinicians for equitable care.
              </p>
            </div>

            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h4>Pitt Eats &amp; Dining Services</h4>
              <p>
                Dedicated food recovery and meal provision partner supporting our weekly <em>Meals That Matter</em> meal-prep sessions and nutritional street kits.
              </p>
            </div>

            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4>Pitt Philanthropy &amp; Individual Funders</h4>
              <p>
                Every generous community donation directly fuels transportation costs, winter coats, socks, boots, and non-perishable food items.
              </p>
            </div>

            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Volunteers Across 32 Disciplines</h4>
              <p>
                Over 50 weekly volunteers spanning medicine, nursing, pharmacy, engineering, law, social work, and undergraduate studies delivering holistic care.
              </p>
            </div>

            <div className="shoutout-card">
              <div className="shoutout-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h4>Community Advisory Partners</h4>
              <p>
                Local shelter coordinators, outreach guides, and unhoused advocates who welcome our teams and shape our approach with dignity and trust.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="highlights-cta-banner">
            <h3>Support Our Community Champions</h3>
            <p>
              Whether you want to join our street rounds team, prepare meals on Wednesdays, or contribute essential warm clothing and supplies, there is a place for you.
            </p>
            <div className="highlights-cta-buttons">
              <Link to="/volunteer" className="btn btn-primary">Join Our Team</Link>
              <Link to="/meals-that-matter" className="btn btn-secondary">Meals That Matter</Link>
              <Link to="/donate" className="btn btn-primary" style={{ background: '#FFB81C', color: '#001f54' }}>Support Our Mission</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Highlights;

