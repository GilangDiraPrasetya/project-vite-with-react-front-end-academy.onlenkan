import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from '../../assets/images/logo/logo-official-blue.png';

export default function Navbar() {
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
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid flex-nowrap">
          <Link to="/" className="navbar-brand d-block d-md-none">
            <img src={logo} alt="Onlenkan Logo" />
          </Link>
          <Link to="/member/profil-saya" className="d-block d-md-none">
            <img src={avatar + name} alt="" className="avatar rounded-circle" />
          </Link>
          <div className="collapse navbar-collapse d-none d-md-block" id="navbarMenu">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link to="/member/informasi-terbaru" className="nav-link position-relative">
                  <i className="ai-bell"></i>
                  <span className="bg-danger rounded-circle position-absolute" style={{ width: '10px', height: '10px', top: '10px', right: '6px', border: '1px solid white' }}></span>
                </Link>
              </li>
              <ul className="nav-item dropdown">
                <Link to="/member/profil-saya#" className="nav-link dropdown-toggle d-flex align-items-center gap-2" role="button" data-bs-toggle="dropdown">
                  <img src={avatar + name} alt="" className="avatar rounded-circle" />
                  {name}
                </Link>

                <ul className="dropdown-menu border-0 shadow-sm" style={{ left: 'auto', right: 0 }}>
                  <li className="mb-2">
                    <Link to="/member/profil-saya" className="dropdown-item d-flex align-items-center justify-content-between gap-2">
                      Profile Setting
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item d-flex align-items-center justify-content-between gap-2" onClick={handleLogout}>
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
