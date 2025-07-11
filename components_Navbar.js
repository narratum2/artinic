import { Link } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className="navbar">
      <div className="logo">Artinic</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
};

export default Navbar;