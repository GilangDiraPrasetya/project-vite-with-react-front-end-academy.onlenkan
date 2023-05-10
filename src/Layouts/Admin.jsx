import React from 'react';
import Navbar from '../Components/Admin/Navbar';
import Sidebar from '../Components/Admin/Sidebar';
import BottomMenu from '../Components/Admin/Bottom-Menu';

export default function Admin({ children }) {
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
                <footer className="mt-5 mb-3">
                  <p className="fs-7 text-secondary text-center">Copyright &copy; 2023 Onlenkan Studio. All right reserved.</p>
                </footer>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none" style={{ marginTop: '100px' }}>
            <BottomMenu />
          </div>
        </div>
        {/* @include('components.admin.scripts') @stack('addon-script') */}
      </body>
    </>
  );
}
