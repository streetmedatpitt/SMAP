import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    // Timeline Animation on Scroll - MATCHING OLD WORKING VERSION
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          timelineObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineItems.forEach(item => {
      item.style.animationPlayState = 'paused';
      timelineObserver.observe(item);
    });

    // Team Member Cards Hover Effect
    const teamMembers = document.querySelectorAll(
      '.board-member, .liaison-member, .resource-member, ' +
      '.events-education-member, .research-member'
    );

    const handleMemberEnter = (e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
    };

    const handleMemberLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    };

    teamMembers.forEach(member => {
      member.addEventListener('mouseenter', handleMemberEnter);
      member.addEventListener('mouseleave', handleMemberLeave);
    });

    // School Cards Animation
    const schoolCards = document.querySelectorAll('.schools-column p');

    const schoolObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 100);
          schoolObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    schoolCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.style.transition = 'all 0.5s ease';
      schoolObserver.observe(card);
    });

    // Smooth Reveal for Sections
    const sections = document.querySelectorAll('.team-section, .volunteers-section, .history-section');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      section.classList.add('reveal-section');
      sectionObserver.observe(section);
    });

    // Apply Button Hover Effect
    const applyButton = document.querySelector('.cta-section .btn');

    const handleButtonEnter = (e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 184, 28, 0.5)';
    };

    const handleButtonLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 184, 28, 0.4)';
    };

    if (applyButton) {
      applyButton.addEventListener('mouseenter', handleButtonEnter);
      applyButton.addEventListener('mouseleave', handleButtonLeave);
    }

    // Add smooth scrolling for internal links
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId !== '#' && targetId !== '') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup listeners & observers on unmount
    return () => {
      timelineObserver.disconnect();
      schoolObserver.disconnect();
      sectionObserver.disconnect();

      teamMembers.forEach(member => {
        member.removeEventListener('mouseenter', handleMemberEnter);
        member.removeEventListener('mouseleave', handleMemberLeave);
      });

      if (applyButton) {
        applyButton.removeEventListener('mouseenter', handleButtonEnter);
        applyButton.removeEventListener('mouseleave', handleButtonLeave);
      }

      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Image Section */}
      <section className="hero-image-section">
        <div className="hero-image-wrapper">
          <img src="/Content/About us/Team.jpg" alt="Street Medicine at Pitt Team" className="hero-banner-image" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="what-we-do-photos about-who-we-are">
        <div className="container two-col-photos">
          <div className="photos-text">
            <h2 className="section-header">Who We Are</h2>
            <div className="section-underline"></div>
            <p className="lead">
              Street Medicine at Pitt is a student-run organization dedicated to bringing compassionate,
              person-centered healthcare directly to those experiencing homelessness in Pittsburgh.
              We believe that access to care is a human right and that meaningful change begins
              with trust, respect, and presence.
            </p>
            <p className="lead">
              Our team of students, clinicians, and community partners works together to reduce
              barriers to healthcare, advocate for social equity, and build sustainable relationships
              that extend beyond a single encounter. Every week, we meet individuals where they are
              in encampments, shelters, and on the streets, offering medical care, connection, and dignity.
            </p>
            <blockquote className="about-quote">
              <em>"Our mission has always been simple: meet people where they are, provide care without judgment, and advocate for those whose voices often go unheard."</em>
              <strong>- Founding Team</strong>
            </blockquote>
          </div>

          <div className="photos-right-grid">
            <figure className="tile tile-tall">
              <img
                src="/Content/Volunteer/f87dd0d59820de4baebb8479a940b33a.jpg"
                alt="Prepping supplies before rounds"
                loading="lazy"
              />
            </figure>
            <figure className="tile">
              <img
                src="/Content/Volunteer/048132af5e4a32730088f5f14b9e7ba4.jpg"
                alt="Street Rounds Photo 17"
                className="rightTopPhoto"
                loading="lazy"
              />
            </figure>
            <figure className="tile">
              <img
                src="/Content/Volunteer/eaf1b7edfcb017b56e451276c2e5e1c9.jpg"
                alt="Street Rounds Photo 6"
                className="rightMiddlePhoto"
                loading="lazy"
              />
            </figure>
            <figure className="tile">
              <img
                src="/Content/Volunteer/f4ee4a184900cb2237bd59eb967d843b.jpg"
                alt="Conversation and check-ins"
                loading="lazy"
              />
            </figure>
            <figure className="tile">
              <img
                src="/Content/Volunteer/8a3425fc76a1229f0dfd4291a581d57a.jpg"
                alt="Street Rounds Photo 24"
                className="bottomMiddlePhoto"
                loading="lazy"
              />
            </figure>
            <figure className="tile">
              <img
                src="/Content/Volunteer/fb0f25152860054a46f1a88364b0230d.jpg"
                alt="Warm clothing and hygiene kits"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <p className="history-intro">
            Since 2021, Street Medicine at Pitt has evolved from a student initiative into an internationally
            recognized model for interdisciplinary education, clinical innovation, and advocacy for people
            experiencing homelessness.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <p>
                  <strong>The Beginning:</strong> Founded by students Antonio Gumucio, Rebecca Mackenzie,
                  Paul Seraly, Cameron Metz, and Nicole Alindogan. First street rounds launched in Oakland
                  on September 22, 2021.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <p>
                  <strong>Sustained Support:</strong> Annual funding from the Cooper Fund and UPMC Shadyside
                  Department of Medicine enabled program growth, direct outreach, and assistance with housing,
                  employment, and healthcare access.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <p>
                  <strong>Clinical Integration:</strong> Launched the Street Medicine Consult Service at UPMC
                  Shadyside, integrating street medicine principles into inpatient care for people
                  experiencing homelessness.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <p>
                  <strong>Expanding Infrastructure:</strong> Beckwith Institute grant funded social workers
                  for the Consult Service. In August, the Center for Street Medicine was established at Pitt
                  School of Medicine, expanding infrastructure for education, clinical care, and research.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2025-Present</div>
              <div className="timeline-content">
                <p>
                  <strong>Groundbreaking Initiatives:</strong> Funded new Street Medicine positions through
                  Shadyside Hospital Foundation and Allegheny County Opioid Settlement. Launched the world's
                  first Street Medicine Law Practicum at Pitt School of Law and began coordinating medical teams at
                  the Allegheny County Winter Shelter.
                </p>
              </div>
            </div>
          </div>

          <div className="leadership-history">
            <h3>Presidential Leadership</h3>
            <p>
              <strong>Antonio Gumucio</strong> – Founding President<br />
              <strong>Julia Lam</strong> – President<br />
              <strong>Kat O'Connor</strong> – President<br />
              <strong>Sam Ding</strong> – President<br />
              <strong>Helena Oft</strong> – President<br />
              <strong>Victoria Bacchi</strong> – Co-President<br />
              <strong>Arabella Johnson</strong> – Co-President
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h1 className="section-title">The Team</h1>
          <p className="section-subtitle">
            Our dedicated board members, students, and faculty advisors are the heart of Street Medicine at Pitt.
          </p>

          {/* Student Leadership Board */}
          <div className="team-category">
            <h2 className="category-title">Student Leadership</h2>
            <div className="liaison-grid leadership-grid">
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/Arabella-Johnson.JPG" alt="Arabella Johnson" />
                </div>
                <h3>Arabella Johnson</h3>
                <p>Co-President</p>
              </div>
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/Bacchi, Victoria M.jpg" alt="Victoria Bacchi" />
                </div>
                <h3>Victoria Bacchi</h3>
                <p>Co-President</p>
              </div>
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/elise berthold.jpeg" alt="Elise Berthold" />
                </div>
                <h3>Elise Berthold</h3>
                <p>Vice President</p>
              </div>
              {/* Commented out per request:
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/SamDing.jpg" alt="Sam Ding" />
                </div>
                <h3>Sam Ding</h3>
                <p>Safety/QI</p>
              </div>
              */}
            </div>
          </div>

          {/* =========================================================
               COMMITTEES SECTION (COMMENTED OUT PER REQUEST)
               To re-enable any committee, remove the comment tags for that block.
               ========================================================= */}

          {/* [COMMENTED OUT] Resource Tracking
          <div className="team-category">
            <h2 className="category-title">Resource Tracking</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Helena Oft</h3><p></p></div>
              <div className="name-item"><h3>Allyson Andrews</h3><p></p></div>
              <div className="name-item"><h3>Heather Diegert</h3><p></p></div>
              <div className="name-item"><h3>Sydney Gregg</h3><p></p></div>
              <div className="name-item"><h3>Tyler Kiss</h3><p></p></div>
              <div className="name-item"><h3>Olivia Miller</h3><p></p></div>
              <div className="name-item"><h3>Anne Charles</h3><p></p></div>
              <div className="name-item"><h3>Julia McAndrew</h3><p></p></div>
              <div className="name-item"><h3>John Keating</h3><p></p></div>
              <div className="name-item"><h3>Anna Rutkowski</h3><p></p></div>
              <div className="name-item"><h3>Olivia Barrett</h3><p></p></div>
              <div className="name-item"><h3>Michael Washowich</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Volunteer Committee
          <div className="team-category">
            <h2 className="category-title">Volunteer Committee</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Heather Diegert</h3><p></p></div>
              <div className="name-item"><h3>Ronit Deshpande</h3><p></p></div>
              <div className="name-item"><h3>Christian Porter</h3><p></p></div>
              <div className="name-item"><h3>Brina Ratangee</h3><p></p></div>
              <div className="name-item"><h3>Kevin Kim</h3><p></p></div>
              <div className="name-item"><h3>Mariam Amr</h3><p></p></div>
              <div className="name-item"><h3>Akshay Uppala</h3><p></p></div>
              <div className="name-item"><h3>Josh Dean</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Research
          <div className="team-category">
            <h2 className="category-title">Research</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Simon Rodriguez</h3><p></p></div>
              <div className="name-item"><h3>Colin Henchy</h3><p></p></div>
              <div className="name-item"><h3>Ryan McConnell</h3><p></p></div>
              <div className="name-item"><h3>Geneva Flarend</h3><p></p></div>
              <div className="name-item"><h3>Breanna Sullivan</h3><p></p></div>
              <div className="name-item"><h3>Maris Pedlow</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Events & Education
          <div className="team-category">
            <h2 className="category-title">Events & Education</h2>
            <div className="events-education-grid">
              <div className="events-education-member">
                <div className="member-image">
                  <img src="/Content/About us/Bacchi, Victoria M.jpg" alt="Victoria Bacchi" />
                </div>
                <h3>Victoria Bacchi</h3>
                <p>Co-President</p>
              </div>
              <div className="events-education-member">
                <div className="member-image">
                  <img src="/Content/About us/manreet cheema.jpeg" alt="Manreet Cheema" />
                </div>
                <h3>Manreet Cheema</h3>
                <p></p>
              </div>
              <div className="events-education-member">
                <div className="member-image">
                  <img src="/Content/About us/NatalieHogan.jpeg" alt="Natalie Hogan" />
                </div>
                <h3>Natalie Hogan</h3>
                <p></p>
              </div>
            </div>
            <div className="names-only-list">
              <div className="name-item"><h3>Shourik Das</h3><p></p></div>
              <div className="name-item"><h3>Azrael Hurwitz</h3><p></p></div>
              <div className="name-item"><h3>Emma Shunk</h3><p></p></div>
              <div className="name-item"><h3>Ava Polakowski</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Social Media Committee
          <div className="team-category">
            <h2 className="category-title">Social Media Committee</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Megan Stafford</h3><p></p></div>
              <div className="name-item"><h3>Divya Tase</h3><p></p></div>
              <div className="name-item"><h3>Katlin Perazzo Rodrigues Rosendo</h3><p></p></div>
              <div className="name-item"><h3>Brooke Hudec</h3><p></p></div>
              <div className="name-item"><h3>Krrish Madavarapu</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Communications
          <div className="team-category">
            <h2 className="category-title">Communications</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Tom Brewton</h3><p>Philanthropy</p></div>
              <div className="name-item"><h3>Liz Reid</h3><p>Media Relations</p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Documentation & Scheduling
          <div className="team-category">
            <h2 className="category-title">Documentation & Scheduling</h2>
            <div className="liaison-grid">
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/elise berthold.jpeg" alt="Elise Berthold" />
                </div>
                <h3>Elise Berthold</h3>
                <p>Scheduling</p>
              </div>
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/divya katti.jpeg" alt="Divya Katti" />
                </div>
                <h3>Divya Katti</h3>
                <p></p>
              </div>
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/Disha Satapathy.jpeg" alt="Disha Satapathy" />
                </div>
                <h3>Disha Satapathy</h3>
                <p></p>
              </div>
              <div className="liaison-member">
                <div className="member-image placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3>Allen Kim</h3>
                <p></p>
              </div>
              <div className="liaison-member">
                <div className="member-image">
                  <img src="/Content/About us/sanah handu.jpeg" alt="Sanah Handu" />
                </div>
                <h3>Sanah Handu</h3>
                <p></p>
              </div>
            </div>
            <div className="names-only-list">
              <div className="name-item"><h3>Louise Hicks</h3><p></p></div>
              <div className="name-item"><h3>Julia Burg</h3><p></p></div>
              <div className="name-item"><h3>Riya Naguluri</h3><p></p></div>
              <div className="name-item"><h3>Rishi Bahri</h3><p></p></div>
              <div className="name-item"><h3>Tiffany Habib</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Clinical Coordinators
          <div className="team-category">
            <h2 className="category-title">Coordinators</h2>
            <div className="resource-grid">
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/lindsey olivere.jpg" alt="Lindsey Olivere" />
                </div>
                <h3>Lindsey Olivere</h3>
                <p>Vascular Clinic Coordinator</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/divya katti.jpeg" alt="Divya Katti" />
                </div>
                <h3>Divya Katti</h3>
                <p>Vascular Clinic Coordinator</p>
              </div>
            </div>
            <div className="names-only-list">
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Onboarding
          <div className="team-category">
            <h2 className="category-title">Onboarding</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Sam Ding</h3><p>Onboarding</p></div>
              <div className="name-item"><h3>Debbie Harrington</h3><p>Onboarding</p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Business Committee
          <div className="team-category">
            <h2 className="category-title">Business Committee</h2>
            <div className="names-only-list">
              <div className="name-item"><h3>Jake Littman</h3><p></p></div>
              <div className="name-item"><h3>Rachana Senthil</h3><p></p></div>
              <div className="name-item"><h3>Ariana Ghandi</h3><p></p></div>
            </div>
          </div>
          */}

          {/* [COMMENTED OUT] Liaisons
          <div className="team-category">
            <h2 className="category-title">Liaisons</h2>
            <div className="liaison-committee-groups">
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">SMISC</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Josh Morgenlander</h3><p>SMISC Rep</p></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Occupational Therapy</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Ava Giatras</h3></div>
                  <div className="name-item"><h3>Julia Lam</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Social Work</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Christian Porter</h3></div>
                  <div className="name-item"><h3>Justin Grotelueschen</h3></div>
                  <div className="name-item"><h3>Jeanette Valentine</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Nutrition</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Leah Klopp</h3></div>
                  <div className="name-item"><h3>Caroline Passerrello</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Public Health</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Grace Osborne</h3></div>
                  <div className="name-item"><h3>Beth Hoffman</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Legal</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Avery Sirwatka</h3></div>
                  <div className="name-item"><h3>Mary Crossley</h3></div>
                  <div className="name-item"><h3>Tomar Pierson-Brown</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Dental</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Adriana Modesto</h3></div>
                  <div className="name-item"><h3>Mary Bennardi</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Engineering</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Daniel Hilbert</h3></div>
                  <div className="name-item"><h3>Lee Fisher</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Computer Science</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Nick Cao</h3></div>
                  <div className="name-item"><h3>Heather Diegert</h3></div>
                  <div className="name-item"><h3>Victoria Bacchi</h3></div>
                </div>
              </div>
              <div className="liaison-committee-group">
                <h3 className="liaison-committee-label">Pharmacy</h3>
                <div className="names-only-list">
                  <div className="name-item"><h3>Kieran Ziegenfus</h3></div>
                  <div className="name-item"><h3>Ryan Kielty</h3></div>
                  <div className="name-item"><h3>Greg Castelli</h3></div>
                  <div className="name-item"><h3>Martha Ngundu</h3></div>
                  <div className="name-item"><h3>Sharon Connor</h3></div>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Faculty Advisors & Physicians */}
          <div className="team-category">
            <h2 className="category-title">Faculty Advisors & Physicians</h2>
            <div className="resource-grid faculty-photo-grid">
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/JimWithers.png" alt="Dr. Jim Withers" />
                </div>
                <h3>Dr. Jim Withers</h3>
                <p>Distinguished Honorary Advisor</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img
                    className="faculty-photo-center anna-photo"
                    src="/Content/About us/AnnaWhite.jpg"
                    alt="Dr. Anna Marie White"
                  />
                </div>
                <h3>Dr. Anna Marie White</h3>
                <p>Medical Director</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/BethHoffman.jpg" alt="Dr. Beth Hoffman" />
                </div>
                <h3>Dr. Beth Hoffman</h3>
                <p>Public Health Advisor</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Fisher_Lee_res.jpg" alt="Dr. Lee Fisher" />
                </div>
                <h3>Dr. Lee Fisher</h3>
                <p>Research Advisor</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Josh-Shulman.png" alt="Dr. Joshua Shulman" />
                </div>
                <h3>Dr. Joshua Shulman</h3>
                <p>Director of Street Addiction Medicine</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Mary-Crossley.png" alt="Dr. Mary Crossley" />
                </div>
                <h3>Dr. Mary Crossley</h3>
                <p>Law Street Medicine Course</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Gregory-Castelli.png" alt="Greg Castelli" />
                </div>
                <h3>Greg Castelli</h3>
                <p>Pharmacist</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Justin-Grotelueschen.png" alt="Justin Grotelueschen" />
                </div>
                <h3>Justin Grotelueschen</h3>
                <p>Social Work</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Heather-Mikes.png" alt="Dr. Heather Mikes" />
                </div>
                <h3>Dr. Heather Mikes</h3>
                <p>Physician</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Bob-Hickey.png" alt="Dr. Bob Hickey" />
                </div>
                <h3>Dr. Bob Hickey</h3>
                <p>Physician</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Adriana-Modesto.png" alt="Dr. Adriana Modesto" />
                </div>
                <h3>Dr. Adriana Modesto</h3>
                <p>Dental Sponsor</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Caroline-Passerrello.png" alt="Dr. Caroline Passerrello" />
                </div>
                <h3>Dr. Caroline Passerrello</h3>
                <p>Director of Nutrition</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Martha-Ngundu.png" alt="Dr. Martha Ngundu" />
                </div>
                <h3>Martha Ngundu</h3>
                <p>Core Faculty</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Mark-Meyer.png" alt="Dr. Mark Meyer" />
                </div>
                <h3>Dr. Mark Meyer</h3>
                <p>Physician</p>
              </div>
              <div className="resource-member">
                <div className="member-image">
                  <img src="/Content/About us/Enrico-Novelli.png" alt="Dr. Enrico Novelli" />
                </div>
                <h3>Dr. Enrico Novelli</h3>
                <p>Physician</p>
              </div>
            </div>

            <div className="names-only-list">
              <div className="name-item">
                <h3>Rebecca Mackenzie</h3>
                <p>Advisor on PEH</p>
              </div>
              <div className="name-item">
                <h3>Jeanette Valentine</h3>
                <p>Social Work</p>
              </div>
              <div className="name-item">
                <h3>Dianne Charity</h3>
                <p>Core Faculty</p>
              </div>
              <div className="name-item">
                <h3>Rachel Bitterice</h3>
                <p>Consult Service</p>
              </div>
              <div className="name-item">
                <h3>Amanda Lenhard</h3>
                <p>Consult Service</p>
              </div>
              <div className="name-item">
                <h3>Chris Hensler</h3>
                <p>Psychiatry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers From Section */}
      <section className="volunteers-section">
        <div className="container">
          <h3 className="volunteers-title">Our volunteers are from</h3>

          <div className="schools-grid">
            <div className="schools-column">
              <a href="https://www.publichealth.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Public Health</p>
              </a>
              <a href="https://www.as.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Dietrich School of Arts and Sciences</p>
              </a>
              <a href="https://www.sci.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Computing and Information</p>
              </a>
              <a href="https://www.engineering.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Swanson School of Engineering</p>
              </a>
              <a href="https://www.medschool.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Medical School</p>
              </a>
            </div>
            <div className="schools-column">
              <a href="https://www.pharmacy.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Pharmacy</p>
              </a>
              <a href="https://www.shrs.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Health and Rehabilitation Sciences</p>
              </a>
              <a href="https://www.socialwork.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Social Work</p>
              </a>
              <a href="https://www.law.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Law</p>
              </a>
              <span className="school-link">
                <p>And More</p>
              </span>
            </div>
          </div>

          <div className="volunteers-message">
            <p>
              We're proud to have a diverse team and are always looking for more compassionate hands to join us.
              Students of all majors and from any school are welcome—no experience needed, just a heart for service.
            </p>
          </div>

          <div className="cta-section" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/volunteer" className="btn btn-primary">Get Involved</Link>
            <Link to="/highlights" className="btn btn-secondary">View Highlights &amp; Recognitions &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
