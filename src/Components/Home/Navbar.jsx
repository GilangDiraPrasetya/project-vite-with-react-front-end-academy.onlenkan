import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo/logo-official-blue.png';

function Navbar() {
  const avatar = 'https://ui-avatars.com/api/?name=';

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    if (token) {
      setIsAuthenticated(true);
      setName(storedName);
      setEmail(storedEmail);
    } else {
      setIsAuthenticated(false);
      setName('');
      setEmail('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setIsAuthenticated(false);
    setName('');
    setEmail('');
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Onlenkan Logo Official" />
          </Link>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-md-0 ms-md-3" id="navbarMenu">
            <ul className="navbar-nav gap-1 gap-md-3">
              <li className="nav-item">
                <NavLink to="/" exact="true" activeClassName="active" className="nav-link">
                  Beranda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kelas" activeClassName="active" className="nav-link">
                  Kelas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/event" activeClassName="active" className="nav-link">
                  Event
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/source-code" activeClassName="active" className="nav-link">
                  Source Code
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/artikel" activeClassName="active" className="nav-link">
                  Artikel
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav gap-3 ms-auto">
              {!isAuthenticated ? (
                <>
                  <li className="nav-item mt-1 mt-md-0">
                    <Link to="/login" className="nav-link">
                      Masuk
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="btn border border-secondary rounded text-dark fw-semibold px-4">
                      Daftar
                    </Link>
                  </li>
                </>
              ) : (
                <ul className="nav-item dropdown ps-0">
                  <a href="#" className="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown">
                    <img src={avatar + name} alt="" className="avatar rounded-circle" />
                    <p>{name}</p>
                  </a>

                  <ul className="dropdown-menu border-0 shadow-sm" style={{ left: 'auto', right: 0 }}>
                    <li className="mb-2">
                      <Link to="/member/" className="dropdown-item d-flex align-items-center justify-content-between gap-2">
                        Dashboard Saya
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item d-flex align-items-center justify-content-between gap-2" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </ul>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
