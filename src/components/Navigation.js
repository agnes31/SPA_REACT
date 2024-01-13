import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <nav className="flex items-center justify-between pb-5 mr-10  text-2xl">
      <img src={logo} alt="Logo" className="h-28 w-auto ml-10" />
      <ul className="flex space-x-14 font-bold text-xl">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Accueil
          </Link>
        </li>
        <li>
          <Link to="/catalogue">
            <FontAwesomeIcon icon={faBookOpen} /> Catalogue
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
