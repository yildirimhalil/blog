import React from 'react';
import { Link } from 'react-router-dom'; // React Router Link bileşeni
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow">
      <nav className="navbar container mx-auto d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={logo}
              alt="Psikoloji Blogu"
              width="200"
              height="100"
            />
          </Link>
        </div>

        {/* Navigasyon Menüsü */}
        <ul className="nav d-flex align-items-center">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link text-dark hover:underline">Ana Sayfa</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/about" className="nav-link text-dark hover:underline">Hakkımızda</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/articles" className="nav-link text-dark hover:underline">Makale</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
