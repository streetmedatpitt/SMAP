import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectsArticles() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      status: "ongoing",
      statusLabel: "Ongoing Research",
      image: "/Content/Project_articles/Projects/Wound Care Symposium Poster.jpg",
      pdfLink: "/Content/Project_articles/Projects/projects_pdf/Wound Care Symposium Poster PDF.pdf",
      title: "Through the Lens: Using Photovoice to Illuminate Barriers to Wound Care Among Unhoused People Who Use Drugs With Xylazine-Induced Wounds",
      team: "Ronit Deshpande, Max Hurwitz DO, Raagini Jawa MD MPH FASAM",
      affiliations: "University of Pittsburgh School of Medicine, UPMC Dept. of Physical Medicine and Rehabilitation",
      description: "This qualitative study uses Photovoice to document lived experiences and barriers to wound care among unhoused people who use drugs with xylazine-induced wounds. Participants receive cameras to capture their care journey; interviews explore stigma, access, and the need for provider education and low-barrier wound-care supplies.",
      meta: [
        { icon: "people", text: "Method: Photovoice + interviews" },
        { icon: "clock", text: "Status: In progress" }
      ],
      findings: {
        title: "Key Findings (Preliminary)",
        items: [
          "Pervasive stigma from healthcare and community deters timely care-seeking",
          "Insurance gaps limit specialty visits, dressings, and antibiotics",
          "Fragmented follow-up causes wound deterioration",
          "Strong demand for low-barrier wound-care kits",
          "Provider education on xylazine wounds improves engagement and trust"
        ]
      }
    },
    {
      status: "past",
      statusLabel: "Past Research",
      image: "/Content/Project_articles/Projects/Decreasing Effectsof Prolonged Noise Exposure.jpg",
      pdfLink: "/Content/Project_articles/Projects/projects_pdf/Decreasing Effects of Prolonged Noise.pdf",
      title: "Decreasing Effects of Prolonged Noise Exposure in Homeless Encampments",
      team: "Ella Jones, Amechi Oruwari, Sean Springer, Colin Henchy",
      advisor: "Dr. Lee Fisher, Street Medicine at Pitt",
      description: "University of Pittsburgh Swanson School of Engineering's senior design class worked with Street Medicine at Pitt to aid residents of a homeless encampment along an interstate. Sound levels can reach ~95 dB (hearing damage at ≥85 dB). The team built 3×6 ft sound panels using Helmholtz resonators to reduce ambient noise below 85 dB, targeting 550, 1000, and 1500 Hz.",
      meta: [
        { icon: "check", text: "Goal: Reduce sound below 85 dB" },
        { icon: "clock", text: "Status: Prototype Completed" }
      ],
      findings: {
        title: "Key Achievements",
        items: [
          "Reduced levels above 85 dB to below threshold",
          ">20 dB reduction with barrier in place",
          "Lightweight, durable, user-friendly",
          "Low-cost design (<$300)",
          "Approx. 3 ft × 6 ft panel"
        ]
      }
    },
    {
      status: "past",
      statusLabel: "Past Research",
      image: "/Content/Project_articles/Projects/Interprofessional Education Experiences in Homeless Healthcare.jpg",
      pdfLink: "/Content/Project_articles/Projects/projects_pdf/Interprofessional Education Experiences in Homeless Healthcare.pdf",
      title: "Interprofessional Education Experiences in Homeless Healthcare",
      team: "Rosemary Sabatino MS, Jatin Singh NRP, Max Hurwitz DO",
      facultyLeads: "Anna Marie White MD, Caroline Passerrello EdD, RDN, LDN",
      description: "This study examines experiential learning for paramedic and dietitian-nutritionist students on SMAP rounds. It evaluates how interprofessional education (IPE) changes understanding of homeless healthcare, collaboration, and patient-centered care. Emergency Medicine and Dietitian-Nutritionist programs participated in 2023–2024.",
      meta: [
        { icon: "people", text: "27 Students (12 EM + 15 DNP)" },
        { icon: "check", text: "24+ Health Disciplines Involved" }
      ],
      findings: {
        title: "Key Findings",
        items: [
          "81% agreed SMAP is an effective community-health clinical opportunity",
          "Greater understanding of interprofessional collaboration",
          "Improved knowledge of other health professionals' training",
          "Higher patient/client satisfaction with interprofessional teams",
          "Reduced costs when treated by interprofessional teams"
        ]
      }
    },
    {
      status: "past",
      statusLabel: "Past Research",
      image: "/Content/Project_articles/Projects/SSFRC.jpg",
      pdfLink: "/Content/Project_articles/Projects/projects_pdf/Reproductive and Sexual Health Needs.pdf",
      title: "Reproductive and Sexual Health Needs of People Experiencing Homelessness: A Qualitative Study",
      team: "Divya Katti, Elise Berhold, Thanmayes Yalounsouk, Carly Marble, Anna Marie White MD, Max Hurwitz DO, Judy Chang MD MPH",
      affiliations: "University of Pittsburgh School of Medicine, UPMC Dept. of Family Medicine, Magee-Women's Research Institute",
      description: "Qualitative interviews exploring access barriers, care experiences, and ways to improve person-centered reproductive and sexual healthcare for people experiencing homelessness. Twenty-one interviews examined structural barriers, clinician interactions, hygiene challenges, and contraception access among individuals with average homelessness duration of 1.31 years.",
      meta: [
        { icon: "people", text: "Method: Qualitative interviews" },
        { icon: "clock", text: "Status: Completed" }
      ],
      findings: {
        title: "Key Findings",
        items: [
          "Access barriers: cost, transportation, ID, and appointment availability",
          "High interest in STI testing and contraception when services are low-barrier",
          "Preference for trauma-informed, nonjudgmental, gender-affirming care",
          "Privacy and safety concerns limit clinic utilization",
          "Care continuity improves when outreach integrates navigation and follow-up"
        ]
      }
    }
  ];

  const researchImpact = [
    {
      year: "Ongoing",
      title: "Xylazine Wound Care Research",
      authors: "Photovoice Study Team",
      description: "Full coding and thematic analysis is forthcoming as recruitment continues. Current preliminary results reveal multi-level challenges in wound care (individual, policy, interpersonal, and community), emphasizing the need for harm reduction-based care and systemic change. Future work will inform clinician training, contraception and abortion policy, and development of low-barrier models of care including accessible wound-care kits and on-site dressing changes."
    },
    {
      year: "Impact",
      title: "Reproductive and Sexual Health Research",
      authors: "Qualitative Interview Study",
      description: "Findings provide a framework to improve the accessibility of reproductive healthcare for people experiencing homelessness. The research highlights the importance of trauma-informed, gender-affirming, and low-barrier services. Results may inform clinician training, contraception policy, abortion access initiatives, and the integration of reproductive health services into street medicine and shelter-based care models. Future directions include expanding menstrual product distribution programs and strengthening care navigation and follow-up systems."
    },
    {
      year: "Next Steps",
      title: "Noise Reduction Project",
      authors: "Engineering Design Team",
      description: "Future work: more tests to reduce anomalies, full-length fence panels to target a broader frequency band, manufacturing/assembly planning, and adaptable mounting for different fence sizes or standalone use."
    },
    {
      year: "Impact",
      title: "Interprofessional Education Program",
      authors: "SHRS Programs Collaboration",
      description: "Participants reported better teamwork skills and understanding of team roles. The model increased diversity and sustainability of IPE by moving from extracurricular volunteering to curriculum-based clinicals."
    }
  ];

  const articles = [
    {
      featured: true,
      image: "/Content/Project_articles/News/Observer-Reporter.png",
      source: "Observer-Reporter",
      title: "WeCare Street Outreach team brings medical care to Washington's unhoused",
      url: "/Content/Project_articles/News/Observer-Reporter-WeCare-Street-Outreach.pdf",
      excerpt: "Highlights Pitt receiving a $2.5 million, five-year grant to expand street medicine residency training across Southwestern Pennsylvania, featuring Medical Director Dr. Anna Marie White.",
      date: "October 17, 2026"
    },
    {
      featured: false,
      image: "/Content/Project_articles/News/d2a3ad6f785979fec0fb6d94473ad241.jpg",
      source: "Pitt Med Magazine",
      title: "Street Medicine at Pitt serves Pittsburghers without homes — and educates future medical professionals",
      url: "https://www.pittmed.pitt.edu/news/street-medicine-at-pitt-student-group-unhoused-care",
      excerpt: "How a student-run organization is transforming care for Pittsburgh's unhoused population while training compassionate providers.",
      date: "Featured Story"
    },
    {
      image: "/Content/Project_articles/News/1d8e654727e150311b31be3630cf9137.jpg",
      source: "The Pitt News",
      title: "'We go where they are': Street Medicine at Pitt provides care to homeless people",
      url: "https://pittnews.com/article/170559/news/we-go-where-they-are-street-medicine-at-pitt-provides-care-to-homeless-people/",
      excerpt: "Coverage of our weekly street rounds and the philosophy behind meeting patients where they are.",
      date: "Campus News"
    },
    {
      image: "/Content/Project_articles/News/0e12bd8c18d31c5b6def6a222ff58803.jpg",
      source: "Pitt Med Magazine",
      title: "Outside influences - Healing happens through connection",
      url: "https://www.pittmed.pitt.edu/news/street-medicine-at-pitt-student-group-unhoused-care",
      excerpt: "Exploring the human connections at the heart of street medicine and how relationships drive healing.",
      date: "Feature"
    }
  ];

  const renderIcon = (type) => {
    switch(type) {
      case 'people':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'clock':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case 'check':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero-section projects-page-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Projects & Articles</h1>
          <p className="page-subtitle">Our ongoing research initiatives and media coverage</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Ongoing Projects
            </button>
            <button 
              className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
              onClick={() => setActiveTab('articles')}
            >
              News & Articles
            </button>
          </div>
        </div>
      </section>

      {/* Projects Tab Content */}
      <section id="projects" className={`tab-content ${activeTab === 'projects' ? 'active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Ongoing Research Projects</h2>
            <p className="section-description">
              Street Medicine at Pitt is committed to advancing the field through innovative engineering solutions
              and interprofessional education. Our ongoing projects focus on improving the quality of life for
              people experiencing homelessness while training the next generation of healthcare professionals.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-poster">
                  <a href={project.image} target="_blank" rel="noopener">
                    <img src={project.image} alt={project.title + " - Poster"} />
                    <div className="project-poster-overlay"></div>
                  </a>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  
                  <div className="project-lead">
                    <span className="label">{project.advisor ? 'Project Team:' : 'Research Team:'}</span>
                    <span>{project.team}</span>
                  </div>
                  
                  {project.advisor && (
                    <div className="project-lead">
                      <span className="label">Faculty Advisor:</span>
                      <span>{project.advisor}</span>
                    </div>
                  )}
                  
                  {project.facultyLeads && (
                    <div className="project-lead">
                      <span className="label">Faculty Leads:</span>
                      <span>{project.facultyLeads}</span>
                    </div>
                  )}
                  
                  {project.affiliations && (
                    <div className="project-lead">
                      <span className="label">Affiliations:</span>
                      <span>{project.affiliations}</span>
                    </div>
                  )}
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    {project.meta.map((item, idx) => (
                      <div key={idx} className="meta-item">
                        {renderIcon(item.icon)}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-highlights">
                    <h4>{project.findings.title}</h4>
                    <ul>
                      {project.findings.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-actions">
                    <a href={project.pdfLink} className="btn-outline" target="_blank" rel="noopener">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '6px'}}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                      View Full Poster (PDF)
                    </a>
                    <Link to="/contact" className="btn-outline">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '6px'}}>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Research Impact Section */}
          <div className="publications-section">
            <h3 className="publications-title">Research Impact & Future Directions</h3>
            <div className="publication-list">
              {researchImpact.map((item, index) => (
                <article key={index} className="publication-item">
                  <span className={`publication-year ${item.year === 'Ongoing' ? 'ongoing' : item.year === 'Next Steps' ? 'next-steps' : ''}`}>
                    {item.year}
                  </span>
                  <div className="publication-content">
                    <h4>{item.title}</h4>
                    <p className="publication-authors">{item.authors}</p>
                    <p className="publication-journal">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Tab Content */}
      <section id="articles" className={`tab-content ${activeTab === 'articles' ? 'active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Street Med in the Spotlight</h2>
            <p className="section-description">
              Read about our impact, student experiences, and the difference we're making in Pittsburgh's communities
              through local and national media coverage.
            </p>
          </div>

          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={index} className={`article-card ${article.featured ? 'featured' : ''}`}>
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-content">
                  <span className="article-source">{article.source}</span>
                  <h3>
                    <a href={article.url} target="_blank" rel="noopener">
                      {article.title}
                    </a>
                  </h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section projects-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Get Involved</h2>
            <p>
              Interested in our research, want to collaborate, or have a story to share? We welcome partnerships
              with academic institutions, healthcare organizations, and media outlets.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsArticles;