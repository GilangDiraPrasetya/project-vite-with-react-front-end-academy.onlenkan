import logo from '../.././Images/logo-official-blue.png';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
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
                <NavLink to="/" exact activeClassName="active" className="nav-link">
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
              <li className="nav-item mt-1 mt-md-0">
                <NavLink to="/login" activeClassName="active" className="nav-link">
                  Masuk
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" activeClassName="active" className="btn border border-secondary rounded text-dark fw-semibold px-4">
                  Daftar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
