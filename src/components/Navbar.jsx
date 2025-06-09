// src/components/Navbar.jsx
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Mir Akbar Ali Khan</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
};

export default Navbar;
