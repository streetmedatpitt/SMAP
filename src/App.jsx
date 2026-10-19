import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import ProjectsArticles from './pages/ProjectsArticles';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Orientation from './pages/Orientation';
import Volunteer from './pages/Volunteer';
import MealsThatMatter from './pages/MealsThatMatter';
import Highlights from './pages/Highlights';
import EventDetail from './pages/EventDetail';

import './styles/reset.css';
import './styles/navbar.css';
import './styles/styles.css';
import './styles/about.css';
import './styles/contact.css';
import './styles/donate.css'; 
import './styles/projects-articles.css'; 
import './styles/responsive.css';
import './styles/resources.css';
import './styles/events.css';
import './styles/get_involved.css';
import './styles/volunteer.css';
import './styles/meals-that-matter.css';
import './styles/highlights.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/orientation" element={<Orientation />} />
        <Route path="/meals-that-matter" element={<MealsThatMatter />} />
        <Route path="/projects" element={<ProjectsArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;