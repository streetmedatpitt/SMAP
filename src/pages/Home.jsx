import { useState } from 'react';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import { DISCIPLINES } from '../utils/disciplines';
import { getUpcomingEvents } from '../data/eventsData';

function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [winterShelterSlide, setWinterShelterSlide] = useState(0);
  const [expandedHighlight, setExpandedHighlight] = useState(null);

  const upcomingEvents = getUpcomingEvents(3);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleHighlight = (index) => {
    setExpandedHighlight(expandedHighlight === index ? null : index);
  };

  const faqData = [
    {
      question: "What is homelessness?",
      answer: "Homelessness is when someone doesn't have a stable, safe, or adequate place to live. Instead, they may have to stay in shelters, cars, or outdoors until they can afford housing or receive help through a housing assistance program that provides support for finding and maintaining a home."
    },
    {
      question: "What do we do?",
      answer: "Street Med is a student-run organization that provides medical outreach, resources, and compassionate support to individuals experiencing homelessness in Pittsburgh through weekly street rounds, donation drives, educational events, research, community partnerships and more."
    },
    {
      question: "How to get involved?",
      answer: "Join us on rounds or help with resources! Check out our Get Involved page for more!"
    },
    {
      question: "How does it affect health?",
      answer: "Higher rates of wounds, infections, untreated chronic diseases, mental-health crises, and exposure injuries. Life expectancy is at least 2 decades shorter than the housed population."
    },
    {
      question: "Why don't more people use shelters?",
      answer: "Limited beds, barrier to entry, strict rules (curfews, sobriety, no pets/partners), safety concerns, crowding, lack of privacy, and past trauma push some to camp or stay in vehicles instead."
    }
  ];

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Medical Care",
      description: "Basic health assessments, wound care, and vital sign monitoring during weekly street rounds."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "Social Support",
      description: "Building trust and relationships while distributing essential supplies and resources."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "Connections",
      description: "Linking individuals to long-term healthcare, housing, and social services."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Education",
      description: "Training healthcare students in compassionate, equitable care practices."
    }
  ];

  const involvementCards = [
    {
      image: "/Content/Home/team.jpg",
      alt: "Volunteering",
      title: "Volunteering",
      description: "Join our team of dedicated volunteers making a difference in the community every week.",
      link: "/volunteer",
      linkText: "Join Us"
    },
    {
      image: "/Content/Home/event.jpg",
      alt: "Events",
      title: "Events",
      description: "Participate in our community events, workshops, and fundraisers throughout the year.",
      link: "/events",
      linkText: "See Events"
    },
    {
      image: "/Content/Home/rounds.jpg",
      alt: "Street Rounds",
      title: "Street Rounds",
      description: "Learn about our weekly street rounds providing direct medical care and support.",
      link: "/orientation",
      linkText: "Get Started"
    }
  ];

  const sponsors = [
    { name: "Cooper Fund of Shadyside Hospital Foundation", url: "https://shadysidehospitalfoundation.org/donate/" },
    { name: "Pitt Med", url: "https://www.medschool.pitt.edu/" },
    { name: "Pitt Public Health", url: "https://www.publichealth.pitt.edu/" },
    { name: "Pitt Philanthropy and funders", url: "https://pae.pitt.edu/s/1729/2-pittsburgh/interior.aspx?gid=2&pgid=3010" },
    { name: "Pitt Eats", url: "https://dineoncampus.com/pitt/meal-donation" },
    { name: "All our other generous donors", url: null }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/Content/Home/bridge.jpg)' }}
        >
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title animated">Street Medicine at Pitt</h1>
            <p className="hero-description animated">
              We are committed to improving health outcomes for people experiencing homelessness, reducing stigma,
              and fostering meaningful community partnerships that create lasting change.
            </p>

            {/* Metrics with Icons */}
            <div className="metrics-container">
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                target={32}
                label="Disciplines Involved"
                disciplines={DISCIPLINES}
              />
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                }
                target={500}
                label="Encounters"
              />
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                target={1200}
                label="Volunteer Hours"
              />
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to="/resources" className="btn btn-primary">View Resources</Link>
              <Link to="/donate" className="btn btn-secondary">Support Us</Link>
              <Link to="/volunteer" className="btn btn-tertiary">Join Our Team</Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span className="scroll-text">Discover More</span>
          <svg viewBox="0 0 24 24">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="quick-stats-bar">
        <div className="container">
          <div className="stats-grid-expanded">
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Weeks of Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">Weekly Volunteers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Locations Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Commitment</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">25+</span>
              <span className="stat-label">Learners Weekly</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section (Dynamically Powered) */}
      <section className="upcoming-events-section">
        <div className="container">
          <div className="section-block-header">
            <h2>Upcoming Events</h2>
          </div>
          <div className="announcements-grid" id="home-upcoming-events-grid">
            {upcomingEvents && upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <article key={event.id} className="announcement-card">
                  <div className="announcement-media">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      loading="lazy" 
                      onError={(e) => { e.currentTarget.src = event.fallbackImage || '/Content/Events/bridge.jpg'; }} 
                    />
                  </div>
                  <div className="announcement-content">
                    <div className="announcement-date">
                      {event.displayDate || `${event.date?.day} ${event.date?.month}`}
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.shortDescription || event.description}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', flexWrap: 'wrap' }}>
                      <Link to={`/events/${event.id}`} className="announcement-button">
                        RSVP &amp; Details &rarr;
                      </Link>
                      {event.rsvpUrl && (
                        <a 
                          href={event.rsvpUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="announcement-button" 
                          style={{ background: '#003594', color: 'white' }}
                        >
                          {event.rsvpLabel || 'RSVP via Google Form'} &rarr;
                        </a>
                      )}
                      {event.zoomUrl && (
                        <a 
                          href={event.zoomUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="announcement-button" 
                          style={{ background: '#003594', color: 'white' }}
                        >
                          {event.zoomLabel || 'Join Meeting \u2192'}
                        </a>
                      )}
                      {event.groupMeUrl && (
                        <a 
                          href={event.groupMeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="announcement-button" 
                          style={{ background: '#008542', color: 'white' }}
                        >
                          Join GroupMe &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '40px 20px',
                background: '#f8fbff',
                border: '1px dashed #c7d9fc',
                borderRadius: '16px'
              }}>
                <h3 style={{ color: '#001f54', fontSize: '20px', marginBottom: '8px' }}>
                  No events scheduled in the next 30 days
                </h3>
                <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 20px 0' }}>
                  Check our full calendar for future workshops, lectures, and community events.
                </p>
                <Link to="/events" className="btn btn-secondary" style={{ display: 'inline-block' }}>
                  Explore Full Calendar
                </Link>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/events" className="btn btn-tertiary">
              View All Events &amp; Calendar &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section (Highlights) */}
      <section className="what-we-do-section featured-section">
        <div className="container">
          <h2 className="section-header">Highlights</h2>
          <div className="section-underline"></div>
          <div className="services-grid">
            {/* Highlight 1: Arabella Johnson */}
            <div className="service-card">
              <div className="featured-media">
                <img 
                  src="/Content/Home/ArabellaProjectPresention.png"
                  alt="Arabella Johnson presenting her project on menstrual health needs" 
                  loading="lazy"
                  className="featured-image-lower"
                  onError={(e) => { e.currentTarget.src = '/Content/About us/Arabella-Johnson.JPG'; }}
                />
              </div>
              <div className={`featured-copy ${expandedHighlight === 0 ? 'is-expanded' : ''}`}>
                <h3>Health Equity</h3>
                <p className="featured-description">
                  <span>Street Medicine at Pitt is proud to recognize Arabella Johnson (MPH BCHS &apos;26), who received the Director&apos;s Award.</span>
                  {expandedHighlight === 0 && (
                    <span className="featured-description-extra">
                      {' '}The recognition came at the University of Pittsburgh School of Public Health&apos;s annual Public Health Practice Showcase this past December. Her project, &quot;Centering Community Voice: Addressing Menstrual Health Needs Among Women Experiencing Homelessness in Pittsburgh, PA,&quot; used community narratives to better understand and assess menstrual health needs in our area. Based on that feedback, Arabella prepared and distributed menstrual health kits informed directly by participant responses. We are grateful for her leadership, advocacy, and continued commitment to our community.
                    </span>
                  )}
                </p>
                <button 
                  type="button" 
                  className="featured-toggle" 
                  aria-expanded={expandedHighlight === 0}
                  onClick={() => toggleHighlight(0)}
                >
                  {expandedHighlight === 0 ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>

            {/* Highlight 2: Winter Shelter Outreach */}
            <div className="service-card">
              <div className="featured-media">
                <div className="featured-carousel" aria-label="Winter Shelter Outreach photo gallery">
                  <div className="featured-carousel-track">
                    <div className={`featured-carousel-slide ${winterShelterSlide === 0 ? 'active' : ''}`}>
                      <img 
                        src="/Content/Home/wintershelterPic1.png"
                        alt="SM@P team at the winter shelter outreach" 
                        loading="lazy"
                        className="featured-image-lower"
                        onError={(e) => { e.currentTarget.src = '/Content/Home/team.jpg'; }}
                      />
                    </div>
                    <div className={`featured-carousel-slide ${winterShelterSlide === 1 ? 'active' : ''}`}>
                      <img 
                        src="/Content/Home/wintershelterPic2.png"
                        alt="SM@P vaccination clinic and triage care team at the winter shelter" 
                        loading="lazy"
                        className="featured-image-lower"
                        onError={(e) => { e.currentTarget.src = '/Content/Home/team.jpg'; }}
                      />
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="featured-carousel-btn prev" 
                    onClick={() => setWinterShelterSlide(prev => (prev === 0 ? 1 : 0))}
                    aria-label="Previous Winter Shelter Outreach photo"
                  >
                    ‹
                  </button>
                  <button 
                    type="button" 
                    className="featured-carousel-btn next" 
                    onClick={() => setWinterShelterSlide(prev => (prev === 1 ? 0 : 1))}
                    aria-label="Next Winter Shelter Outreach photo"
                  >
                    ›
                  </button>
                </div>
              </div>
              <div className={`featured-copy ${expandedHighlight === 1 ? 'is-expanded' : ''}`}>
                <h3>Winter Shelter Outreach</h3>
                <p className="featured-description">
                  <span>Throughout the winter months, Street Medicine at Pitt continues to care for people experiencing homelessness through winter outreach.</span>
                  {expandedHighlight === 1 && (
                    <span className="featured-description-extra">
                      {' '}Operating from November through March, the winter shelter offers both a warm dinner and a safe place to sleep. Our clinicians, resident physicians, and student volunteers support the efforts of shelter staff by offering triage care and referrals for further medical care when necessary. Drs. Castelli and Klatt, also hosted a vaccination clinic while supporting medical coverage at the shelter. Note: As always, no patients are photographed, just our volunteer team.
                    </span>
                  )}
                </p>
                <button 
                  type="button" 
                  className="featured-toggle" 
                  aria-expanded={expandedHighlight === 1}
                  onClick={() => toggleHighlight(1)}
                >
                  {expandedHighlight === 1 ? 'Show less' : 'Read more'}
                </button>
              </div>
            </div>

            {/* Highlight 3: Law School Partnership */}
            <div className="service-card">
              <div className="featured-media">
                <img 
                  src="/Content/Home/lawStudentsPic1.png"
                  alt="Street Medicine at Pitt team with Professor Mary Crossley and law school partners" 
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/Content/Home/team.jpg'; }}
                />
              </div>
              <div className="featured-copy featured-copy-full">
                <h3>Law School Partnership</h3>
                <p className="featured-description">
                  <span>We are collaborating with the Pitt Law School to expand advocacy and legal support for our community. This partnership began with Mary Crossley and is now led by Professor Tamara Pierson Brown, connecting law students with real-world service and community needs.</span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/highlights" className="btn btn-primary" style={{ display: 'inline-block' }}>
              View All Highlights &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-header">What We Do</h2>
          <div className="section-underline"></div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="container">
          <h2 className="section-header">Get Involved</h2>
          <div className="section-underline"></div>

          {/* Course Credit Callout */}
          <div className="course-credit-callout">
            <svg className="credit-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <p>
              <strong>Pitt Students:</strong> <Link to="/orientation">Street rounds can count toward course credit in Public Health,
              Nutrition, Engineering, Social Work, Medicine, Computer Science, Dental, and more!</Link>
            </p>
          </div>

          <div className="involvement-grid">
            {involvementCards.map((card, index) => (
              <div key={index} className="involvement-card">
                <div className="card-image">
                  <img src={card.image} alt={card.alt} />
                  <div className="card-overlay">
                    <Link to={card.link}>Learn More</Link>
                  </div>
                </div>
                <div className="card-content">
                  <h3><Link to={card.link}>{card.title}</Link></h3>
                  <p>{card.description}</p>
                  <Link to={card.link} className="card-link">{card.linkText} →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /> <br /> <br />
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-arrow">▼</span>
              </div>
              <div className="faq-answer">
                {faq.question === "How does it affect health?" ? (
                  <>
                    <p>{faq.answer}</p>
                    <p>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5739436/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                        Mortality Among the Homeless: Causes and Meteorological Relationships
                      </a>
                    </p>
                  </>
                ) : faq.question === "How to get involved?" ? (
                  <p>
                    Join us on rounds or help with resources! Check out our <Link to="/volunteer">Get Involved</Link> page for more!
                  </p>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors" style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontSize: '48px',
            fontWeight: '700',
            color: '#001f54',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Thank you to our Sponsors!
          </h2>

          <div className="sponsors-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto 50px'
          }}>
            <div className="sponsors-column" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {sponsors.slice(0, 3).map((sponsor, index) => (
                sponsor.url ? (
                  <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </a>
                ) : (
                  <div key={index} className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </div>
                )
              ))}
            </div>
            <div className="sponsors-column" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {sponsors.slice(3).map((sponsor, index) => (
                sponsor.url ? (
                  <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </a>
                ) : (
                  <div key={index} className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="donate-section" style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: '18px',
              fontWeight: '400',
              color: '#333',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Want to support our mission? Consider making a donation to help us continue providing healthcare to those who need it most.
            </p>
            <Link to="/donate" className="btn btn-primary" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#FFB81C',
              color: '#001f54',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
