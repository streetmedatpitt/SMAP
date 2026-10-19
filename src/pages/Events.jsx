import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getUpcomingEvents, getPastEvents, getAllCategories } from '../data/eventsData';

function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllPastEvents, setShowAllPastEvents] = useState(true);

  const categories = getAllCategories();
  const upcomingEvents = useMemo(() => {
    return getUpcomingEvents(undefined, selectedCategory);
  }, [selectedCategory]);

  const pastEvents = useMemo(() => {
    return getPastEvents();
  }, []);

  const visiblePastEvents = showAllPastEvents ? pastEvents : pastEvents.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="page-title">Events &amp; Activities</h1>
          <p className="page-subtitle">
            Join us in making a difference through community engagement, fundraisers, and educational workshops.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>

          {/* Category Filter Pills - commented out until more events are added
          <div className="category-filters-container" id="categoryFilters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          */}

          <div className="events-grid" id="upcoming-events-grid">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => {
                const dayNum = event.date?.day || 'TBD';
                const monthShort = event.date?.month || 'SOON';

                return (
                  <div key={event.id} className="event-card upcoming" data-category={event.category}>
                    <div className="event-date">
                      <span className="date-day">{dayNum}</span>
                      <span className="date-month">{monthShort}</span>
                    </div>
                    <div className="event-content">
                      <span className={`event-category ${event.category}`}>
                        {event.categoryLabel || 'Event'}
                      </span>
                      <h3 className="event-title">
                        <Link to={`/events/${event.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {event.title}
                        </Link>
                      </h3>
                      <div className="event-details">
                        <div className="detail-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>{event.displayDate || (typeof event.date === 'string' ? event.date : `${event.date?.day} ${event.date?.month}`)} {event.time ? `• ${event.time}` : ''}</span>
                        </div>
                        <div className="detail-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="event-description">{event.shortDescription}</p>

                      <div style={{ display: 'flex', gap: '12px', marginTop: '18px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Link
                          to={`/events/${event.id}`}
                          className="announcement-button"
                          style={{ margin: 0 }}
                        >
                          RSVP &amp; Event Details &rarr;
                        </Link>

                        {event.rsvpUrl && (
                          <a
                            href={event.rsvpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="announcement-button"
                            style={{ margin: 0, background: '#003594', color: 'white' }}
                          >
                            {event.rsvpLabel || 'Official Registration'} &rarr;
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '48px 24px',
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px dashed #cbd5e1',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <h3 style={{ color: '#001f54', fontSize: '22px', marginBottom: '8px' }}>
                  No Upcoming Events in this Category
                </h3>
                <p style={{ color: '#64748b', fontSize: '16px', margin: '0 0 20px 0' }}>
                  We regularly schedule new workshops, rounds, and didactics. Check back soon or browse our past events below!
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedCategory('all')}
                >
                  View All Events
                </button>
              </div>
            )}
          </div>

          {/* Weekly Rounds Notice */}
          <div className="weekly-rounds-notice">
            <div className="notice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div className="notice-content">
              <h3>Weekly Street Rounds</h3>
              <p>
                Street rounds happen every Wednesday and Thursday. Check our <Link to="/volunteer">Street Rounds page</Link> for detailed schedules and how to join.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <p className="section-subtitle">
            See what we've accomplished together and the impact we've made in our community.
          </p>

          <div className="past-events-grid" id="past-events-grid">
            {visiblePastEvents.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="past-event-card"
                aria-label={`View details for ${event.title}`}
              >
                <div className="past-event-image">
                  <img
                    src={event.image}
                    alt={`${event.title} flyer`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = event.fallbackImage || '/Content/Events/bridge.jpg';
                    }}
                  />
                  <div className="event-overlay">
                    <span className="event-date-overlay">
                      {event.displayDate || (typeof event.date === 'string' ? event.date : `${event.date?.day} ${event.date?.month}`)}
                    </span>
                  </div>
                </div>
                <div className="past-event-content">
                  <h3>{event.title}</h3>
                  <p>{event.shortDescription || event.fullDescription?.slice(0, 140) + '...'}</p>
                  <div className="event-stats">
                    <span className="stat">
                      <strong>{event.categoryLabel || 'Event'}</strong>
                    </span>
                  </div>
                  <div className="past-event-footer-link">
                    <span>View Event Details &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View More / Show Less Toggle Button */}
          {pastEvents.length > 6 && (
            <div className="view-more-section">
              <button
                id="viewMoreBtn"
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAllPastEvents(!showAllPastEvents)}
              >
                {showAllPastEvents ? 'Show Fewer Past Events' : `View All Past Events (${pastEvents.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Collaborate with Us?</h2>
            <p>
              We're always looking for partners to help us organize fundraisers, educational workshops, and community events. 
              Get in touch to discuss how we can work together to make a difference.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/volunteer" className="btn btn-secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;