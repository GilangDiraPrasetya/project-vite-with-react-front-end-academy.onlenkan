import { Link } from 'react-router-dom';

function BottomMenu() {
  return (
    <>
      <div className="bottom-menu fixed-bottom bg-white shadow-sm py-2 container-fluid">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <Link to="/admin-academy" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname === '/admin-academy' ? 'active' : ''}`}>
            <i className="ai-dashboard"></i>
            <p className="fs-7">{window.location.pathname === '/admin-academy' ? 'Dashboard' : ''}</p>
          </Link>
          <Link to="/admin-academy/ecourses" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname.startsWith('/admin-academy/ecourses') ? 'active' : ''}`}>
            <i className="ai-desktop-device"></i>
            {window.location.pathname.startsWith('/admin-academy/ecourses') ? 'E-Course' : ''}
          </Link>
          <Link to="/admin-academy/manajemen-event" className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${window.location.pathname.startsWith('/admin-academy/manajemen-event') ? 'active' : ''}`}>
            <i className="ai-schedule"></i>
            {window.location.pathname.startsWith('/admin-academy/manajemen-event') ? 'Event' : ''}
          </Link>
          <Link
            to="#"
            data-bs-target="#menuCanvas"
            data-bs-toggle="offcanvas"
            className={`btn d-flex align-items-center justify-content-center gap-2 bottom-menu-link ${
              window.location.pathname.startsWith('/admin-academy/informasi') ||
              window.location.pathname.startsWith('/admin-academy/artikel') ||
              window.location.pathname.startsWith('/admin-academy/source-code') ||
              window.location.pathname.startsWith('/admin-academy/instructor') ||
              window.location.pathname.startsWith('/admin-academy/kategori') ||
              window.location.pathname.startsWith('/admin-academy/members') ||
              window.location.pathname.startsWith('/admin-academy/users') ||
              window.location.pathname.startsWith('/admin-academy/vouchers') ||
              window.location.pathname.startsWith('/admin-academy/reviews')
                ? 'active'
                : ''
            }`}
          >
            <i className="ai-more-horizontal-fill"></i>
            <p className="fs-7">
              {window.location.pathname.startsWith('/admin-academy/artikel')
                ? 'Artikel'
                : window.location.pathname.startsWith('/admin-academy/source-code')
                ? 'Source Code'
                : window.location.pathname.startsWith('/admin-academy/instructor')
                ? 'Mentor'
                : window.location.pathname.startsWith('/admin-academy/kategori')
                ? 'Kategori Event'
                : window.location.pathname.startsWith('/admin-academy/members')
                ? 'Member'
                : window.location.pathname.startsWith('/admin-academy/users')
                ? 'User'
                : window.location.pathname.startsWith('/admin-academy/informasi')
                ? 'Informasi'
                : window.location.pathname.startsWith('/admin-academy/vouchers')
                ? 'Vourchers'
                : window.location.pathname.startsWith('/admin-academy/review')
                ? 'Reviews'
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
            <Link to="/admin-academy" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname === '/admin-academy' ? 'active' : ''}`}>
              <i className="ai-dashboard"></i> Dashboard
            </Link>
            <Link to="/admin-academy/informasi" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/informasi') ? 'active' : ''}`}>
              <i className="ai-info"></i> Update Informasi
            </Link>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">E-Course</p>
            <Link
              to="/admin-academy/ecourses"
              className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${
                window.location.pathname.startsWith('/admin-academy/ecourses') || window.location.pathname.startsWith('/admin-academy/kategori-ecourse') ? 'active' : ''
              }`}
            >
              <i className="ai-desktop-device"></i> E-Course
            </Link>
            <Link to="/admin-academy/instructor-ecourse" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/instructor-ecourse') ? 'active' : ''}`}>
              <i className="ai-people-multiple"></i> Instructor
            </Link>
            <Link to="/admin-academy/manajemen-event" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/manajemen-event') ? 'active' : ''}`}>
              <i className="ai-schedule"></i> Event
            </Link>
            <Link to="/admin-academy/members" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/members') ? 'active' : ''}`}>
              <i className="ai-people-group"></i> Member Platform
            </Link>
            <Link to="/admin-academy/review-ecourse" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/review-ecourse') ? 'active' : ''}`}>
              <i className="ai-thumbs-up"></i> Review
            </Link>
            <Link to="/admin-academy/vouchers" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/vouchers') ? 'active' : ''}`}>
              <i className="ai-percentage"></i> Voucher
            </Link>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Resource</p>
            <Link
              to="/admin-academy/source-code"
              className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${
                window.location.pathname.startsWith('/admin-academy/source-code') || window.location.pathname.startsWith('/admin-academy/kategori-source-code') ? 'active' : ''
              }`}
            >
              <i className="ai-briefcase"></i> Source Code
            </Link>
            <Link
              to="/admin-academy/artikel"
              className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${
                window.location.pathname.startsWith('/admin-academy/artikel') || window.location.pathname.startsWith('/admin-academy/kategori-artikel') ? 'active' : ''
              }`}
            >
              <i className="ai-newspaper"></i> Artikel
            </Link>
            <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Manajemen Platform</p>
            <Link to="/admin-academy/users" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/user') ? 'active' : ''}`}>
              <i className="ai-people-multiple"></i> User
            </Link>
            <Link to="/admin-academy/profil" className={`sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ${window.location.pathname.startsWith('/admin-academy/profil') ? 'active' : ''}`}>
              <i className="ai-gear"></i> My Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomMenu;

