import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar glass">
      <h3 className="nav-logo">
        Ma<span className="text-primary">r</span>y
      </h3>
      <div className="nav-actions">
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <div className="nav-buttons">
          <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="btn-primary">Hire Me</button>
        </div>
      </div>
    </nav>
  );
};
