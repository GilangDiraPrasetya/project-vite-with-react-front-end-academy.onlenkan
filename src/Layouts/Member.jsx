import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../Components/Member/Sidebar';
import Navbar from '../Components/Member/Navbar';
import BottomMenu from '../Components/Member/Bottom-Menu';

export default function Member({ children }) {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });

  return (
    <>
      <body className="bg-soft-blue">
        <div>
          <div className="d-flex">
            <Sidebar />
            <div className="content">
              <Navbar />
              <div className="container-fluid">
                {children}

                <footer className="mt-3 mb-3">
                  <p className="fs-7 text-secondary text-center">Copyright &copy; 2023 Onlenkan Studio. All right reserved.</p>
                </footer>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none" style={{ marginTop: '100px' }}>
            <BottomMenu />
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=6285159698221&text=Halo%20min!%0ASaya%20*{{ Auth::user()->name }}*%20member%20Onlenkan%20Academy.%0ASaya%20ada%20kendala..........."
            className="btn btn-success btn-sm d-flex gap-2 align-items-center justify-content-center position-fixed help-button"
          >
            <i className="ai-whatsapp-fill"></i> <span>Butuh bantuan?</span>
          </a>
        </div>
        {/* @include('components.member.scripts') @stack('addon-script') */}
      </body>
    </>
  );
}
