import './Navbar.css';
import React, { useState,useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import kc from '../../utils/keycloak';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    setIsLoggedIn(kc.authenticated);
  }, []);
  return (
    <nav>
      <Link to="/" className="title">
        UninaTopics
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
            <li>
              <NavLink to="/room">Room</NavLink>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;