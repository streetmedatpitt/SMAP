import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const handleSubmenuClick = (e, menuName) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      
      if (menuName === 'Volunteer' && openSubmenu === 'Volunteer') {
        // Second click on Volunteer - navigate to volunteer page
        window.location.href = '/volunteer';
        return;
      }
      
      setOpenSubmenu(openSubmenu === menuName ? null : menuName);
    }
  };

  return (
    <>
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/Content/logo/logo.png" alt="Street Medicine at Pitt Logo" className="logo-image" />
            <span className="logo-text">Street Medicine at Pitt</span>
          </Link>
          
          <button 
            type="button" 
            id="menuToggle" 
            className={mobileMenuOpen ? 'active' : ''}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="navMenu" className={mobileMenuOpen ? 'mobile-active' : ''}>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/projects" onClick={closeMobileMenu}>Projects & Articles</Link></li>
            <li><Link to="/resources" onClick={closeMobileMenu}>Resources</Link></li>
            <li><Link to="/events" onClick={closeMobileMenu}>Events & Calendar</Link></li>
            <li><Link to="/donate" onClick={closeMobileMenu}>Donate</Link></li>
            
            <li className={`has-submenu ${openSubmenu === 'Volunteer' ? 'show-submenu' : ''}`}>
              <a 
                href="#" 
                onClick={(e) => handleSubmenuClick(e, 'Volunteer')}
              >
                Volunteer
              </a>
              <ul className="submenu">
                <li><Link to="/orientation" onClick={closeMobileMenu}>Street Rounds</Link></li>
                <li><Link to="/volunteer" onClick={closeMobileMenu}>Get Involved</Link></li>
                <li><Link to="/meals-that-matter" onClick={closeMobileMenu}>Meals That Matter</Link></li>
              </ul>
            </li>
            
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
}

export default Navbar;