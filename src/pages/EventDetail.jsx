import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../data/eventsData';

function EventDetail() {
  const { id } = useParams();
  const event = getEventById(id);

  const [rsvpData, setRsvpData] = useState({
    name: '',
    email: '',
    role: 'Student',
    notes: ''
  });
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs-list">
              <li><Link to="/">Home</Link></li>
              <li className="breadcrumbs-separator">/</li>
              <li><Link to="/events">Events</Link></li>
              <li className="breadcrumbs-separator">/</li>
              <li className="breadcrumbs-current">Not Found</li>
            </ul>
          </div>
        </div>

        <section className="event-hero" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <div className="container">
            <h1 className="event-hero-title">Event Not Found</h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px' }}>
              We could not find the event you are looking for. It may have been updated, rescheduled, or relocated.
            </p>
            <Link to="/events" className="btn btn-primary">
              &larr; Return to Events &amp; Calendar
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!rsvpData.name || !rsvpData.email) return;

    // Optional mailto fallback trigger
    const organizerEmail = event.rsvpEmail || "streetmedicineatpitt@gmail.com";
    const subject = encodeURIComponent(`RSVP: ${event.title} - ${rsvpData.name}`);
    const body = encodeURIComponent(
      `Hello Street Medicine at Pitt Team,\n\nI would like to RSVP for "${event.title}".\n\nName: ${rsvpData.name}\nEmail: ${rsvpData.email}\nAffiliation: ${rsvpData.role}\nComments / Questions: ${rsvpData.notes || 'None'}\n\nThank you!`
    );
    const mailtoUrl = `mailto:${organizerEmail}?subject=${subject}&body=${body}`;

    console.log('RSVP Submitted:', { ...rsvpData, mailtoUrl });
    setRsvpSubmitted(true);
  };

  const paragraphs = event.fullDescription
    ? event.fullDescription.split('\n\n')
    : [event.shortDescription || ''];

  return (
    <div className="event-detail-page">
      {/* Breadcrumbs Navigation */}
      <div className="event-breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs-list">
            <li><Link to="/">Home</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li><Link to="/events">Events</Link></li>
            <li className="breadcrumbs-separator">/</li>
            <li className="breadcrumbs-current">{event.title}</li>
          </ul>
        </div>
      </div>

      {/* Hero Header */}
      <section className="event-hero">
        <div className="container">
          <div className="event-hero-meta">
            <span className="event-category-badge">{event.categoryLabel || 'Event'}</span>
            <span className={`event-status-pill ${event.isUpcoming ? 'upcoming' : 'past'}`}>
              {event.isUpcoming ? 'Upcoming Event' : 'Past Event'}
            </span>
            {event.grandRoundsNote && (
              <span className="event-status-pill" style={{ background: '#dcfce7', color: '#166534', border: '1px solid #86efac', fontWeight: '700' }}>
                Grand Rounds Event
              </span>
            )}
          </div>

          <h1 className="event-hero-title">{event.title}</h1>

          <div className="event-hero-details">
            <div className="hero-detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>{event.displayDate || (typeof event.date === 'string' ? event.date : `${event.date?.day} ${event.date?.month} ${event.date?.year || ''}`)}</span>
            </div>

            {event.time && (
              <div className="hero-detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <span>{event.time}</span>
              </div>
            )}

            <div className="hero-detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="event-main-content">
        <div className="container">
          <div className="event-layout-grid">
            {/* Primary Left Column */}
            <div className="event-primary-column">
              {/* Event Flyer / Media Card */}
              {event.image && (
                <div className="event-media-card">
                  <img
                    src={event.image}
                    alt={`${event.title} flyer`}
                    onError={(e) => {
                      e.currentTarget.src = event.fallbackImage || '/Content/Events/bridge.jpg';
                    }}
                  />
                  <div style={{ marginTop: '14px', fontSize: '13px', color: '#64748b' }}>
                    <a
                      href={event.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#003594', fontWeight: '600', textDecoration: 'none' }}
                    >
                      View Flyer in Full Resolution &rarr;
                    </a>
                  </div>
                </div>
              )}

              {/* Event Description Card */}
              <div className="event-body-card">
                <h2>About This Event</h2>
                <div className="event-description-text">
                  {paragraphs.map((para, idx) => (
                    <p key={idx} style={{ marginBottom: '16px' }}>{para}</p>
                  ))}
                </div>

                {/* Highlights List */}
                {event.highlights && event.highlights.length > 0 && (
                  <div style={{ marginTop: '30px' }}>
                    <h3 style={{ fontSize: '20px', color: '#001f54', marginBottom: '14px' }}>
                      Key Highlights &amp; Discussion Topics
                    </h3>
                    <ul className="event-highlights-list">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Assigned Readings / Articles */}
                {event.readingArticles && event.readingArticles.length > 0 && (
                  <div style={{ marginTop: '30px' }}>
                    <h3 style={{ fontSize: '20px', color: '#001f54', marginBottom: '14px' }}>
                      Assigned Readings &amp; Literature
                    </h3>
                    <div className="event-readings-list">
                      {event.readingArticles.map((art, idx) => (
                        <a
                          key={idx}
                          href={art.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-reading-card"
                        >
                          <div className="event-reading-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                            </svg>
                          </div>
                          <div className="event-reading-content">
                            <h4>{art.title}</h4>
                            <div style={{ marginTop: '4px' }}>
                              {art.journal && (
                                <span className="event-reading-journal">{art.journal}</span>
                              )}
                              <span className="event-reading-link-text">Read Full Text &rarr;</span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* QR / GroupMe Callout Box */}
                {event.qrNote && (
                  <div className="event-callout-box">
                    <div className="event-callout-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="event-callout-content">
                      <h4>Book Club Community Notice</h4>
                      <p>
                        {event.qrNote}
                        {event.groupMeUrl && (
                          <span style={{ display: 'block', marginTop: '6px' }}>
                            <a
                              href={event.groupMeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#003594', fontWeight: '700', textDecoration: 'underline' }}
                            >
                              Join the GroupMe for Updates &rarr;
                            </a>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {/* Grand Rounds Callout Box */}
                {event.grandRoundsNote && (
                  <div className="event-callout-box" style={{ background: '#f0fdf4', borderColor: '#86efac', marginTop: '16px' }}>
                    <div className="event-callout-icon" style={{ background: '#dcfce7', color: '#166534' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <div className="event-callout-content">
                      <h4 style={{ color: '#166534' }}>Public Health Grand Rounds Credit</h4>
                      <p style={{ color: '#14532d', fontWeight: '500' }}>
                        {event.grandRoundsNote}
                      </p>
                    </div>
                  </div>
                )}

                {/* Slide Presentation Download */}
                {event.download && (
                  <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                    <a href={event.download} download className="event-resource-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Event Presentation Slides (.pptx)
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Right Column */}
            <div className="event-sidebar-column">
              {/* Event Details Card */}
              <div className="sidebar-card event-details-card">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Event Information
                </h3>

                <div className="info-item">
                  <div className="info-label">Date</div>
                  <div className="info-value">{event.displayDate || (typeof event.date === 'string' ? event.date : `${event.date?.day} ${event.date?.month}`)}</div>
                </div>

                {event.time && (
                  <div className="info-item">
                    <div className="info-label">Time</div>
                    <div className="info-value">{event.time}</div>
                  </div>
                )}

                <div className="info-item">
                  <div className="info-label">Location</div>
                  <div className="info-value">{event.location}</div>
                  {event.address && (
                    <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>{event.address}</div>
                  )}
                </div>

                {/* Map Directions Button */}
                {(event.mapUrl || (event.address && !event.address.toLowerCase().includes('zoom'))) && (
                  <a
                    href={event.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sidebar-directions"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    Get Directions &rarr;
                  </a>
                )}

                {/* Zoom Virtual Details */}
                {event.zoomUrl && (
                  <div className="info-item" style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                    <div className="info-label">Virtual Link</div>
                    <a
                      href={event.zoomUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#003594', fontWeight: '600', fontSize: '14px', textDecoration: 'underline' }}
                    >
                      {event.zoomLabel || (event.location?.includes('Teams') ? 'Join Microsoft Teams Meeting \u2192' : 'Join Zoom Meeting \u2192')}
                    </a>
                    {event.meetingId && (
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
                        Meeting ID: {event.meetingId}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* RSVP Card */}
              {event.isUpcoming ? (
                <div className="sidebar-card rsvp-card">
                  <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <line x1="20" y1="8" x2="20" y2="14" />
                      <line x1="23" y1="11" x2="17" y2="11" />
                    </svg>
                    RSVP &amp; Attend
                  </h3>
                  <p>Let us know you're attending so we can prepare materials and send reminder updates!</p>

                  {event.rsvpUrl && (
                    <a
                      href={event.rsvpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-official-portal"
                    >
                      {event.rsvpLabel || 'Official RSVP Form'} &rarr;
                    </a>
                  )}

                  {!rsvpSubmitted ? (
                    <form onSubmit={handleRsvpSubmit}>
                      <div className="rsvp-form-group">
                        <label htmlFor="rsvpName">Full Name *</label>
                        <input
                          id="rsvpName"
                          type="text"
                          required
                          placeholder="e.g. Jane Doe"
                          value={rsvpData.name}
                          onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                        />
                      </div>

                      <div className="rsvp-form-group">
                        <label htmlFor="rsvpEmail">Email Address *</label>
                        <input
                          id="rsvpEmail"
                          type="email"
                          required
                          placeholder="pitt_email@pitt.edu"
                          value={rsvpData.email}
                          onChange={(e) => setRsvpData({ ...rsvpData, email: e.target.value })}
                        />
                      </div>

                      <div className="rsvp-form-group">
                        <label htmlFor="rsvpRole">Affiliation / Role</label>
                        <select
                          id="rsvpRole"
                          value={rsvpData.role}
                          onChange={(e) => setRsvpData({ ...rsvpData, role: e.target.value })}
                        >
                          <option value="Undergraduate Student">Undergraduate Student</option>
                          <option value="Medical Student">Medical Student</option>
                          <option value="Public Health Student">Public Health Student</option>
                          <option value="Resident / Fellow">Resident / Fellow</option>
                          <option value="Faculty / Clinician">Faculty / Clinician</option>
                          <option value="Community Member">Community Member</option>
                        </select>
                      </div>

                      <div className="rsvp-form-group">
                        <label htmlFor="rsvpNotes">Questions or Notes</label>
                        <textarea
                          id="rsvpNotes"
                          rows="2"
                          placeholder="Any questions for the speakers?"
                          value={rsvpData.notes}
                          onChange={(e) => setRsvpData({ ...rsvpData, notes: e.target.value })}
                        />
                      </div>

                      <button type="submit" className="btn-submit-rsvp">
                        Submit RSVP
                      </button>
                    </form>
                  ) : (
                    <div className="rsvp-success-message" style={{ display: 'block' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <h4 style={{ margin: '0 0 4px 0', color: '#166534' }}>You're Registered!</h4>
                      <p style={{ margin: 0, fontSize: '13px', color: '#15803d' }}>
                        Thank you for RSVPing for {event.title}. We look forward to seeing you!
                      </p>
                    </div>
                  )}

                  <a
                    href={`mailto:${event.rsvpEmail || 'streetmedicineatpitt@gmail.com'}?subject=Question regarding ${encodeURIComponent(event.title)}`}
                    className="btn-email-questions"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    Email Question to SM@P
                  </a>
                </div>
              ) : (
                <div className="sidebar-card past-event-notice-card">
                  <h4 style={{ margin: '0 0 8px 0', color: '#001f54' }}>Past Event Archive</h4>
                  <p style={{ margin: '0 0 14px 0' }}>
                    This event has concluded. You can review slides, materials, and discussion summaries above.
                  </p>
                  <Link to="/events" className="btn btn-secondary" style={{ width: '100%', boxSizing: 'border-box', display: 'block', textAlign: 'center' }}>
                    View Upcoming Events
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Footer Back Navigation */}
          <div className="event-footer-nav">
            <Link to="/events" className="btn-back-events">
              &larr; Back to All Events &amp; Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetail;

