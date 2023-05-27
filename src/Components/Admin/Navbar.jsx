import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/logo-official-blue.png';
import Person from '../../Images/artikel/person1.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid flex-nowrap">
          <Link to="/" className="navbar-brand d-block d-md-none">
            <img src={Logo} alt="Onlenkan Logo" />
          </Link>
          <Link to="" className="d-block d-md-none">
            <img src={Person} alt="" className="avatar rounded-circle" />
          </Link>
          <div className="collapse navbar-collapse d-none d-md-block" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <ul className="nav-item dropdown">
                <Link to="/admin-academy/profil#" className="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown">
                  <img src={Person} alt="" className="avatar rounded-circle" />
                  Yunus Almeida
                </Link>

                <ul className="dropdown-menu border-0 shadow-sm" style={{ left: 'auto', right: 0 }}>
                  <li className="mb-2">
                    <Link to="/admin-academy/profil" className="dropdown-item d-flex align-items-center justify-content-between gap-2">
                      Profile Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item d-flex align-items-center justify-content-between gap-2"
                      onClick="event.preventDefault();
                                    document.getElementById('logout-form').submit();"
                    >
                      Logout
                    </Link>
                    <form action="{{ route('logout') }}" method="POST" id="logout-form" className="d-none"></form>
                  </li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
