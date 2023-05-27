import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import menus from './Menu-Data';

import Logo from '../../assets/images/logo/logo-official-blue.png';

export default function Sidebar() {
  return (
    <aside className="sidebar p-3 bg-white d-none d-md-block">
      <Link to="/" className="d-block mx-auto sidebar-logo mb-5">
        <img src={Logo} alt="" />
      </Link>

      {menus.map((menu, key) => (
        <React.Fragment key={key}>
          <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">{menu.subMenu}</p>
          {menu.links.map((link, index) => (
            <NavLink key={index} to={link.to} activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
              <i className={link.icon}></i>
              {link.name}
            </NavLink>
          ))}
        </React.Fragment>
      ))}

      {/* <p className="text-secondary fs-7 fw-semibold mb-2 ms-3">Basic</p>
      <NavLink to="/member/" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <Dashboard /> Dashboard
      </NavLink>
      <NavLink to="/member/informasi-terbaru" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ">
        <Info /> Informasi Terbaru
      </NavLink>
      <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Kelas</p>
      <NavLink to="/member/kelas-saya" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ">
        <DesktopDevice /> Kelas Saya
      </NavLink>
      <NavLink to="/sertifikat" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <Newspaper /> Sertifikat
        <span className="badge bg-success" style={{ fontSize: '10px' }}>
          Soon
        </span>
      </NavLink>
      <NavLink to="/karya" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <Folder /> Karya Saya
        <span className="badge bg-success" style={{ fontSize: '10px' }}>
          Soon
        </span>
      </NavLink>
      <NavLink to="/member/event" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1 ">
        <Schedule /> Event
      </NavLink>
      <NavLink to="/member/beri-review" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <ThumbsUp /> Review Kelas
      </NavLink>
      <p className="text-secondary fs-7 fw-semibold mb-2 ms-3 mt-4">Transaksi</p>
      <NavLink to="/member/source-code" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <Briefcase /> Source Code
      </NavLink>
      <NavLink to="/member/transaksi" activeClassName="active" className="sidebar-link btn py-2 px-3 d-flex align-items-center gap-2 mb-1">
        <Basket /> Transaksi
      </NavLink> */}
    </aside>
  );
}
