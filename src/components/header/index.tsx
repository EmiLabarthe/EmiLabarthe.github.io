import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="left">
        Emiliano Labarthe - Portfolio de Machine Learning
      </div>
      <div className="right">
        <a href="/" className="link">Inicio</a>
        <Link to="/articulos" className='link'>Articulos</Link>
        <a href="https://github.com/EmiLabarthe" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
};

export default Header;