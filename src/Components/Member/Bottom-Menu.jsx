import React from 'react';
import { Link } from 'react-router-dom';

function BottomMenu() {
  return (
    <>
      <div className="bottom-menu fixed-bottom bg-white shadow-sm py-2 container-fluid">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <Link to="/member" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname === '/member' ? 'active' : ''}`}>
            <i className="ai-dashboard"></i>
            <p className="fs-7">Dashboard</p>
          </Link>
          <Link to="/member/kelas-saya" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname.includes('/member/kelas-saya') ? 'active' : ''}`}>
            <i className="ai-desktop-device"></i>
            <p className="fs-7">E-Course</p>
          </Link>
          <Link to="/member/event" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname.includes('/member/event') ? 'active' : ''}`}>
            <i className="ai-schedule"></i>
            <p className="fs-7">Event</p>
          </Link>
          <Link to="/member/transaksi" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname.includes('/member/transaksi') ? 'active' : ''}`}>
            <i className="ai-basket"></i>
            <p className="fs-7">Transaksi</p>
          </Link>
          <Link
            to="#"
            type="button"
            data-bs-target="#menuCanvas"
            data-bs-toggle="offcanvas"
            className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${
              window.location.pathname.includes('/member/sertifikat-saya') ||
              window.location.pathname.includes('/member/karya-saya') ||
              window.location.pathname.includes('/member/source-code') ||
              window.location.pathname.includes('/member/profil-saya')
                ? 'active'
                : ''
            }`}
          >
            <i className="ai-more-horizontal-fill"></i>
            <p className="fs-7">
              {/* {window.location.pathname.includes('/member/sertifikat-saya') ||
              window.location.pathname.includes('/member/karya-saya') ||
              window.location.pathname.includes('/member/source-code') ||
              window.location.pathname.includes('/member/profil-saya')
                ? $title
                : 'Lainnya'} */}
              {window.location.pathname.includes('/member/sertifikat-saya')
                ? 'Sertifikat'
                : window.location.pathname.includes('/member/karya-saya')
                ? 'Karya Saya'
                : window.location.pathname.includes('/member/source-code')
                ? 'Source Code'
                : window.location.pathname.includes('/member/profil-saya')
                ? 'Profil'
                : 'Lainnya'}
            </p>
          </Link>
        </div>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuCanvas" aria-labelledby="menuCanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="menuCanvasLabel">
            Menu
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar w-100">
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">Basic</p>
            <Link to="/member" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname === '/member' ? 'active' : ''}`}>
              <i className="ai-dashboard"></i> Dashboard
            </Link>
            <Link to="/member/informasi-terbaru" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/informasi-terbaru') ? 'active' : ''}`}>
              <i className="ai-info"></i> Informasi Terbaru
            </Link>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Kelas</p>
            <Link to="/member/kelas-saya" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/kelas-saya') ? 'active' : ''}`}>
              <i className="ai-desktop-device"></i> Kelas Saya
            </Link>
            <Link to="#" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/sertifikat-saya') ? 'active' : ''}`}>
              <i className="ai-newspaper"></i> Sertifikat
              <span className="badge bg-success" style={{ fontSize: '10px' }}>
                Soon
              </span>
            </Link>
            <Link to="#" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/karya-saya') ? 'active' : ''}`}>
              <i className="ai-folder"></i> Karya Saya
              <span className="badge bg-success" style={{ fontSize: '10px' }}>
                Soon
              </span>
            </Link>
            <Link to="/member/event" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/event') ? 'active' : ''}`}>
              <i className="ai-schedule"></i> Event
            </Link>
            <Link to="/member/beri-review" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/beri-review') ? 'active' : ''}`}>
              <i className="ai-thumbs-up"></i> Review Kelas
            </Link>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Transaksi</p>
            <Link to="/member/source-code" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/source-code') ? 'active' : ''}`}>
              <i className="ai-briefcase"></i> Source Code
            </Link>
            <Link to="/member/transaksi" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.includes('/member/transaksi') ? 'active' : ''}`}>
              <i className="ai-basket"></i> Transaksi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
